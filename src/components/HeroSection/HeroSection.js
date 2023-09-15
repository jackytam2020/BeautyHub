import React from 'react';
import './HeroSection.scss';
import Button from '../atoms/Button/Button';

function HeroSection(props) {
  return (
    <section className="hero-section">
      <div className="hero-section__top">
        <h1 className="hero-section__header">
          The key to rejuvenation is right next door.
        </h1>
      </div>
      <div className="hero-section__bottom">
        <div className="hero-section__copy-container">
          <p className="hero-section__copy">
            Your center of rest and relaxation is located at 162 Cumberland St.
          </p>
          <p className="hero-section__sub-copy">
            We are in between Sunglasses Hut and Oliver’s Jewellers.
          </p>
          <div className="hero-section__book-btn">
            <a href="">
              <Button text={'Book an Appointment'} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
