import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

type ListEmptyProps = {
  searchVal: string;
};

const ListEmpty = (props: ListEmptyProps) => {
  const { searchVal } = props;
  return (
    <div className="list-loading">
      <FrownOutlined className="list-loading-icon" />
      <p>
        No results for <strong>{searchVal}</strong>.
      </p>
    </div>
  );
};

export default ListEmpty;
