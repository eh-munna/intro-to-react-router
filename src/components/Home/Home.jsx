import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import App from '../../App';

const Home = () => {
  return (
    <div className="container mx-auto p-2 md:p-3">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
