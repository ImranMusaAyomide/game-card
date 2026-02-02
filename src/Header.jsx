import React from 'react';
import Ginter from './assets/ginter.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="ginter-header">
      <div className="header-container">
        <div className="logo-section">
          <img src={Ginter} alt="Giniti Logo" className="logo-icon" />
        </div>

        <nav className="nav-menu">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#getting-started" className="nav-link">Getting Started</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="header-actions">
          <button className="btn-signin">Sign In</button>
          <button className="btn-play">Play</button>
        </div>
      </div>
    </header>
  );
};

export default Header;