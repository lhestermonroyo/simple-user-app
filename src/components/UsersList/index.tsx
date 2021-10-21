import React, { useState, useEffect } from 'react';
import ListError from '../ListError';
import ListLoading from '../ListLoading';
import SearchUser from '../SearchUser';
import UserDetails from '../UserDetails';
import ListEmpty from '../ListEmpty';
import { searchUtil } from '../../utils/searchUtil';

type UsersListProps = {
  viewType: 'Cards' | 'Carousel';
};

const UsersList: React.FC<UsersListProps> = (props: UsersListProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchVal, setSearchVal] = useState<string>('');
  const [users, setUsers] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);

  // const { viewType } = props;

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
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log('Error', err);
        setError('An error occured while fetching users.');
      });
    setLoading(false);
  };

  const handleSearch = (searchVal: string) => {
    const results = searchUtil(searchVal, users);
    setSearchResults(results);
  };

  if (loading) {
    return <ListLoading loading={loading} />;
  }

  if (error) {
    return <ListError errorMsg={error} />;
  }

  return (
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
  );
};

export default UsersList;
