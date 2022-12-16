import React, { useState, useEffect } from 'react';
import './ProductCard.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductCard({ default_price, id, images, name, metadata }) {
  const [price, setPrice] = useState('');
  const stripeKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

  const getPrice = async () => {
    const response = await axios.get(
      `https://api.stripe.com/v1/prices/${default_price}`,
      {
        headers: { authorization: `bearer ${stripeKey}` },
      }
    );

    //add decimals for cents
    const decimalAmount = response.data.unit_amount_decimal;
    const modifiedDecimalAmount = decimalAmount.split('');
    modifiedDecimalAmount.splice(modifiedDecimalAmount.length - 2, 0, '.');

    setPrice(modifiedDecimalAmount.join(''));
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <div className="product-card">
      <Link to={`/product-listing/${id}`}>
        <img src={images[0]} className="product-card__image" alt={name} />
        <h2 className="product-card__title">{name}</h2>
        <p className="product-card__price">
          {metadata.size2 ? `From $${price}` : `$${price}`}
        </p>
      </Link>
    </div>
  );
}

export default ProductCard;
