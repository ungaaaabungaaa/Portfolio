import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (location.pathname === '/contact') {
      navigate('/'); // Navigate to home page if on work page
    } else {
      navigate('/contact'); // Navigate to work page if on home page
    }
  };

  const getHeaderText = () => {
    if (location.pathname === '/contact') {
      return "Go Back";
    } else {
      return 'Let\'s Work Together!';
    }
  };

  return (
    <div className='header' onClick={handleNavigation}>
      <h3 className='header_h3'>{getHeaderText()}</h3>
    </div>
  );
}

export default Header;
