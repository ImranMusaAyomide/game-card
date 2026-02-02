import React from 'react';
import './Footer.css';
import Logo from './assets/ginter.svg';
const Footer = () => {
  return (
    <footer className="ginter-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="logo-section">
            <img src={Logo} alt="Ginter Logo" className="footer-logo" />
          </div>
        </div>

        <div className="footer-column">
          <h3>About Ginter</h3>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#touch">Get In Touch</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>PRODUCT</h3>
          <ul>
            <li><a href="#how-to-play">How To Play</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>LEGAL INFORMATION</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Ready To Play</h3>
          <p>Join Our Community For Free. No Spam Ever.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your Email" />
            <button type="submit" className="btn-join">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;