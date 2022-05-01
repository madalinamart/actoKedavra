import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddActor.css';
import Button from '../Button/Button';

const initialValues = {
  name: '',
  occupation: '',
  hobbies: '',
  description: '',
};

const AddActor = ({ closeModal, actors}) => {
  const [values, setValues] = useState(initialValues);
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
      filteredActor.map((actor) => setValues(actor));
    } catch (error) {
      console.log('error while fetching actor', error);
    }
  };

 

  const remainingWords = 500 - char;

  const handleName = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleOccupation = (event) => {
    setValues({ ...values, occupation: event.target.value });
  };

  const handleHobbies = (event) => {
    setValues({ ...values, hobbies: event.target.value });
  };

  const handleDescription = (event) => {
    setValues({ ...values, description: event.target.value });
    setChar(event.target.value.length);
    if (remainingWords <= 1) {
      setIsDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputs'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={handleName}
          className={isSubmitted && !values.name ? 'error' : null}
        />
        {isSubmitted && !values.name ? (
          <span className='message'>Field required</span>
        ) : null}
      </div>

      <div className='inputs'>
        <label htmlFor='occupation'>Occupation besides acting</label>
        <input
          type='text'
          name='occupation'
          value={values.occupation}
          onChange={handleOccupation}
          className={isSubmitted && !values.occupation ? 'error' : null}
        />
        {isSubmitted && !values.occupation ? (
          <span className='message'>Field required</span>
        ) : null}
      </div>

      <div className='inputs'>
        <label htmlFor='hobbies'>Hobbies</label>
        <input
          type='text'
          name='hobbies'
          value={values.hobbies}
          onChange={handleHobbies}
          className={isSubmitted && !values.hobbies ? 'error' : null}
        />
        {isSubmitted && !values.hobbies ? (
          <span className='message'>Field required</span>
        ) : null}
      </div>

      <div className='textarea'>
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          value={values.description}
          onChange={handleDescription}
          rows='5'
          cols='50'
          disabled={isDisabled}
          className={isSubmitted && !values.description ? 'error' : null}
        ></textarea>
        <span id='remaining'>{remainingWords} characters remaining</span>
      </div>
      {isSubmitted && !values.description ? (
        <span className='message'>Field required</span>
      ) : null}

      <Button text='Add new actor' variant='primary' />
      <p onClick={() => closeModal(false)}> I changed my mind</p>
    </form>
  );
};

export default AddActor;
