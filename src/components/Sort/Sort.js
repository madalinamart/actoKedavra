import React from 'react'
import arrow from '../../icons/arrow.svg'
import Button from '../Button/Button'
import './Sort.css'

const Sort = ({ascending, descending}) => {
  
  return (
    <div className='sort'>
    <Button icon={arrow} text='Ascending'  direction='row-reverse' action={() => ascending()} />
    <Button icon={arrow} text='Descending'  direction='row-reverse' rotate='rotate(180deg)' action={() => descending()}/>
    </div>
  )
}

export default Sort