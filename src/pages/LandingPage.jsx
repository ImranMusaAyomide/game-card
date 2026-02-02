import React from 'react';
import Header from '../components/LandingPage/Header';
import Hero from '../components/LandingPage/Hero';
import Features from '../components/LandingPage/Features';
import News from '../components/LandingPage/News';
import Faq from '../components/LandingPage/Faq';
import Step from '../components/LandingPage/Step';
import Footer from '../components/LandingPage/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <News />
      <Faq />
      <Step />
      <Footer />
    </>
  );
};

export default LandingPage;
