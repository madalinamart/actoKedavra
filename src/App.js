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


function App() {
  const [activeModal, setActiveModal] = useState(false)
  
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

  return (
    <div className="App">
    <Header />
    <div className='actors'>
   {/* {
     actors.map(actor => 
      <Actor name={actor.name} occupation={actor.occupation} score={actor.score} img={actor.img} hobbies={actor.hobbies} description={actor.description} />)
   } */}
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
