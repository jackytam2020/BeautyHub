import React from 'react';
import './AboutUs.scss';

function AboutUs(props) {
  return (
    <div className="about-us-page">
      <div className="about-us-page__copy">
        <h1 className="about-us-page__header">We care... a lot.</h1>
        <p>
          Here at beauty et al. we care a lot about your beauty goals. Every
          service includes a consultation to set realistic expectations so you
          know exactly what we can achieve, together. If there are any concerns,
          just ask! We’ve been in the biz a long time, we understand.
        </p>
        <p>This is what you can expect when visiting:</p>
        <ul>
          <li>An oasis-like experience in a clean and cozy environment</li>
          <li>
            A professional assessment and consultation so you know what to
            expect from your services
          </li>
          <li>
            High quality products (we take product sourcing seriously to ensure
            our clients only get the best of the best)
          </li>
          <li>
            A friendly team that loves working together (No, seriously! We love
            our jobs)
          </li>
          <li>
            Leaving the venue feeling more educated about your services and how
            to maintain the results once you get home
          </li>
        </ul>
        <p>
          If you have any special accommodations, please do not hesitate to
          reach out to us at hello@beautyhub.ca
        </p>
        <p>Thank you for visiting and we hope to see you soon! </p>
        <p> - beauty et al. </p>
      </div>
    </div>
  );
}

export default AboutUs;
