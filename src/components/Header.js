import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <h1 onClick={() => navigate('/')}>My Blog App</h1>
      <div className='header-buttons'>
        <button className="header-create-post" onClick={() => navigate('/create')}>
          Create Post
        </button>
        <button className="header-go-home " onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Header;
