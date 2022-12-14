import React, { useContext } from 'react';
import './CartPopOut.scss';
import Button from '../atoms/Button/Button';
import CartPopOutItem from '../CartPopOutItem/CartPopOutItem';

import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';

function CartPopOut({ setCartIsOpen }) {
  const cart = useContext(CartContext);

  const totalPrice = cart.items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const emptyCartUI = (
    <div className="cart-popout__container">
      <h3 className="cart-popout__header">Cart</h3>
      <p className="cart-popout__empty-message">
        You have nothing in your shopping cart.
      </p>
      <div className="cart-popout__continue-btn">
        <Button
          text={'Continue Shopping'}
          color={'pink'}
          onClick={() => {
            setCartIsOpen(false);
          }}
        />
      </div>
    </div>
  );

  const cartUI = (
    <div className="cart-popout__container">
      <h3 className="cart-popout__header">Cart</h3>
      <div className="cart-popout__item-list">
        {cart.items.map((item) => (
          <CartPopOutItem key={item.priceID} {...item} />
        ))}
      </div>
      <div className="cart-popout__subtotal-section">
        <p className="cart-popout__subtotal">Subtotal:</p>
        <p className="cart-popout__total-price">{`$${totalPrice}`}</p>
      </div>
      <div className="cart-popout__action-btns">
        <Button
          text={'Cancel'}
          onClick={() => {
            setCartIsOpen(false);
          }}
        ></Button>
        <Link to={'/cart'}>
          <Button
            text={'Checkout'}
            color="pink"
            onClick={() => {
              setCartIsOpen(false);
            }}
          ></Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="cart-popout">
      {cart.items.length === 0 ? emptyCartUI : cartUI}
    </div>
  );
}

export default CartPopOut;
