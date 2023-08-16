import React from 'react'
import PropTypes from 'prop-types'
import './Select.css'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'

const Select = ({handleClick, isCheck, selectedLength, handleDelete, close}) => {
  return (     
    <div className='select-wrapper'>
        <div className="selected-section-wrapper">
            <div className="selected-count"><Button label='x' btnStyle='close' handleClick={close}/> 
            <p>{selectedLength} Selected</p>
            </div>
            
        <div className="vertical-line"></div>
            <div className="select-all"><Checkbox label='Select all' isChecked={isCheck} handleClick={handleClick}/></div>
        </div>
        <div className="delete-button">
            <Button label='Delete' btnStyle='primary' disabled={selectedLength > 0 ? false : true} handleClick={handleDelete}/>
        </div>
    </div>
    
  )
}

Select.propTypes = {
    handleClick: PropTypes.func,
    isCheck: PropTypes.bool,
    selectedLength: PropTypes.number,
    handleDelete: PropTypes.func,
    close: PropTypes.func
  }

export default Select