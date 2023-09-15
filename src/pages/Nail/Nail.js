import React from 'react';
import './Nail.scss';

import ServiceItem from '../../components/ServiceItem/ServiceItem';

import { manicure, addons, pedicure } from '../../data/services';

function Nail(props) {
  return (
    <div className="nail-page">
      <div className="nail-page__header-copy">
        <h1 className="nail-page__header">NAIL SERVICES</h1>
        <p className="nail-page__disclaimer">
          *Please book removal and/or design if needed. If previous work is done
          by us, removal will not be charged at checkout.
        </p>
      </div>

      <main className="nail-page__services-list">
        <div className="nail-page__service-category">
          <h3 className="nail-page__category-header">Manicure</h3>
          <p className="nail-page__manicure-info">
            *All manicure services come in a package which includes nail
            shaping, cuticle care, prep for polish application, relaxing
            massage, hot towel and one colour.
          </p>

          <div className="nail-page__manicure-services">
            {manicure.map((service) => {
              return <ServiceItem key={service.serviceName} {...service} />;
            })}
          </div>

          <p>*Any fills over 4 weeks is considered an overlay service.</p>
        </div>
        <div className="nail-page__service-category">
          <h3 className="nail-page__category-header">Add ons/Nail Art:</h3>

          <div className="nail-page__addon-services">
            {addons.map((service) => {
              return <ServiceItem key={service.serviceName} {...service} />;
            })}
          </div>
          <p>
            * If you have any questions or concerns regarding booking please do
            not hesitate to contact us at hello@beautyhub.ca to avoid
            disappointment!
          </p>
        </div>
        <div className="nail-page__service-category">
          <h3 className="nail-page__category-header">Pedicure</h3>
          <div className="nail-page__pedicure-services">
            {pedicure.map((service) => {
              return <ServiceItem key={service.serviceName} {...service} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Nail;
