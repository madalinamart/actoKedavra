import React from 'react'
import Button from '../Button/Button'
import './Modal.css'

const Modal = ({closeModal}) => {
  return (
    <div className='modal-wrapper'>
        <div className='modal-container'>
            <Button text='X' classStyle='close-button x' action={() => closeModal(false)} />
            <h1>Add new actor</h1>
            <div className='body'>body</div>
            <div className='footer'>
                <Button text='add new actor' classStyle='primary' />
            </div>
        </div>
    </div>
  )
}

export default Modal