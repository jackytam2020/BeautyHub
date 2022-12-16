import React from 'react';
import './Button.scss';

function Button({ onClick, text, color }) {
  return (
    <button
      className={color === 'pink' ? 'button-pink' : 'button'}
      onClick={onClick}
    >
      <p className="button__text">{text}</p>
    </button>
  );
}

export default Button;
