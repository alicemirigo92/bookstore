import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import userLogo from '../Images/userLogo.png';

function Navigation() {
  return (
    <nav>
      <div className="links">
        <div className="Logo">Bookstore CMS</div>
        <div className="navbar">
          <NavLink to="/" exact="true" className="list active">
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
