import React from 'react';
import './News.css';
import newsImg1 from './assets/newsimg1.svg';
import newsImg2 from './assets/newsimg2.svg';
import newsImg3 from './assets/newsimg3.svg';

const News = () => {
  const newsItems = [
    {
      id: 1,
      image: newsImg1,
      title: 'Latest Updates & Exciting Events',
      desc: 'By the ancient bonds of magic and fate, I call upon the force great fire blaze, let shadows rise unleash the power before my eyes.'
    },
    {
      id: 2,
      image: newsImg2,
      title: 'New Cards & Hot Updates.',
      desc: 'By the ancient bonds of magic and fate, I call upon the force great fire blaze, let shadows rise unleash the power before my eyes.'
    },
    {
      id: 3,
      image: newsImg3,
      title: 'The battle log: What\'s New?',
      desc: 'By the ancient bonds of magic and fate, I call upon the force great fire blaze, let shadows rise unleash the power before my eyes.'
    }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-main-heading">Latest News</h2>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-image-wrapper">
                <img src={item.image} alt={item.title} className="news-img" />
              </div>
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.desc}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;