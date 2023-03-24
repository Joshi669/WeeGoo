import React from 'react';
import logo from '../logo.svg'; // Replace this with the path to your logo

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Wee Travel Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;