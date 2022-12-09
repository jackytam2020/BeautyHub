import React, { useState } from 'react';
import './SizeSelector.scss';
import { HiChevronDown } from 'react-icons/hi2';

function SizeSelector(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <p>Size:</p>
      <div className="size-selector">
        <p className="size-selector__selected-item">
          {props.selectedDropDownItem}
        </p>
        <HiChevronDown
          className="size-selector__drop-icon"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div
        className={
          isOpen
            ? 'size-selector__drop-area--active'
            : 'size-selector__drop-area--closed'
        }
      >
        {props.sizes.map((size) => {
          return (
            <p
              key={size}
              className="size-selector__dropdown-item"
              onClick={() => {
                props.setSelectedDropDownItem(size);
                setIsOpen(false);
                props.getProductByDropdown(props.sizes.indexOf(size));
              }}
            >
              {size}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SizeSelector;
