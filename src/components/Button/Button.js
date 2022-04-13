import React from 'react'
import './Button.css'

const Button = ({text, classStyle , icon, action, color}) => {   
  return (   
    <button onClick={action} style={{color: color}}
     className={classStyle}>{text}
    <img src={icon} alt='edit icon' />
    </button>   
  )
}

export default Button