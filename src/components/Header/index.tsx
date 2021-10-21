import React from 'react';
import { AppstoreFilled, IdcardFilled } from '@ant-design/icons';

type HeaderProps = {
  viewType: 'Cards' | 'Carousel';
  setViewType: (viewType: 'Cards' | 'Carousel') => void;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { viewType, setViewType } = props;
  console.log(viewType);
  return (
    <div className='header'>
      <div className='header-container'>
        <p className='header-title'>Users List</p>
        <button
          title={`View as ${viewType === 'Carousel' ? 'Cards' : 'Carousel'}`}
          className='header-button'
          onClick={() =>
            setViewType(viewType === 'Carousel' ? 'Cards' : 'Carousel')
          }
        >
          {viewType === 'Carousel' ? (
            <AppstoreFilled className='header-button-icon' />
          ) : (
            <IdcardFilled className='header-button-icon' />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
