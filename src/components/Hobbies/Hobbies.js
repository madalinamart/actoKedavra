import React from "react";
import Tag from "../Tag/Tag";
import "./Hobbies.css";
import PropTypes from 'prop-types'

const Hobbies = ({ hobbies }) => {
  return (
    <div className="hobbies">
      {hobbies.toString().split(",").map((hobby,id) => (<>
        <Tag key={id} tag={hobby} />
        </>
      ))}
    </div>
  );
};

Hobbies.propTypes = {
  hobbies: PropTypes.array
}

export default Hobbies;
