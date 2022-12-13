import React, { useContext, useState, useEffect } from 'react';
import './Cart.scss';
import CartRow from '../../components/CartRow/CartRow';
import Button from '../../components/atoms/Button/Button';

import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';

function Cart(props) {
  const cart = useContext(CartContext);

  const totalPrice = cart.items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const handleCheckout = async () => {
    await fetch('http://localhost:8080/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        window.location.assign(response.url);
      });
  };

  const emptyCartUI = (
    <div className="cart__empty-cart">
      <p className="cart__empty-message">
        You have nothing in your shopping cart.
      </p>
      <Link to={'/shop'}>
        <Button text={'Continue Shopping'} size={'large'} />
      </Link>
    </div>
  );

  const cartUI = (
    <div className="cart__cartUI-container">
      <section className="cart__cart-items">
        {cart.items.map((cartRow) => (
          <CartRow key={cartRow.id} {...cartRow} />
        ))}
      </section>
      <div className="cart__subtotal-checkout">
        <p className="cart__subtotal">Subtotal</p>
        <p className="cart__price">{`$${totalPrice.toFixed(2)}`}</p>
        <div className="cart__checkout-button">
          <Button text={'Checkout'} size={'large'} onClick={handleCheckout} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="cart">
      <h2 className="cart__header">Shopping Cart</h2>

      {cart.items.length === 0 ? emptyCartUI : cartUI}
    </div>
  );
}

export default Cart;
