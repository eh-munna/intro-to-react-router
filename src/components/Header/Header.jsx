import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-around font-semibold text-blue-500">
          <li className="border px-2 rounded-md border-lime-600">
            <Link to="/">Home</Link>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <Link to="/about">About</Link>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <Link to="/friends">Friends</Link>
          </li>
          <li className="border px-2 rounded-md border-lime-600">
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
