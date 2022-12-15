import React, { useState } from 'react';
import './SizeSelector.scss';
import { HiChevronDown } from 'react-icons/hi2';

function SizeSelector({
  selectedDropDownItem,
  sizes,
  setSelectedDropDownItem,
  getProductByDropdown,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <p>Size:</p>
      <div
        className="size-selector"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="size-selector__selected-item">{selectedDropDownItem}</p>
        <HiChevronDown className="size-selector__drop-icon" />
      </div>
      <div
        className={
          isOpen
            ? 'size-selector__drop-area--active'
            : 'size-selector__drop-area--closed'
        }
      >
        {sizes.map((size) => {
          return (
            <p
              key={size}
              className="size-selector__dropdown-item"
              onClick={() => {
                setSelectedDropDownItem(size);
                setIsOpen(false);
                getProductByDropdown(sizes.indexOf(size));
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
