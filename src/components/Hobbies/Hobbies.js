import React from "react";
import Tag from "../Tag/Tag";
import "./Hobbies.css";

const Hobbies = ({ hobbies }) => {
  return (
    <div className="hobbies">
      {hobbies.map((hobby) => (
        <Tag key={hobby} tag={hobby} />
      ))}
    </div>
  );
};

export default Hobbies;
