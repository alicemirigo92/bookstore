import React from 'react';
import { NavLink } from 'react-router-dom';
import userLogo from '../Images/userLogo.png';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="links">
        <div className="Logo">Bookstore CMS</div>
        <div className="navbar">
          <NavLink to="/" exact="true" className="list active">
            BOOKS
          </NavLink>
          <NavLink to="/categories" className="list">
            CATEGORIES
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
