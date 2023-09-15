import React from 'react';
import './Footer.scss';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
function Footer(props) {
  return (
    <section className="footer">
      <div className="footer__column">
        <h3 className="footer__column-header">Location</h3>
        <p className="footer__column-content">
          162 Cumberland St, Toronto, ON. M5R 3N5
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-header">Hours</h3>
        <p className="footer__column-content">
          Monday — Friday 10am — 8pm Saturday
          <br /> 10am — 7pm Sunday <br />
          10am — 5pm
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-header">Contact</h3>
        <p className="footer__column-content">
          hello@beautyhub.ca (647) 937-3642
        </p>
        <div className="footer__social-icons-holder">
          <a href="">
            <FaFacebookF className="footer__icons" />
          </a>
          <a href="">
            <FaInstagram className="footer__icons" />
          </a>
          <a href="hello@beautyhub.ca">
            <TfiEmail className="footer__icons" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
