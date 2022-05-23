import React from 'react'
import like from '../../icons/like.svg'
import './Info.css'
import PropTypes from 'prop-types'


const Info = ({img, name, occupation, score}) => {
  return (
    <>
    <img className='profile-img' src={img} alt={name} />
    <div className='info'>        
        <h2>{name}</h2>
        <div className='occupation-likes'>
            <p>{occupation}</p>
            <span>{score} <img src={like} alt='like icon' /></span>
        </div>
    </div>
    </>
  )
} 

Info.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  occupation: PropTypes.string,
  score: PropTypes.number
}

export default Info