import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'bg-lime-600 text-slate-200' : ''
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
