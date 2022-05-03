import React from 'react';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import './Select.css';
import Delete from '../../icons/Delete.svg';
import Modal from '../Modal/Modal';

const Select = ({
  selected,
  showCheckbox,
  deleteActor,
  handleCheck,
  isChecked,
  length,
  activeDelete,
  setActiveDelete,
}) => {
  return (
    <div className='select-container'>
      <div className='select'>
        <p> Select all</p>
        <CheckBox
          showCheckbox={showCheckbox}
          handleCheck={handleCheck}
          isChecked={isChecked}
        />
      </div>
      <Button
        text='Delete'
        disabled={selected.length > 0 ? false : true}
        variant='secondary'
        padding='8px'
        icon={Delete}
        direction='row-reverse'
        action={() => setActiveDelete(true)}
      />
      {activeDelete && (
        <Modal
          title='Are you sure you want to delete the selection'
          bottom='0'
          component={
            <>
              <Button
                text='Yes, delete'
                variant='primary'
                action={() => selected.map((select) => deleteActor(select))}
              />{' '}
              <p onClick={() => setActiveDelete(false)}>I changed my mind</p>
            </>
          }
          closeModal={setActiveDelete}
        />
      )}
    </div>
  );
};

export default Select;
