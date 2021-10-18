import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <div>
      <Header />
      <UsersList />
    </div>
  );
};

export default App;
