import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'



const Button = ({variant, padding, text, action, icon, direction, rotate}) => {
  return (
    <button onClick={action}
    style={{padding: padding, flexDirection: direction}} className={variant}>{text} <img src={icon} alt='' style={{transform:rotate}}/></button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  padding: PropTypes.string,  
  variant: PropTypes.string,
  icon: PropTypes.string,
  direction: PropTypes.string,
  rotate: PropTypes.string
}

Button.defaultProps = {
  variant: 'secondary',  
  icon: null,
  direction: 'row',
  rotate: 'none'
}

export default Button