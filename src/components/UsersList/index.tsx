import React, { useState, useEffect } from 'react';
import ListLoading from '../ListLoading';
import SearchUser from '../SearchUser';
import UserDetails from '../UserDetails';

const UsersList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    handleFetchUsers();
  }, []);

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

  if (loading) {
    return (
      <div className="users-list">
        <ListLoading loading={loading} />
      </div>
    );
  }

  if (error) {
  }

  return (
    <div className="users-list">
      <SearchUser />
      <div className="users-list-container">
        {users.map((user, i) => {
          return <UserDetails key={i} userDetails={user} />;
        })}
      </div>
    </div>
  );
};

export default UsersList;
