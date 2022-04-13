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


function App() {
  const [activeModal, setActiveModal] = useState(false)
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
    {activeAlert && <Alert alertList={alertList} closeAlert={setActiveAlert}/> }
    <Header />
    <div className='actors'>
   {
     actors.map(actor => 
      <Actor key={actor.name} name={actor.name} occupation={actor.occupation} score={actor.score} img={actor.img} hobbies={actor.hobbies} description={actor.description} />)
   }
   </div>
   <Button text='Add new actor' classStyle='primary' action={setActiveModal} />
   {activeModal && <Modal  closeModal={setActiveModal}/>}
   
   <Footer />
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
