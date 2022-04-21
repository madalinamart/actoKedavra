import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Actor from './components/Actor'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Leonardo from './images/Leonardo.svg'
import Aniston from './images/Aniston.svg'
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';
import success from './icons/success.svg'
import warning from './icons/warning.svg'
import danger from './icons/danger.svg'
import NoActors from './components/NoMoreActors/NoActors';
import Sort from './components/Sort/Sort';


function App() {
  const [activeSort, setActiveSort] = useState(false)
  const [activeAlert, setActiveAlert] = useState(true)

  const actors = [{
    name: 'Leonardo Dicaprio',
    occupation: 'Actor & Writer',
    score: 47,
    img: Aniston,
    hobbies: 'Music and dancing naked in the rain',
    description: 'He is a good guy with a thick mustache',
  },
  {
  name: 'Jennifer Aniston',
  occupation: 'Actress & Director',
  score: 45,
  img: Leonardo,
  hobbies: 'Music and dancing naked in the rain',
  description: 'He is a good guy with a thick mustache',
  }];

  const alertList = [
    {
      id: 1,
      title: 'Success',
      message: 'Actor added successfully.',
      backgroundColor: '#E5FFF2',
      color: '#00994D',
      icon: success
    },
    {
      id: 2,
      title: 'Warning',
      message: 'You can add max. 7 actors.',
      backgroundColor: '#FEFEE5',
      color: '#6A5300',
      icon: warning
    },
    {
      id: 3,
      title: 'Danger',
      message: 'Your changes were not saved.',
      backgroundColor: '#FFE5FA',
      color: '#ED2E7E',
      icon: danger
    }

  ]

  return (
    <div className="App">
<div className='actions'>
  <Button classStyle='primary' text='Sort' action={setActiveSort} />
  {activeSort && <Modal title='Select type of sort' positioning='0' component={<Sort />} closeModal={setActiveSort} />}
  <Button classStyle='primary' text='Select' /> 
</div>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  hobbies: PropTypes.string,
  describe: PropTypes.string
}

export default App;
