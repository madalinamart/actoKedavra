import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'



const Button = ({variant, padding, text, action, icon, direction, rotate, disabled,type}) => {
  return (
    <button onClick={action} type={type}
    style={{padding: padding, flexDirection: direction}} disabled={disabled} className={variant}>{text} <img src={icon} alt='' style={{transform:rotate}}/></button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func,
  padding: PropTypes.string,  
  variant: PropTypes.string,
  icon: PropTypes.string,
  direction: PropTypes.string,
  rotate: PropTypes.string,
  disabled : PropTypes.bool,
}

Button.defaultProps = {
  variant: 'secondary',  
  icon: null,
  direction: 'row',
  rotate: 'none',
  disabled: false,
  type: 'button'
}

export default Button