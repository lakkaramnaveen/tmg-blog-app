import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <h1>My Blog App</h1>
      <div className='header-buttons'>
        <button className="create-post" onClick={() => navigate('/create')}>
          Create Post
        </button>
        <button className="go-home-bt" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Header;
