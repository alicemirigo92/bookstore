import React from 'react';
import { NavLink } from 'react-router-dom';
import userLogo from '../Images/userLogo.png';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="links">
        <div className="Logo">My Bookstore</div>
        <div className="navbar">
          <NavLink to="/" exact className="list active">
            Books
          </NavLink>
          <NavLink to="/categories" className="list">
            Categories
          </NavLink>
        </div>
      </div>
      <div className="user">
        <img src={userLogo} alt="userLogo" />
      </div>
    </nav>
  );
}

export default Navigation;
