import React from 'react';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import './Select.css';
import Delete from '../../icons/Delete.svg';

const Select = ({ selected, showCheckbox, checked, handleCheck }) => {
  return (
    <div className='select-container'>
      <div className='select'>
        <p>{selected} Select all</p>
        <CheckBox showCheckbox={showCheckbox} checked={checked} handleCheck={handleCheck} />
      </div>
      <Button text='Delete' variant='secondary' padding='8px' icon={Delete} direction='row-reverse'/>
    </div>
  );
};

export default Select;
