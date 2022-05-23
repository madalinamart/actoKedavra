import React, { useState } from "react";
import arrow2 from '../../icons/arrow2.svg';
import "./Description.css";
import PropTypes from 'prop-types'

const Description = ({ description, readMore, readLess }) => {
  const [showMore, setShowMore] = useState(true);
  const showDescription = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="description">
      <p>{showMore ? description.slice(0, 180) : description}</p>
      <span onClick={showDescription}>
        {showMore ? (
          <>
            {readMore} <img src={arrow2} alt="arrow" />
          </>
        ) : (
          <>
            {readLess}{" "}
            <img
              src={arrow2}
              alt="arrow"
              style={{ transform: "rotate(180deg)" }}
            />{" "}
          </>
        )}
      </span>
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string,
  readLess: PropTypes.string,
  readMore: PropTypes.string
}

Description.defaultProps = {
  readMore: 'Read more',
  readLess: 'Read less'
}

export default Description;
