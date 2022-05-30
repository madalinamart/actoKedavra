import { useContext } from 'react';
import { FormContext } from '../Form/Form';
import PropTypes from 'prop-types'

const FormInput = (props) => {
  const {
    label,
    type ,
    name,
  } = props;
  const formContext = useContext(FormContext);
  const { form, handleFormChange, handleDescription, isSubmitted, remainingWords, isDisabled, handleHobbies } = formContext;

  return (
    <div className='inputs'>
      <label>{label}</label>
      {type === 'textarea' ? (
        <div className='textarea'>
          <textarea
            name='description'
            value={form[name]}
            onChange={handleDescription}
            rows='5'
            cols='50'
            disabled={isDisabled}
            className={isSubmitted && form[name].length === 0 ? 'error' : null}
          ></textarea>
          <span className={`remaining ${isSubmitted && form[name].length === 0 ? 'error' : null}`}>{remainingWords} characters remaining</span>
          {isSubmitted &&  form[name].length === 0 && <span className='message'>Field required</span>}
        </div>
      ) : (
        <>
          <input
            type={type}
            name={name}
            value={form[name]}
            onChange={name === 'hobbies' ? handleHobbies : handleFormChange}
            className={isSubmitted && form[name].length === 0 ? 'error' : null}
          />
          {isSubmitted &&  form[name].length === 0 && <span className='message'>Field required</span>}
        </>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string
}

FormInput.defaultProps = {
  type: 'text'
}

export default FormInput;
