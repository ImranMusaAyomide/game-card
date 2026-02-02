import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I start playing the game?",
      answer: "Simply click the 'Play' button in the header to create an account and begin your first tutorial battle."
    },
    {
      question: "Can I play with my friends?",
      answer: "Absolutely! You can play with your friends by inviting them to a private duel or joining a guild together."
    },
    {
      question: "How often do you release updates?",
      answer: "We release major content updates every month, including new cards, balancing changes, and limited-time events."
    },
    {
      question: "Where can I get help if I encounter an issue?",
      answer: "You can visit our community Discord or contact our support team through the help center for technical assistance."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-main-heading">The Arcane Codex: FAQ</h2>
        <p className="faq-sub-heading">Unveil the secret and Discover the Answers You Seek</p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                <span className="question-text">{item.question}</span>
                <FontAwesomeIcon 
                  icon={activeIndex === index ? faCaretDown : faCaretRight} 
                  className="faq-icon"
                />
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
