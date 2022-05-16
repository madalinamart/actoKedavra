import React from 'react';
import './Dropdown.css';
import arrow from '../../icons/Forward.svg';

const Dropdown = ({
  isDropDownOpen,
  setIsDropDownOpen,
  ascending,
  descending,
  activeSelectDesktop,
}) => {
  const toggleOptions = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <>
      {!activeSelectDesktop ? (
        <div className='dropdown-wrapper' onClick={toggleOptions}>
          <div className='dropdown-container'>
            <div>
              <p>Default</p>
              <img src={arrow} alt='arrow-down' />
            </div>
            {isDropDownOpen ? (
              <ul>
                <li onClick={ascending}>Ascending</li>
                <li onClick={descending}>Descending</li>
              </ul>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
