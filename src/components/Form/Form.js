import React from 'react';
import './Form.css';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
});

const Form = (props) => {
  const {
    children,
    formInitialValues,
    buttonText,
    closeModal,
    actors,
    submit,
  } = props;
  const [form, setForm] = useState(formInitialValues);
  const [char, setChar] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    fetchActor(name);
  }, []);

  const fetchActor = (name) => {
    try {
      const filteredActor = actors.filter((actor) => actor.name === name);
      filteredActor.map((actor) => setForm(actor));
    } catch (error) {
      console.log('error while fetching actor', error);
    }
  };

  const remainingWords = 500 - char;

  const handleDescription = (event) => {
    setForm({ ...form, description: event.target.value });
    setChar(event.target.value.length);
    if (remainingWords <= 1) {
      setIsDisabled(true);
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
  };

  const handleHobbies = (event) => {
     const newHobbies = [];
     newHobbies.push(event.target.value)
      setForm({ ...form, hobbies: newHobbies});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
          handleDescription,
          isDisabled,
          isSubmitted,
          remainingWords,
          handleHobbies
        }}
      >
        {children}
      </FormContext.Provider>
      <Button
        type='submit'
        text={buttonText}
        variant='primary'
        action={() => submit(form, name)}
      />
      <p onClick={() => closeModal(false)}> I changed my mind</p>
    </form>
  );
};

export default Form;
