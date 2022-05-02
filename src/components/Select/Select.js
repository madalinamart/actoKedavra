import React from 'react';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import './Select.css';
import Delete from '../../icons/Delete.svg';

const Select = ({ selected, showCheckbox, isChecked, handleCheck, deleteActor}) => {
  console.log(selected)
  return (
    <div className='select-container'>
      <div className='select'>
        <p> Select all</p>
        <CheckBox showCheckbox={showCheckbox} isChecked={isChecked} handleCheck={handleCheck}  />
      </div>
      <Button text='Delete' variant='secondary' padding='8px' icon={Delete} direction='row-reverse' action={() => selected.map((select) => deleteActor(select))}/>
    </div>
  );
};

export default Select;
