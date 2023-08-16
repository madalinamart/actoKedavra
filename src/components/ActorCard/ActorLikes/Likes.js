import React from 'react'
import PropTypes from 'prop-types'
import './Likes.css';

const Likes = ({occupation , score}) => {
  return (
    <div className='general'>
        <div className="occupation">{occupation}</div>
        <div className="likes">{score} <img src="./img/like-icon.svg" alt="like icon" /></div>
    </div>
  )
}

Likes.propTypes = {
    occupation: PropTypes.string.isRequired,
    score: PropTypes.number
}

export default Likes