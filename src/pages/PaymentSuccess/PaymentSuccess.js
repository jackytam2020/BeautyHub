import React, { useEffect, useContext } from 'react';
import { CartContext } from '../../CartContext';

import './PaymentSuccess.scss';

function PaymentSuccess(props) {
  const cart = useContext(CartContext);

  useEffect(() => {
    localStorage.removeItem('Cart Items');
    cart.deleteAllItemsOnPayment();
  }, []);
  return (
    <div className="payment-success">
      <h1 className="payment-success__message">Thank you for you purchase!</h1>
    </div>
  );
}

export default PaymentSuccess;
