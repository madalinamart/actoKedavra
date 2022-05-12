import React from 'react';
import './Dropdown.css'
import arrow from '../../icons/Forward.svg'

const Dropdown = ({
  isDropDownOpen,
  setIsDropDownOpen,
  ascending,
  descending,
}) => {   


  const toggleOptions = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className='dropdown-wrapper'>
      <div className='dropdown-container'>
        <div onClick={toggleOptions}><p>Default</p>
        <img src={arrow} alt='arrow-down' />
        </div>
        {isDropDownOpen ? (
          <ul>
            <li onClick={ascending}>
              Ascending
            </li>
            <li onClick={descending}>
              Descending
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
