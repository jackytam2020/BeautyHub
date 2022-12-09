import React, { useEffect, useContext } from 'react';
import { CartContext } from '../../CartContext';

function PaymentSuccess(props) {
  const cart = useContext(CartContext);

  useEffect(() => {
    localStorage.removeItem('Cart Items');
    cart.deleteAllItemsOnPayment();
  }, []);
  return <div>dfsgdfgdfg</div>;
}

export default PaymentSuccess;
