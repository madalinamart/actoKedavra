import React from "react";
import "./Tag.css";
import PropTypes from 'prop-types'

const Tag = ({ tag }) => {
  return <p className="hobby">{tag}</p>;
};

Tag.propTypes = {
  tag: PropTypes.string
}

export default Tag;
