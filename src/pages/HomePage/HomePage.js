import React from 'react';
import './HomePage.scss';
import HeroSection from '../../components/HeroSection/HeroSection';
import MediaSection from '../../components/MediaSection/MediaSection';

function HomePage(props) {
  return (
    <div className="home-page">
      <HeroSection />
      <MediaSection />
    </div>
  );
}

export default HomePage;
