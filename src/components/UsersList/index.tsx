import React, { useState, useEffect, useCallback } from 'react';
import ListError from '../ListError';
import ListLoading from '../ListLoading';
import SearchUser from '../SearchUser';
import UserDetails from '../UserDetails';
import ListEmpty from '../ListEmpty';
import { searchUtil } from '../../utils/searchUtil';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { carouselUtil } from '../../utils/carouselUtil';

type UsersListProps = {
  viewType: 'Cards' | 'Carousel';
};

const UsersList: React.FC<UsersListProps> = (props: UsersListProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchVal, setSearchVal] = useState<string>('');
  const [users, setUsers] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const [currentUser, setCurrentUser] = useState<number>(0);

  const { viewType } = props;

  useEffect(() => {
    handleFetchUsers();
  }, []);

  useEffect(() => {
    if (searchVal) {
      handleSearch(searchVal);
    }
  }, [searchVal]);

  const handleFetchUsers = async () => {
    setLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res);
        }

        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log('Error', err);
        setError('An error occured while fetching users.');
      });
    setLoading(false);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'ArrowLeft') {
      handleCarousel('left');
    }

    if (e.key === 'ArrowRight') {
      handleCarousel('right');
    }
  };

  const handleSearch = (searchVal: string) => {
    const results = searchUtil(searchVal, users);
    setSearchResults(results);
  };

  useEffect(() => {
    if (viewType === 'Carousel') {
      window.addEventListener('keyup', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, [viewType, handleKeyPress]);

  const handleCarousel = (dir: string) => {
    let newCurrentUser = carouselUtil(dir, currentUser, users.length) as number;
    setCurrentUser(newCurrentUser);
  };

  if (loading) {
    return <ListLoading loading={loading} />;
  }

  if (error) {
    return <ListError errorMsg={error} />;
  }

  return (
    <div className='container'>
      {viewType === 'Cards' ? (
        <div className='users-list'>
          <SearchUser searchVal={searchVal} setSearchVal={setSearchVal} />
          {searchResults !== null && searchResults.length === 0 && (
            <ListEmpty searchVal={searchVal} />
          )}
          <div className='users-list-container'>
            {searchVal.length === 0
              ? users.map((user, i) => {
                  return <UserDetails key={i} userDetails={user} />;
                })
              : searchResults !== null &&
                searchResults.map((user, i) => {
                  return <UserDetails key={i} userDetails={user} />;
                })}
          </div>
        </div>
      ) : (
        <div className='users-carousel-container'>
          <button
            className='left-control'
            onClick={() => handleCarousel('left')}
          >
            <LeftOutlined className='control-icon' />
          </button>
          <UserDetails userDetails={users[currentUser]} />
          <button
            className='right-control'
            onClick={() => handleCarousel('right')}
          >
            <RightOutlined className='control-icon' />
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersList;
