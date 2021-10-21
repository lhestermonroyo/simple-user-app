import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UsersList from './components/UsersList';

const App: React.FC = () => {
  const [viewType, setViewType] = useState<'Cards' | 'Carousel'>('Cards');

  return (
    <div>
      <Header viewType={viewType} setViewType={setViewType} />
      <UsersList viewType={viewType} />
    </div>
  );
};

export default App;
