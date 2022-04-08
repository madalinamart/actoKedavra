import React from 'react'
import './Button.css'

const Button = ({text, classStyle , icon, action}) => {   
  return (   
    <button onClick={action}
     className={classStyle}>{text}
    <img src={icon} alt='edit icon' />
    </button>   
  )
}

export default Button