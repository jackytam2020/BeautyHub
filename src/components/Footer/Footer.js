import React from 'react';
import './Footer.scss';
function Footer(props) {
  return (
    <section className="footer">
      <div className="footer__column">
        <h3 className="footer__column-header">Location</h3>
        <p className="footer__column-content">
          86 Yorkville Ave. 2nd Flr. Toronto, ON. M5R 1B9
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-header">Hours</h3>
        <p className="footer__column-content">
          Monday — Friday 10am — 8pm Saturday 10am — 7pm Sunday 10am — 5pm
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-header">Contact</h3>
        <p className="footer__column-content">
          hello@beautyetal.ca (647) 977-9187
        </p>
      </div>
    </section>
  );
}

export default Footer;
