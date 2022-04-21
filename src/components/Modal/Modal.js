import React from 'react'
import Button from '../Button/Button'
import './Modal.css'

const Modal = ({closeModal, title, component, positioning}) => {
  return (
    <div className='modal-wrapper' style={{bottom: positioning}}>
        <div className='modal-container'>
            <Button text='X' classStyle='close-button x' action={() => closeModal(false)} />
            <h1>{title}</h1>
            <div className='body'>{component}</div>
        </div>
    </div>
  )
}

export default Modal