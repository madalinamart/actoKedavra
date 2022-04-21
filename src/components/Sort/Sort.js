import React from 'react'
import arrow from '../../icons/arrow.svg'
import Button from '../Button/Button'
import './Sort.css'

const Sort = () => {
  return (
    <div className='sort'>
    <Button icon={arrow} text='Ascending' classStyle='secondary' flexDirection='row-reverse' />
    <Button icon={arrow} text='Descending' classStyle='secondary' flexDirection='row-reverse' />
    </div>
  )
}

export default Sort