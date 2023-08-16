import React from 'react'
import PropTypes from 'prop-types'

const Image = ({src, alt, isprofile}) => {
  return (
    <img className={isprofile} src={src} alt={alt}/>
  )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    isprofile: PropTypes.string
}

export default Image