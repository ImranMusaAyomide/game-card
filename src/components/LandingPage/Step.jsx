import React from 'react';
import './Step.css';
import ArrowMan from '../../assets/arrow-man.svg';

const Step = () => {
  return (
    <section className="step-section">
    <div>
        <img src={ArrowMan} alt="" />
    </div>
      <div className="step-container">
        <div className="step-content">
          <h2 className="step-title">
            STEP INTO THE DUEL, <br />
            BEGIN YOUR JOURNEY!
          </h2>
          <button className="view-info-btn">View Info</button>
        </div>
      </div>
    </section>
  );
};

export default Step;
