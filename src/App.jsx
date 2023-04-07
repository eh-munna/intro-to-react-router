import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="container mx-auto p-2 md:p-4">
        <>
          <Header />
          <Outlet />
        </>
      </div>
    </div>
  );
};

export default App;
