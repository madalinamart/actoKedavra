import './CheckBox.css';
import { useState } from 'react';


const CheckBox = ({ showCheckbox, name, selected, setSelected}) => {
  const [isChecked, setIsChecked] = useState(false)

  
  const handleCheck = (e) => {
    setIsChecked(e.target.checked)
    if(e.target.checked) {
      setSelected([...selected, e.target.value])
    } else {
      const newSelected = selected.filter((select) => select !== e.target.value)
      setSelected(newSelected)
    }
  }
  return (
    <>
      {showCheckbox ? (
        <label className='checkbox-container'>
          <input type='checkbox' onChange={handleCheck} checked={isChecked} value={name} />
          <span className='checkbox' aria-hidden='true' />
        </label>
      ) : null}
    </>
  );
};

export default CheckBox;
