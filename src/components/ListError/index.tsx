import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

type ListErrorProps = {
  errorMsg: string;
};

const ListError = (props: ListErrorProps) => {
  const { errorMsg } = props;
  return (
    <div className="users-list">
      <div className="list-loading">
        <ExclamationCircleFilled className="list-loading-icon" />
        <p>{errorMsg}</p>
      </div>
    </div>
  );
};

export default ListError;
