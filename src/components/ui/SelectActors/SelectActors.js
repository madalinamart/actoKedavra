import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './SelectActors.css'
import Checkbox from '../Checkbox/Checkbox'

const SelectActors = ({handleClick, name, isCheck, selectedLength, handleDelete}) => {
  return (
    <div className='select-container'>
        <Checkbox label='Select all' name={name} handleClick={handleClick} isChecked={isCheck}/>
        <Button label='Delete' disabled={selectedLength > 0 ? false : true}  img='./img/Delete.svg' btnStyle='secondary reverse-img' handleClick={handleDelete}/>
    </div>
  )
}

SelectActors.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
  isCheck: PropTypes.bool,
  selectedLength: PropTypes.number,
  handleDelete: PropTypes.func
}

export default SelectActors