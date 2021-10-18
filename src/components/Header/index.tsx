import React from 'react';
import { GithubFilled } from '@ant-design/icons';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <p className="header-title">Users List</p>
        <a href="https://github.com" target="_blank" className="header-link">
          <GithubFilled />
        </a>
      </div>
    </div>
  );
};

export default Header;
