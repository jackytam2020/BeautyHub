import React from 'react';
import './Button.scss';

function Button(props) {
  let buttonClassname;

  if (props.size === 'large') buttonClassname = 'button-large';
  if (props.size === 'regular') buttonClassname = 'button-regular';

  return (
    <button className={buttonClassname}>
      <p className="button__text">{props.text}</p>
    </button>
  );
}

export default Button;
