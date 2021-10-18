import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const SearchUser = () => {
  return (
    <div className="search">
      <div className="search-container">
        <SearchOutlined className="search-icon" />
        <input type="search" placeholder="Search user's name or email..." />
      </div>
    </div>
  );
};

export default SearchUser;
