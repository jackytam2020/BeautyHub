import React from 'react';
import './Hair.scss';

import ServiceItem from '../../components/ServiceItem/ServiceItem';

import { hair } from '../../data/services';

function Hair(props) {
  return (
    <div className="hair-page">
      <div className="hair-page__header-copy">
        <h1 className="hair-page__header">HAIR SERVICES</h1>
      </div>

      <main className="hair-page__services-list">
        <div className="hair-page__service-category">
          <h3 className="hair-page__category-header">Hair</h3>
          <p className="hair-page__hair-disclaimer">
            *All colour services includes olaplex treatment, gloss, blow-dry and
            style.
          </p>

          <div className="hair-page__hair-services">
            {hair.map((service) => {
              return <ServiceItem key={service.serviceName} {...service} />;
            })}
          </div>
        </div>

        <div className="hair-page__service-category">
          <h3 className="hair-page__category-header">Add ons:</h3>
          <div className="hair-page__addon-services">
            <ServiceItem
              serviceName={'Olaplex Treatment'}
              price={'40'}
              description={
                'Price only applicable when already booking a hair service.'
              }
            />
            <ServiceItem serviceName={'K18 Pro Hair Treatment'} price={'85'} />
          </div>

          <div className="hair-page__restoration-category">
            <h3 className="hair-page__category-header">
              Hair Restoration Treatments
            </h3>
            <div className="hair-page__restoration-services">
              <ServiceItem
                serviceName={'Olaplex Treatment'}
                price={'90+'}
                description={
                  'Feeling a bit dry? Come in for the Olaplex treatment. '
                }
              />
            </div>
          </div>

          <p className="hair-page__booking-information">
            * if you have any questions or concerns regarding booking please do
            not hesitate to contact us at hello@beautyhub.ca to avoid
            disappointment!
          </p>
          <p className="hair-page__booking-information">
            All prices are subject to consultation, considering hair density,
            time involved and amount of products used.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Hair;
