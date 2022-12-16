import React, { useState } from 'react';
import './ProductInfo.scss';
import AddToCart from '../atoms/AddToCart/AddToCart';
import SizeSelector from '../atoms/SizeSelector/SizeSelector';

function ProductInfo({
  selectedProduct,
  price,
  getProductByDropdown,
  setSelectedProduct,
}) {
  let extraDetails;

  if (selectedProduct.for) {
    extraDetails = (
      <div className="product-info__extra-description">
        {selectedProduct.where && <p>Where:</p>}
        <p>{selectedProduct.where}</p>
        {selectedProduct.how && <p>How:</p>}
        <p>{selectedProduct.how}</p>
        <p>When:</p>
        <p>{selectedProduct.when}</p>
        <p>For:</p>
        <p>{selectedProduct.for}</p>
      </div>
    );
  }
  if (selectedProduct.name === 'Redken One United Benefit Treatment') {
    extraDetails = (
      <div className="product-info__extra-description">
        <p className="product-info__bolded-header">BENEFITS</p>
        <ul className="product-info__unordered-list">
          <li>
            Delivers caring benefits for improved manageability, protection and
            beauty
          </li>
          <li>Provides lightweight conditioning</li>
          <li>Enhances the caring benefits of other leave-in treatments</li>
          <li>Softens the touch of texture of the styling products</li>
        </ul>
        <p className="product-info__bolded-header">Hair manageability:</p>
        <ul className="product-info__unordered-list">
          <li>Conditions and nourishes hair</li>
          <li>Helps even porous hair</li>
          <li>Reduces hair dryness, detangles and helps strengthen hair</li>
        </ul>
        <p className="product-info__bolded-header">Hair Protection:</p>
        <ul className="product-info__unordered-list">
          <li>
            Primes hair for styling and helps prevent hair breakage from
            brushing
          </li>
          <li>Safe for color-treated hair and ombre hair</li>
          <li>Helps prevent heat damage from hot hair tools</li>
          <li>Helps prevent split ends and seals in hair cuticle</li>
          <li>Helps protect hair from external aggressors</li>
        </ul>
        <p className="product-info__bolded-header">Hair Beauty:</p>
        <ul className="product-info__unordered-list">
          <li>Gives hair a silky touch</li>
          <li>Adds hair smoothness and hair shine</li>
          <li>Helps control frizz</li>
          <li>Anti-static</li>
          <li>Controls hair flyaways</li>
          <li>Makes blow-dry easier</li>
          <li>Hair style refresher</li>
          <li>Lightweight results</li>
        </ul>
      </div>
    );
  }

  if (selectedProduct.name === 'Redken Fashion Work 12 Hairspray') {
    extraDetails = (
      <div className="product-info__extra-description">
        <p className="product-info__bolded-header">BENEFITS</p>
        <ul className="product-info__unordered-list">
          <li>Medium control aerosol spray</li>
          <li>Fast-drying, fine-mist</li>
          <li>Offers 24-hour humidity resistance and 8-hour control</li>
          <li>Vitamins C and E protect hair and help prevent color fade</li>
        </ul>
      </div>
    );
  }

  if (selectedProduct.name === 'Footlogix "At Home" Footfile') {
    extraDetails = (
      <div className="product-info__extra-description">
        <p className="product-info__long-description">
          Encased in a satin- smooth, contoured comfort grip, this double-sided
          file is made with high quality stainless steel and has a
          multi-directional grit that will not shred the skin. Lightweight, easy
          to use, easy to clean and recommended for use at home, in-between
          pedicures.
        </p>
        <ul className="product-info__unordered-list">
          <li>
            Double sided with a high quality stainless steel coarse and fine
            grit
          </li>
          <li>Encased in a non-slippery, soft touch frame and handle</li>
          <li>Light weight, easy to use delivering amazing results</li>
          <li>Will not shred skin</li>
          <li>Easy to clean</li>
        </ul>
        <p className="product-info__bolded-header">Usage:</p>
        <ul className="product-info__unordered-list">
          <li>
            Soak feet into a foot bath with Foot Soak Concentrate and warm water
            for 5 minutes
          </li>
          <li>Start filing with the foot file</li>
          <li>Start with coarse side and finish with fine side</li>
          <li>
            Clean with mild soap and water, and use a soft brush to remove skin
            debris
          </li>
          <li>Pat dry with a lint-free towel</li>
        </ul>
        <p className="product-info__bolded-header">Recommend for:</p>
        <ul className="product-info__unordered-list">
          <li>In-between pedicure visits at home</li>
        </ul>
      </div>
    );
  }

  if (selectedProduct.name === 'OLAPLEX Nº.3 HAIR PERFECTOR') {
    extraDetails = (
      <div className="product-info__extra-description">
        <p className="product-info__pro-tip">
          PRO TIP: Prime your hair for deeper repair with our
          professional-inspired No.0 Intensive Bond Building Hair Treatment
          (sold separately). Use No.0 as the first step in a two-part at-home
          system with No.3 Hair Perfector to strengthen and repair all types of
          damaged hair.
        </p>
        <p className="product-info__scientifically-proven">
          Scientifically Proven:
        </p>
        <p>
          68% more repair & 3x stronger hair* *When used as a two-part system in
          just one use.
        </p>
        <p className="product-info__ph-balance">PH Balance: 3.5-5</p>
      </div>
    );
  }

  const directionalUse = (
    <div className="product-info__directional-use">
      <h2 className="product-info__directions">Directions</h2>
      <ol className="product-info__ordered-list">
        <li>{selectedProduct.directionalUse1}</li>
        <li>{selectedProduct.directionalUse2}</li>
        <li>{selectedProduct.directionalUse3}</li>
        <li>{selectedProduct.directionalUse4}</li>
      </ol>
    </div>
  );

  const [selectedDropDownItem, setSelectedDropDownItem] =
    useState('Select a size');

  let sizes = [];

  if (selectedProduct.size1) {
    sizes.push(selectedProduct.size1, selectedProduct.size2);
  }

  return (
    <div className="product-info">
      <p className="product-info__header">{`AT-HOME SELF CARE - ${selectedProduct.name}`}</p>
      <h1 className="product-info__name">{selectedProduct.name}</h1>
      <p className="product-info__price">
        {selectedDropDownItem === 'Select a size' &&
        selectedProduct.variantProduct
          ? `From $${price}`
          : `$${price}`}
      </p>
      {selectedProduct.tagline && (
        <h2 className="product-info__tagline">{selectedProduct.tagline}</h2>
      )}
      {selectedProduct.description && (
        <p className="product-info__description">
          {selectedProduct.description}
        </p>
      )}
      {extraDetails}
      {selectedProduct.size1 && (
        <SizeSelector
          sizes={sizes}
          getProductByDropdown={getProductByDropdown}
          selectedProduct={selectedProduct}
          selectedDropDownItem={selectedDropDownItem}
          setSelectedDropDownItem={setSelectedDropDownItem}
        />
      )}
      <AddToCart
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        selectedDropDownItem={selectedDropDownItem}
        price={price}
      />
      {selectedProduct.directionalUse1 && directionalUse}
    </div>
  );
}

export default ProductInfo;
