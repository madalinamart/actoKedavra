import React, { useState } from "react";
import arrow2 from '../../icons/arrow2.svg';
import "./Description.css";

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

export default Description;
