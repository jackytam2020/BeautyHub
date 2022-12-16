import React from 'react';
import './FAQ.scss';
import { faqQuestions } from '../../data/faq';

import DropDown from '../../components/DropDown/DropDown';

function FAQ(props) {
  return (
    <div className="faq-page">
      <div className="faq-page__copy">
        <h1 className="faq-page__header">Frequently Asked Questions</h1>
      </div>

      <section className="faq-page__questions-section">
        <div className="faq-page__questions-container">
          <div className="faq-page__dropdown-list">
            {faqQuestions.map((item) => (
              <DropDown key={item} question={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
