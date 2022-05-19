import React from 'react';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import './SelectDesktop.css';
import Delete from '../../icons/Delete.svg';

const SelectDesktop = ({
  activeSelectDesktop,
  setActiveSelectDesktop,
  showCheckbox,
  setShowCheckbox,
  actors,
  selected,
  deleteActor,
  setSelected,
  handleCheck,
  isChecked
}) => {
  const toggleSelect = () => {
    setActiveSelectDesktop(!activeSelectDesktop);
    setShowCheckbox(!showCheckbox);
  };

  const deleteActors = () => {
    selected.map((select) => deleteActor(select));
    setActiveSelectDesktop(false);
    setShowCheckbox(false);
  };

  return (
    <div className='select-desktop'>
      {!activeSelectDesktop ? (
        <Button
          text='Select'
          variant='select-desktop-button'
          action={toggleSelect}
        />
      ) : null}

      {activeSelectDesktop ? (
        <div className='select-desktop-wrapper'>
          <div className='selected'>
            <Button text='x' action={toggleSelect} variant='close-select' />
            <div className='selected-actors'>
              <p>
                {' '}
                {actors.length === selected.length
                  ? 'All Selected'
                  : `${selected.length} Selected`}
              </p>
            </div>
            <div className='select-all-actors'>
              <p>Select all</p>
              <CheckBox
                showCheckbox={showCheckbox}
                actors={actors}
                setSelected={setSelected}
                selected={selected}
                isChecked={isChecked}
                handleCheck={handleCheck}
              />
            </div>
          </div>
          <Button
            text='Delete'
            variant='primary'
            icon={Delete}
            padding='16px'
            disabled={selected.length > 0 ? false : true}
            action={deleteActors}
          />
        </div>
      ) : null}
    </div>
  );
};

export default SelectDesktop;
