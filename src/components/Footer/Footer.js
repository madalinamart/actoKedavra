import React from 'react';
import './Footer.css';

const date = new Date();
let day = date.getDate();
let month = date.toLocaleString('default', { month: 'long' });
let year = date.getFullYear();
let now = day + ' ' + month + ' ' + year;

function Footer() {
  return (
    <footer>
        <p className='date'>{now}</p>
        <p className='logo'>ActoKedavra</p>
    </footer>
  )
}

export default Footer