import React, { useState, useEffect } from 'react';
import './Shop.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

function Shop(props) {
  const stripeKey = process.env.REACT_APP_STRIPE_SECRET_KEY;
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get('https://api.stripe.com/v1/products', {
      headers: { authorization: `bearer ${stripeKey}` },
    });
    setProducts(response.data.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="shop-page">
      <h1 className="shop-page__header">AT-HOME SELF CARE</h1>

      <section className="shop-page__products">
        {products.map((product) => (
          <ProductCard key={product.product} {...product} />
        ))}
      </section>
    </div>
  );
}

export default Shop;
