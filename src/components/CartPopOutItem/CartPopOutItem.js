import React, { useContext, useEffect } from 'react';
import './CartPopOutItem.scss';

import { HiOutlineX } from 'react-icons/hi';
import { CartContext } from '../../CartContext';

function CartPopOutItem({ id, img, name, price, quantity }) {
  const cart = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem('Cart Items', JSON.stringify(cart.items));
  }, [cart.items]);

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img className="cart-item__product-img" src={img} alt={name} />
        <div className="cart-item__product-description">
          <p className="cart-item__title">{`${name} x ${quantity}`}</p>
          <p className="cart-item__price">{`$${price * quantity}`}</p>
        </div>
      </div>

      <div className="cart-item__right">
        <HiOutlineX
          className="cart-item__cancel-btn"
          onClick={() => {
            cart.deleteFromCart(id);
          }}
        />
      </div>
    </div>
  );
}

export default CartPopOutItem;
