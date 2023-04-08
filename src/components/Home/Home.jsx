import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="container mx-auto p-2 md:p-3">
      <Header></Header>
      <div className={navigation.state === 'loading' ? 'text-indigo-500' : ''}>
        {navigation.state === 'loading' ? 'Loading...' : ''}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
