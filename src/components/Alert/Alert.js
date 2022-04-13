import React, {useState, useEffect} from 'react'
import Button from '../Button/Button';
import './Alert.css'


const Alert = ({alertList, closeAlert}) => {
  const [list, setList] = useState(alertList);

  useEffect(() => {
    setList(alertList);
  }, [alertList, list])

  return (
    <div className='container'>
      {
        list.map((a) => 
        <div key={a.id} className='notification-container' style={{backgroundColor: a.backgroundColor, color: a.color}}>
          <div className='notification'>
          <div className='notification-img'>
            <img src={a.icon} alt='' />
          </div>
          <div>
            <p className='notification-message'>
              {a.message}
            </p>
          </div>
          </div>
          <Button text='X' classStyle='close-button close-alert' color={a.color} action={() => closeAlert(false)}/>
        </div>
        )
      }
    </div>
  )
}

export default Alert