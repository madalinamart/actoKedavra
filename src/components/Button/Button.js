import React from 'react'
import './Button.css'

const Button = ({text, classStyle , icon, action, color, backgroundColor}) => {   
  return (   
    <button onClick={action} style={{color: color, backgroundColor: backgroundColor}}
     className={classStyle}>{text}
    <img src={icon} alt='edit icon' />
    </button>   
  )
}

export default Button