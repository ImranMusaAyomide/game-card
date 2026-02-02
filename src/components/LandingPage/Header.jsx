import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ginter from '../../assets/ginter.svg';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
  };

  return (
    <header className="ginter-header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src={Ginter} alt="Giniti Logo" className="logo-icon" />
          </Link>
        </div>

        <nav className="nav-menu">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#getting-started" className="nav-link">Getting Started</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="header-actions">
          {user ? (
            <div className="profile-menu">
              <button
                className="profile-button"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <span className="profile-avatar">{user.username.charAt(0).toUpperCase()}</span>
                <span className="profile-name">{user.username}</span>
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  <div className="profile-info">
                    <div className="profile-avatar-large">{user.username.charAt(0).toUpperCase()}</div>
                    <div className="profile-details">
                      <p className="profile-username">{user.username}</p>
                      <p className="profile-email">{user.email}</p>
                    </div>
                  </div>
                  <div className="profile-divider"></div>
                  <button className="profile-option">Profile Settings</button>
                  <button className="profile-option">Account</button>
                  <div className="profile-divider"></div>
                  <button className="profile-logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signup" className="btn-signin">Sign In</Link>
              <button className="btn-play">Play Now</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
