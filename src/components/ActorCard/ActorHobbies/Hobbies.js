import React from 'react'
import PropTypes from 'prop-types'
import './Hobbies.css'
import Tag from '../../ui/Tag/Tag'

const Hobbies = ({hobbies}) => {
  return (
    <div className='hobbies'>
        {hobbies.map(hobby => 
            <Tag key={hobby} tag={hobby} />)}
    </div>
  )
}

Hobbies.propTypes = {
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Hobbies