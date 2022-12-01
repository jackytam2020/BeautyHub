import React from 'react';
import './ServiceItem.scss';

function ServiceItem(props) {
  return (
    <div className="service-item">
      <div className="service-item__item-name-price">
        <p className="service-item__item-name">{props.serviceName}</p>
        <p className="service-item__item-price">{`$${props.price}`}</p>
      </div>
      <p className="service-item__description">{props.description}</p>
      {props.disclaimer && (
        <p className="service-item__disclaimer">{props.disclaimer}</p>
      )}
      {props.serviceName === 'K18 Pro Hair Treatment' && (
        <div className="service-item__extended-description">
          <p>*Take home 5ml Hair Mask included in this service</p>
          <p>
            Infused with our patented K18PEPTIDE™, clinically proven to reverse
            damage in just 4 minutes.
          </p>
          <ul>
            <li>
              Repairs damage from bleach + colour, chemical services, and heat
            </li>
            <li>
              Restores strength, softness, smoothness, and bounce for all hair
              types
            </li>
            <li>Lasting + progressive results get better with continued use</li>
            <li>Vegan, color-safe, cruelty-free</li>
          </ul>
          <p>
            With just one salon treatment using the K18 PRO Service (PRO mist +
            mask), hair is restored up to:
          </p>
          <p>91% original strength*</p>
          <p>94% original elasticity*</p>
        </div>
      )}
    </div>
  );
}

export default ServiceItem;
