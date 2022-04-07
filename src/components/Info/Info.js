import React from 'react'
import like from '../../icons/like.svg'
import './Info.css'

const Info = ({img, name, occupation, score}) => {
  return (
    <>
    <img src={img} alt={name} />
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

export default Info