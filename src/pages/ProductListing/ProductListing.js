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
    priceID: '',
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
    size1: '',
    size2: '',
    smallerSizeID: '',
    largerSizeID: '',
    variantProduct: '',
  });
  const [price, setPrice] = useState('');

  const getProduct = async () => {
    const response = await axios.get(
      `https://api.stripe.com/v1/products/${params.productID}`,
      {
        headers: { authorization: `bearer ${stripeKey}` },
      }
    );

    console.log(response.data);
    setSelectedProduct({
      ...selectedProduct,
      id: response.data.id,
      priceID: response.data.default_price,
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
      size1: response.data.metadata.size1,
      size2: response.data.metadata.size2,
      smallerSizeID: response.data.metadata.smallerSizeID,
      largerSizeID: response.data.metadata.largerSizeID,
      variantProduct: response.data.metadata.variantProduct,
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

  const getProductByDropdown = async (selection) => {
    let selectedItemId;

    //selection returns a value of index of drop down item.
    //0 will always be the smaller size and 1 will always be the bigger size

    if (selection === 0) {
      selectedItemId = selectedProduct.smallerSizeID;
    } else if (selection === 1) {
      selectedItemId = selectedProduct.largerSizeID;
    }

    const response = await axios.get(
      `https://api.stripe.com/v1/products/${selectedItemId}`,
      {
        headers: { authorization: `bearer ${stripeKey}` },
      }
    );

    setSelectedProduct({
      ...selectedProduct,
      id: response.data.id,
      priceID: response.data.default_price,
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
      size1: response.data.metadata.size1,
      size2: response.data.metadata.size2,
      smallerSizeID: response.data.metadata.smallerSizeID,
      largerSizeID: response.data.metadata.largerSizeID,
    });
    getPrice(response.data.default_price);
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
              getProductByDropdown={getProductByDropdown}
            />
          }
        </div>
      </section>
    </div>
  );
}

export default ProductListing;
