import { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const addToCart = (id, price, priceID, img, name, quantityInput) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          priceID: priceID,
          quantity: quantityInput,
          price: price,
          img: img,
          name: name,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity + quantityInput,
                price: price,
                priceID: priceID,
                img: img,
                name: name,
              }
            : product
        )
      );
    }
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        )
      );
    }
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentItem) => currentItem.id != id)
    );
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
