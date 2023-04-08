import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-around font-semibold text-blue-500">
          <li className="border px-2 rounded-md border-lime-600">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <ActiveLink to="/contact">Contact</ActiveLink>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <ActiveLink to="/friends">Friends</ActiveLink>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <ActiveLink to="/posts">Posts</ActiveLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
