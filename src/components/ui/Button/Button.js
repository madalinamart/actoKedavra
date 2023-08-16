import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({label, handleClick, btnStyle, img, disabled}) {
  return (
    <button type='button' onClick={handleClick} disabled={disabled} className={btnStyle}>{label} <img src={img} alt="edit-button" /></button>
  )
}

export default Button

Button.propTypes = {
    label : PropTypes.string,
    handleClick: PropTypes.func,
    btnStyle: PropTypes.string,
    img: PropTypes.string,
    disabled: PropTypes.bool
}