import React, { useEffect, useContext } from 'react';
import './CartRow.scss';
import { CartContext } from '../../CartContext';

import { HiMinus, HiPlus, HiOutlineX } from 'react-icons/hi';

function CartRow(props) {
  const cart = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem('Cart Items', JSON.stringify(cart.items));
  }, [cart.items]);

  return (
    <div className="cart-row">
      <img
        className="cart-row__product-image"
        src={props.img}
        alt={props.name}
      />
      <div className="cart-row__product-title">{props.name}</div>
      <div className="cart-row__quantity-adjuster">
        <HiMinus
          className="cart-row__cart-btns"
          onClick={() => {
            cart.removeOneFromCart(props.id);
          }}
        />
        <p className="cart-row__quantity">{props.quantity}</p>
        <HiPlus
          className="cart-row__cart-btns"
          onClick={() => {
            cart.addOneToCart(props.id);
          }}
        />
      </div>
      <div className="cart-row__product-price">{`$${(
        props.quantity * props.price
      ).toFixed(2)}`}</div>
      <HiOutlineX
        className="cart-row__cart-btns cart-row__cancel-btn"
        onClick={() => {
          cart.deleteFromCart(props.id);
        }}
      />
    </div>
  );
}

export default CartRow;
