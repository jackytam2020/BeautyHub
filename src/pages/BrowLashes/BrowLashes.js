import React from 'react';
import './BrowLashes.scss';

import { brows, lashes } from '../../data/services';
import { afterCare } from '../../data/aftercare';

import ServiceItem from '../../components/ServiceItem/ServiceItem';
import DropDown from '../../components/DropDown/DropDown';

function BrowLashes(props) {
  return (
    <div className="brow-lashes-page">
      <div className="brow-lashes-page__header-copy">
        <h1 className="brow-lashes-page__header">BROW & LASH SERVICES</h1>
      </div>

      <main className="brow-lashes-page__services-list">
        <div className="brow-lashes-page__service-category">
          <h3 className="brow-lashes-page__category-header">Brows</h3>

          <div className="brow-lashes-page__brow-services">
            {brows.map((service) => {
              return <ServiceItem key={service.serviceName} {...service} />;
            })}
          </div>

          <div className="brow-lashes-page__packages-category">
            <h3 className="brow-lashes-page__category-header">Packages</h3>

            <div className="brow-lashes-page__package-services">
              <ServiceItem
                serviceName={'Fresh Face'}
                price={'180'}
                description={
                  'Leave with a beautiful fresh face. Still looking fabulous on those no make-up days. This service includes Brow Lamination + Lash lift + Tint.'
                }
              />
            </div>
          </div>

          <p className="brow-lashes-page__booking-information">
            * if you have any questions or concerns regarding booking please do
            not hesitate to contact us at hello@beautyhub.ca to avoid
            disappointment!
          </p>
        </div>

        <div className="brow-lashes-page__service-category">
          <h3 className="brow-lashes-page__category-header">Lashes</h3>

          <div className="brow-lashes-page__lash-services">
            {lashes.map((service) => {
              return <ServiceItem key={service.serviceName} {...service} />;
            })}
          </div>
        </div>
      </main>

      <section className="brow-lashes-page__after-care-section">
        <div className="brow-lashes-page__after-care-container">
          <h1 className="brow-lashes-page__care-header">AFTERCARE</h1>

          <div className="brow-lashes-page__dropdown-list">
            {afterCare.map((item) => (
              <DropDown key={item} question={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrowLashes;
