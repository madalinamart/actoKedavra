import React from 'react'
import Button from '../Button/Button'
import './Modal.css'

const Modal = ({closeModal, title, component, bottom, top}) => {
  return (
    <div className='modal' onClick={() => closeModal(false)}>
    <div className='modal-wrapper' style={{bottom: bottom, top: top}} onClick={(e) => e.stopPropagation()} >
        <div className='modal-container' >
            <div className='close'><Button text='X' action={() => closeModal(false)} /></div>
            <h1>{title}</h1>
            <div className='body'>{component}</div>
        </div>
    </div>
    </div>    
  )
}

export default Modal