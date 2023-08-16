import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Form = ({ actors, actorData, setActors, close, toggleAlert, name }) => {
  const [formData, setFormData] = useState({
    name: actorData?.name || "",
    picture: actorData?.picture || "",
    occupation: actorData?.occupation || "",
    hobbies: actorData?.hobbies || "",
    description: actorData?.description || "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (name) {
      const actor = actors.find((actor) => actor.name === name);
      if (actor) {
        setFormData({
          name: actor.name,
          occupation: actor.occupation,
          hobbies: actor.hobbies,
          description: actor.description,
        });
      }
    }
  }, [name, actors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    var updatedValue = value;
    if (name === "hobbies") {
      updatedValue = value.split(",");
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newActor = {
      name: formData.name,
      picture: "img/freeman.png",
      occupation: formData.occupation,
      hobbies: formData.hobbies,
      description: formData.description,
    };
  
    const errors = validateForm(newActor);
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      
      if (name) {
        // Editing actor logic
        const updatedActors = actors.map((actor) =>
          actor.name === name ? newActor : actor
        );
        setActors(updatedActors);
      } else {
        // Adding new actor logic
        setActors((prevActors) => [...prevActors, newActor]);
      }
  
      setFormData({
        name: "",
        picture: "",
        occupation: "",
        hobbies: "",
        description: "",
      });
      setIsSubmit(true);
      toggleAlert("success");
      close();
    } else {
      setFormErrors(errors);
      toggleAlert("danger");
    }
  };  

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  const validateForm = (values) => {
    const errors = {};
  
    const inputs = document.querySelectorAll(".input-container input");
  
    const handleInputError = (inputName, errorMessage) => {
      inputs.forEach((input) => {
        if (input.name === inputName) {
          input.classList.add("error");
        }
      });
      errors[inputName] = errorMessage;
    };
  
    if (!values.name) {
      handleInputError("name", "Field required");
    }
    if (!values.occupation) {
      handleInputError("occupation", "Field required");
    }
    if (!values.picture) {
      handleInputError("picture", "Field required");
    }
    if (!values.hobbies) {
      handleInputError("hobbies", "Field required");
    }
    if (!values.description) {
      document.querySelector("textarea").classList.add("error");
      errors.description = "Field required";
    } else {
      document.querySelector("textarea").classList.remove("error");
    }
  
    return errors;
  };
  

  const remainingCharacters = 500 - formData.description.length;
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="d-flex">
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="form-error">{formErrors.name}</span>
      </div>
      <div className="input-container">
        <label htmlFor="picture">Image</label>
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleChange}
        />
        <span className="form-error"></span>
      </div>
      </div>
      <div className="d-flex">
      <div className="input-container">
        <label htmlFor="occupation">Occupation besides acting</label>
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
        <span className="form-error">{formErrors.occupation}</span>
      </div>
      <div className="input-container">
        <label htmlFor="hobbies">Hobbies</label>
        <input
          type="text"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
        />
        <span className="form-error">{formErrors.hobbies}</span>
      </div>
      </div>
      <div className="input-container textarea">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <span className="char-remaining">
          {remainingCharacters} characters remaining
        </span>
        <span className="form-error">{formErrors.description}</span>
      </div>
      <Button
        label={name ? "Edit Actor" : "Add new actor"}
        btnStyle="primary"
        handleClick={handleSubmit}
      />
      <Link to={'/'}>
      <p className="close-form" onClick={close}>
        I changed my mind
      </p>
      </Link>
    </form>
  );
};
//actors, actorData, setActors, close, toggleAlert, name 
Form.propTypes = {
  actors: PropTypes.array,
  actorData: PropTypes.array,
  setActors: PropTypes.func,
  close: PropTypes.func,
  toggleAlert: PropTypes.func,
  name: PropTypes.string
};

export default Form;
