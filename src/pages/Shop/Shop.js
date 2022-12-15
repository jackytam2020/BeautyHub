import React, { useState, useEffect, useContext } from 'react';
import './Shop.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import { CartContext } from '../../CartContext';

function Shop(props) {
  const stripeKey = process.env.REACT_APP_STRIPE_SECRET_KEY;
  const [products, setProducts] = useState([]);
  const cart = useContext(CartContext);

  const getAllProducts = async () => {
    const response = await axios.get('https://api.stripe.com/v1/products', {
      headers: { authorization: `bearer ${stripeKey}` },
    });

    const filterOutSecondaryProducts = response.data.data.filter(
      (product) => !product.metadata.secondaryProduct
    );
    setProducts(filterOutSecondaryProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="shop-page">
      <h1 className="shop-page__header">AT-HOME SELF CARE</h1>

      <section className="shop-page__products">
        <div className="shop-page__products-list">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Shop;
