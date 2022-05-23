import './CheckBox.css';
import PropTypes from 'prop-types'

const CheckBox = ({ showCheckbox, name, handleCheck, isChecked, id}) => {
    
  return (
    <>
      {showCheckbox ? (
        <label className='checkbox-container'>
          <input type='checkbox' name={name} id={id} onChange={handleCheck} checked={isChecked} value={name}/>
          <span className='checkbox' aria-hidden='true' />
        </label>
      ) : null}
    </>
  );
};

CheckBox.propTypes = {
  showCheckbox: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  handleCheck: PropTypes.func,
  isChecked: PropTypes.bool
}
export default CheckBox;
