import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="">
        <ul>
          <li className="list-none">
            <a href="/">Home</a>
          </li>
          <li className="list-none">
            <a href="/about">About</a>
          </li>
          <li className="list-none">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
