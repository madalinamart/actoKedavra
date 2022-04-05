import React from 'react'
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const month = today.toLocaleString('en-us', {month: 'long'});
    const date = today.getDate() + ' ' + month + ' ' + today.getFullYear();
  return (
    <footer>
        <p>{date}</p>
        <h3>ActoKedavra</h3>
    </footer>
  )
}

export default Footer