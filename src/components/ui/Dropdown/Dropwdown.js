import React, { useState } from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types'

const Dropdown = ({asc, desc}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {  
    if (value === 'asc') {
      asc();
    } else if (value === 'desc') {
      desc();
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">      
      <ul className="dropdown-options">
      {isOpen ? 
      <>
      <li onClick={() => handleOptionClick('asc')}>Ascending</li>
      </> : 
      <>
      <li onClick={() => handleOptionClick('asc')}>Ascending</li>
      <li onClick={() => handleOptionClick('desc')}>Descending</li>
      </>}   
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  asc: PropTypes.func,
  desc: PropTypes.func
}

export default Dropdown;
