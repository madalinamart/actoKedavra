import React from 'react'
import './Button.css'

const Button = ({text, icon, classStyle}) => {   

  return (
    <button className={classStyle}>{text}
    <img src={icon} alt='edit icon' />
    </button>
  )
}

export default Button