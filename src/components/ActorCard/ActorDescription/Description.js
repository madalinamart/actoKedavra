import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Description.css'

const Description = ({description}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    }

    const content = isExpanded ? description : (description.slice(0, 45) + ' ...');
  return (
    <div className='description-container'>
    <p className='description'>{content}</p>
    {isExpanded ? (
            <span onClick={toggleReadMore}>
              Read Less <img src='./img/arrow.svg' alt='arrow down' style={{transform: 'rotate(180deg)'}}/>
            </span>
          ) : (
            <span onClick={toggleReadMore}>
              Read More <img src='./img/arrow.svg' alt='arrow down'/>
            </span>
          )}
    </div>
  )
}

Description.propTypes = {
  description: PropTypes.string.isRequired
}

export default Description