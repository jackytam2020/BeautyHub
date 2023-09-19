import React, { useState } from 'react';
import './DropDown.scss';

import { HiMinus, HiPlus } from 'react-icons/hi';

function DropDown({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  let dropDownContent;

  if (question === 'Brows, Lamination + Tints') {
    dropDownContent = (
      <div className="drop-down__content">
        <p>
          Looking to grow to naturally fluffy brows? Follow your stylist's
          recommendations and avoid tweezing in between appointments to maintain
          the best long-term shape.
        </p>
        <p>AVOID THE FOLLOWING FOR 24-72 HOURS (AROUND BROW AREA): </p>

        <p>24 HOURS:</p>
        <ul>
          <li>Getting the brow area wet</li>
          <li>Applying any further or heavy makeup</li>
          <li>
            - Excessive rubbing or touching the brow area as it can add oils in
            the area from fingers/hands – it can clog the open pores, resulting
            in spots
          </li>
        </ul>

        <p>48 HOURS:</p>
        <ul>
          <li>
            Prolonged exposure to direct sunlight, use of sunbeds, saunas, steam
            rooms and swimming pools
          </li>
        </ul>

        <p>72 HOURS:</p>
        <ul>
          <li>
            All makeup, facial cleansers, exfoliating (AHA, BHA or scrubs) and
            using anti-aging skincare
          </li>
          <li>Self-tanning products – prevent discolouration of your tint</li>
        </ul>

        <p>
          Tinting results will be darker and more defined immediately after your
          treatment. The makeup applied is not permanent and the tint will fade
          depending on the frequency of cleansing.
        </p>
        <p>
          Please let your stylist know immediately if you experience any
          swelling, itchy rashes, bruising, skin grazing or cuts after your
          treatment so they can advise you on the correct procedure to follow.
        </p>
      </div>
    );
  }

  if (question === 'Lash Extension, Lifts + Tints') {
    dropDownContent = (
      <div className="drop-down__content">
        <p>
          Let’s keep your eyelashes at it’s ultimate care. After the procedure,
          please brush your lashes daily and wash extensions approximately every
          3 days. Always stay on top of your refills, we recommend every 2-3
          weeks. Please book accordingly.
        </p>
        <p>AVOID THE FOLLOWING: </p>

        <p>24 HOURS:</p>
        <ul>
          <li>Getting the brow area wet</li>
          <li>
            The use of saunas, steam rooms and swimming pools – it will weaken
            the lift or the extensions will fall out
          </li>
          <li>All makeup in the eye area</li>
          <li>
            All facial treatments that require skincare or face steam procedures
          </li>
        </ul>

        <p>SERVICED LASH DURATION:</p>
        <ul>
          <li>Rubbing or picking at your lashes </li>
          <li>Harsh products on your eyes/lashes</li>
          <li>Waterproof mascara</li>
          <li>Sleeping on your face</li>
        </ul>
      </div>
    );
  }

  if (question === 'How Do I Clean My Eyelash Extensions') {
    dropDownContent = (
      <div className="drop-down__content">
        <p>
          Get into a habit of washing your eyelash extensions every 3 days. This
          helps remove traces of natural oils, dust and make-up. This will
          prevent any build-ups that cause pressure on your lashes that breaks
          down the bonds. You will need to really clean through your lashes to
          avoid premature lash shedding.
        </p>

        <p>STEPS TO CLEANING:</p>
        <ol>
          <li>
            Remove any residue of makeup with an oil-free cleanser around the
            eye area.
          </li>
          <li>Wet your lashes with water.</li>
          <li>Apply a pump of lash shampoo on each eye.</li>
          <li>
            Use the soft bristle brush to brush through the lashes for at least
            5 seconds.
          </li>
          <li>Gently rinse off your lashes thoroughly with water.</li>
          <li>Pat dry with a lint-free towel. Let eyelashes dry a bit.</li>
          <li>Brush your lashes with a mascara wand.</li>
        </ol>
      </div>
    );
  }

  if (question === 'Booking Policy') {
    dropDownContent = (
      <div className="drop-down__faq-content">
        <p>
          Cancel for free up to{' '}
          <span className="drop-down__bolded">12 hours </span>ahead, otherwise
          you will be charged <span className="drop-down__bolded">30%</span> of
          the service price for late cancellation or{' '}
          <span className="drop-down__bolded">50%</span> for not showing up.
        </p>
      </div>
    );
  }

  if (question === 'Retail Refund Policy') {
    dropDownContent = (
      <div className="drop-down__faq-content">
        <p>
          Unfortunately we are unable to offer refunds on our products at this
          time. If you have any concerns please email hello@beautyhub.ca
        </p>
      </div>
    );
  }
  return (
    <div className="drop-down">
      <div
        className="drop-down__question-holder"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h3 className="drop-down__question">{question}</h3>
        <div className="drop-down__menu-button">
          {isOpen ? (
            <HiMinus className="drop-down__menu-icons" />
          ) : (
            <HiPlus className="drop-down__menu-icons" />
          )}
        </div>
      </div>
      <div
        className={
          isOpen ? 'drop-down__content--opened' : 'drop-down__content--closed'
        }
      >
        {dropDownContent}
      </div>
    </div>
  );
}

export default DropDown;
