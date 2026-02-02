import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroAsset from '../../assets/hero-asset.svg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            EPIC CARD DUEL <br />
            AWAITS YOU!
          </h1>
          <p className="hero-description">
            Become a master in the newest card game! Collect cards, strategies, 
            and defeat your opponents in epic battles!
          </p>
          <div className="hero-buttons">
            <button className="btn-play-now">Play Now</button>
            <Link to="/signup" className="btn-learn-now">Sign Up Now</Link>
          </div>
        </div>

        <div className="hero-asset-container">
          <img src={heroAsset} alt="Hero asset" className="hero-asset" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
