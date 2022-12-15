import React, { useEffect, useContext } from 'react';
import './CartRow.scss';
import { CartContext } from '../../CartContext';

import { HiMinus, HiPlus, HiOutlineX } from 'react-icons/hi';

function CartRow({ img, name, id, quantity, price }) {
  const cart = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem('Cart Items', JSON.stringify(cart.items));
  }, [cart.items]);

  return (
    <div className="cart-row">
      <img className="cart-row__product-image" src={img} alt={name} />
      <div className="cart-row__product-title">{name}</div>
      <div className="cart-row__quantity-adjuster">
        <HiMinus
          className="cart-row__cart-btns"
          onClick={() => {
            cart.removeOneFromCart(id);
          }}
        />
        <p className="cart-row__quantity">{quantity}</p>
        <HiPlus
          className="cart-row__cart-btns"
          onClick={() => {
            cart.addOneToCart(id);
          }}
        />
      </div>
      <div className="cart-row__product-price">{`$${(quantity * price).toFixed(
        2
      )}`}</div>
      <HiOutlineX
        className="cart-row__cart-btns cart-row__cancel-btn"
        onClick={() => {
          cart.deleteFromCart(id);
        }}
      />
    </div>
  );
}

export default CartRow;
