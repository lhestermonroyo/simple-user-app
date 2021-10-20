import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

type SearchUserProps = {
  searchVal: string;
  setSearchVal: (val: string) => void;
};

const SearchUser = (props: SearchUserProps) => {
  const { searchVal, setSearchVal } = props;

  return (
    <div className="search">
      <div className="search-container">
        <SearchOutlined className="search-icon" />
        <input
          type="search"
          placeholder="Search user's name or email..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchUser;
