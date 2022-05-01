import './CheckBox.css';

const CheckBox = ({isChecked, handleCheck, showCheckbox }) => {
  console.log('checked', isChecked)
  return (
    <>
      {showCheckbox ? (
        <label className='checkbox-container'>
          <input type='checkbox' onChange={handleCheck} checked={isChecked} />
          <span className='checkbox' aria-hidden='true' />
        </label>
      ) : null}
    </>
  );
};

export default CheckBox;
