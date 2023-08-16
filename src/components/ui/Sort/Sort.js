import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Sort.css'

const Sort = ({ asc, desc}) => {
  return (
    <div className='sort-container'>
        <Button label='Ascending' img='/img/Arrow Down.svg' btnStyle='secondary sort-button' handleClick={asc}/>
        <Button label='Descending' img='/img/Arrow Down.svg' btnStyle='secondary sort-button descending' handleClick={desc}/>
    </div>
  )
}

Sort.propTypes = {
    asc: PropTypes.func,
    desc: PropTypes.func
}

export default Sort