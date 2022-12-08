import React, { useState, useEffect } from 'react';
import './ProductListing.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

function ProductListing(props) {
  const params = useParams();
  const stripeKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

  const [selectedProduct, setSelectedProduct] = useState({
    id: '',
    imgSrc: '',
    description: '',
    name: '',
    for: '',
    how: '',
    when: '',
    where: '',
    tagline: '',
    directionalUse1: '',
    directionalUse2: '',
    directionalUse3: '',
    directionalUse4: '',
  });
  const [price, setPrice] = useState('');

  const getProduct = async () => {
    const response = await axios.get(
      `https://api.stripe.com/v1/products/${params.productID}`,
      {
        headers: { authorization: `bearer ${stripeKey}` },
      }
    );
    setSelectedProduct({
      ...selectedProduct,
      id: response.data.id,
      imgSrc: response.data.images[0],
      description: response.data.description,
      name: response.data.name,
      for: response.data.metadata.For,
      when: response.data.metadata.When,
      where: response.data.metadata.Where,
      how: response.data.metadata.How,
      tagline: response.data.metadata.tagline,
      directionalUse1: response.data.metadata.directionalUse1,
      directionalUse2: response.data.metadata.directionalUse2,
      directionalUse3: response.data.metadata.directionalUse3,
      directionalUse4: response.data.metadata.directionalUse4,
    });
    getPrice(response.data.default_price);
  };

  const getPrice = async (priceID) => {
    const response = await axios.get(
      `https://api.stripe.com/v1/prices/${priceID}`,
      {
        headers: { authorization: `bearer ${stripeKey}` },
      }
    );

    //add decimals for cents
    const decimalAmount = response.data.unit_amount_decimal;
    const modifiedDecimalAmount = decimalAmount.split('');
    modifiedDecimalAmount.splice(modifiedDecimalAmount.length - 2, 0, '.');

    setPrice(modifiedDecimalAmount.join(''));
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="product-listing">
      <section className="product-listing__container">
        <img
          src={selectedProduct.imgSrc}
          className="product-listing__product-img"
        />
        <div className="product-listing__product-information">
          {
            <ProductInfo
              price={price}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          }
        </div>
      </section>
    </div>
  );
}

export default ProductListing;
