import React, { useContext, useState, useEffect } from 'react';
import './Cart.scss';
import CartRow from '../../components/CartRow/CartRow';
import Button from '../../components/atoms/Button/Button';

import { CartContext } from '../../CartContext';
function Cart(props) {
  const cart = useContext(CartContext);

  const totalPrice = cart.items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  return (
    <div className="cart">
      <h2 className="cart__header">Shopping Cart</h2>

      <section className="cart__cart-items">
        {cart.items.map((cartRow) => (
          <CartRow key={cartRow.id} {...cartRow} />
        ))}
      </section>

      <div className="cart__subtotal-checkout">
        <p className="cart__subtotal">Subtotal</p>
        <p className="cart__price">{`$${totalPrice.toFixed(2)}`}</p>
        <div className="cart__checkout-button">
          <Button text={'Checkout'} size={'large'} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
