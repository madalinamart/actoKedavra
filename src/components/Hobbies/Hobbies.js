import React from "react";
import Tag from "../Tag/Tag";
import "./Hobbies.css";
import PropTypes from 'prop-types'

const Hobbies = ({ hobbies }) => {
  console.log('hobbies', hobbies)
  return (
    <div className="hobbies">
      {hobbies.toString().split(",").map((hobby) => (<>
        {console.log(hobby, 'hobby')}
        <Tag key={hobby} tag={hobby} />
        </>
      ))}
    </div>
  );
};

Hobbies.propTypes = {
  hobbies: PropTypes.array
}

export default Hobbies;
