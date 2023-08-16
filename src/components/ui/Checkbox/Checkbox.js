import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = ({ label, name, handleClick, isChecked}) => {

  return (
    <div className="checkbox-wrapper">
      <label>{label}</label>
      <input
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={handleClick}
      />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  isChecked: PropTypes.bool
};

Checkbox.defaultProps = {
  label: "",
  isChecked: false
};

export default Checkbox;
