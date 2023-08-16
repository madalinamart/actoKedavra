import React from "react";
import PropTypes from "prop-types";
import "./Alert.css";

const Alert = ({ show, close, type }) => {
  var icon = "";
  var message = "";
  if (type === "success") {
    icon = "/img/Circle Actions Success.svg";
    message = "Actor added successfully.";
  } else if (type === "warning") {
    icon = "img/Check.svg";
    message = "You can add max. 7 actors.";
  } else if (type === "danger") {
    icon = "img/Circle Actions Alert Info.svg";
    message = "Your changes were not saved.";
  }
  return (
    <>
      {show ? (
        <p className={`alert ${type}`}>
          <img src={icon} alt="icon alert" />
          {message}
          <button className="close-alert" onClick={close}>
            X
          </button>
        </p>
      ) : null}
    </>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  close: PropTypes.func,
  show: PropTypes.bool,
};

export default Alert;
