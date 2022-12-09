import React, { useState, useContext, useEffect } from 'react';
import './AddToCart.scss';
import Button from '../Button/Button';
import { CartContext } from '../../../CartContext';

function AddToCart(props) {
  const [quantity, setQuantity] = useState(1);
  const [cartBtnStatus, setCartBtnStatus] = useState('Add To Cart');
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(props.selectedProduct.id);

  const handleInputChange = (e) => {
    setQuantity(e.target.value);
    props.setSelectedProduct({
      ...props.selectedProduct,
    });
  };

  //function needed for items that have multiple sizes
  //user must pick a size before adding to cart
  const checkForSelectedItem = () => {
    if (
      props.selectedDropDownItem === 'Select a size' &&
      props.selectedProduct.variantProduct
    ) {
      alert('Please select a size');
    } else {
      cart.addToCart(
        props.selectedProduct.id,
        parseInt(props.price),
        props.selectedProduct.priceID,
        props.selectedProduct.imgSrc,
        props.selectedProduct.name,
        parseInt(quantity)
      );
      setCartBtnStatus('Added To Cart!');
    }
  };

  useEffect(() => {
    localStorage.setItem('Cart Items', JSON.stringify(cart.items));
  }, [cart.items]);

  return (
    <section className="add-cart">
      <p className="add-cart__quantity">Quantity:</p>
      <div className="add-cart__input-button">
        <input
          min={1}
          value={quantity}
          type="number"
          className="add-cart__quantity-input"
          onChange={handleInputChange}
        ></input>
        <Button
          text={cartBtnStatus}
          size={'regular'}
          onClick={checkForSelectedItem}
        />
      </div>
    </section>
  );
}

export default AddToCart;
