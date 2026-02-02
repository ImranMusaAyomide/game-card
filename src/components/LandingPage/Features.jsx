import React from 'react';
import './Features.css';
import skullIcon from '../../assets/skull.svg';
import bowIcon from '../../assets/bow-remix.svg';
import hammerIcon from '../../assets/hammer.svg';
import axeIcon from '../../assets/axe.svg';
import candleIcon from '../../assets/candle-rounded.svg';
import handsIcon from '../../assets/hands.svg';
import questionIcon from '../../assets/question.svg';
import Background from '../../assets/background.svg'

const Features = () => {
  const classIcons = [
    { name: 'skull', img: skullIcon },
    { name: 'archer', img: bowIcon },
    { name: 'priest', img: candleIcon },
    { name: 'warrior', img: axeIcon },
    { name: 'mage', img: questionIcon },
    { name: 'blacksmith', img: hammerIcon },
    { name: 'wildcard', img: handsIcon },
  ];

  return (
    <section className="features-section">


      <div className="features-intro">
        <div className="intro-text">
          <h2>Enter <span className="highlight">The Illimitable Card Battle</span></h2>
          <p>
            Enter a world of strategists and skill with out-thrilling card games 
            where every move counts! Build your ultimate deck, challenge players 
            worldwide, and master powerful card combinations to claim victory.
          </p>
          <button className="view-all-btn">View All</button>
        </div>


        <div className="icons-grid">
          {classIcons.map((icon, index) => (
            <div key={index} className={`icon-card ${icon.name === 'wildcard' ? 'wildcard' : ''}`}>
              <img src={icon.img} alt={icon.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="key-features-container">

        <div className="key-feature-content">
          <h2 className="feature-heading">KEY FEATURE</h2>
          <p className="feature-description">
            Start playing and collect all 5 stars of Satuya or defeat 3 troops from three kingdoms 
            and you will be the champion. Outsmart your opponents with a deep and engaging 
            strategy system. Every card counts.
          </p>
        </div>
        
        <div className="grouped-cards-visual">
          <img src={Background} alt="Card Collection" className="grouped-cards-img" />
        </div>
      </div>
    </section>
  );
};

export default Features;
