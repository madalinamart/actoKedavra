import React from 'react'
import arrow from '../../icons/arrow.svg'
import Button from '../Button/Button'
import './Sort.css'

const Sort = () => {
  return (
    <div className='sort'>
    <Button icon={arrow} text='Ascending' variant='secondary' direction='row-reverse' />
    <Button icon={arrow} text='Descending' variant='secondary' direction='row-reverse' rotate='rotate(180deg)' />
    </div>
  )
}

export default Sort