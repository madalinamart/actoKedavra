import {useState} from 'react'
import './CheckBox.css'

const CheckBox = () => {
  const [checked, setChecked] = useState(false)
  
  const handleChange = () => {
      setChecked(!checked);
  }

  return (
   <label className='checkbox-container'>
       <input type='checkbox'
       onChange={handleChange} />
       <span className='checkbox'
       aria-hidden='true' />
   </label>
  )
}

export default CheckBox