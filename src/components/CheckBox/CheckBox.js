import './CheckBox.css';

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

export default CheckBox;
