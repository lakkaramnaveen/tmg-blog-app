import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header className='header'>
    <h1>My Blog App</h1>
    <button className='header-button'>
      <Link to={`/create`} className='header-link'>Create Post</Link>
    </button>
  </header>
);

export default Header;
