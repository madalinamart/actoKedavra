import React from 'react'
import PropTypes from 'prop-types'
import './Tag.css'

const Tag = ({tag}) => {
  return (
    <span>{tag}</span>
  )
}

Tag.propTypes = {
    tag: PropTypes.string
}

export default Tag