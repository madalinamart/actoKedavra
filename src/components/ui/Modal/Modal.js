import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'
import { Link } from 'react-router-dom'

const Modal = ({show, title, content, close, small}) => {
  return (
    <>
    {show ? 
    (<div className={`modal-container ${small ? 'small' : ''}`}>
        <div className="modal" onClick={close}>
            <div className="modal-header">
                <h2 className="modal-header-title">
                    {title}
                </h2>
                <Link to={'/'}>
                <button className='close-modal' onClick={close}>X</button>
                </Link>
            </div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {content}
            </div>
        </div>
    </div>)
    : null}
    </>
  )
}

Modal.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.any,
    close: PropTypes.func,
    small: PropTypes.bool
}

export default Modal