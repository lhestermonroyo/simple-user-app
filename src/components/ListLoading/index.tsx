import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

type ListLoadingProps = {
  loading: boolean;
};

const ListLoading = (props: ListLoadingProps) => {
  const { loading } = props;

  if (loading) {
    return (
      <div className="list-loading">
        <LoadingOutlined className="list-loading-icon" />
        <p>Loading list, please wait...</p>
      </div>
    );
  }

  return null;
};

export default ListLoading;
