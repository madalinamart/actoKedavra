import { useState, useEffect } from 'react';
import './App.css';
import data from './actors.json';
import PropTypes from 'prop-types';
import Actor from './components/Actor';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';
import success from './icons/success.svg';
import warning from './icons/warning.svg';
import danger from './icons/danger.svg';
import NoActors from './components/NoMoreActors/NoActors';
import Sort from './components/Sort/Sort';
import AddActor from './components/Form/AddActor';
import Select from './components/Select/Select';

const StyleguidePage = () => {
  const [activeSort, setActiveSort] = useState(false);
  const [activeSelect, setActiveSelect] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [activeAlert, setActiveAlert] = useState(true);
  const [actors, setActors] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selected, setSelected] = useState([]);
  const [isChecked, setIsChecked] = useState(false)


  const handleCheck = (e) => {
    let names = [];
    setIsChecked(e.target.checked)
    if(e.target.checked) {
      actors.map((actor) => names.push(actor.name))
      setSelected(names)
    } else {
      setSelected([])
    }
  }  


  useEffect(() => {
    setActors(data);
  }, []);

  const deleteActor = (name) => {
    setActors((actors) => actors.filter((actor) => actor.name !== name));
  };

  //EDIT ACTOR
  /*   const editActor = (name) => {
    actors.map(actor => { 
      if(actor.name === name) {        
      } else {
        return 'no actor with this name'
      }
    })
  }
   */

  const manageSelect = () => {
    setActiveSelect(!activeSelect);
    setShowCheckbox(!showCheckbox);
  };

  const alertList = [
    {
      id: 1,
      title: 'Success',
      message: 'Actor added successfully.',
      backgroundColor: '#E5FFF2',
      color: '#00994D',
      icon: success,
    },
    {
      id: 2,
      title: 'Warning',
      message: 'You can add max. 7 actors.',
      backgroundColor: '#FEFEE5',
      color: '#6A5300',
      icon: warning,
    },
    {
      id: 3,
      title: 'Danger',
      message: 'Your changes were not saved.',
      backgroundColor: '#FFE5FA',
      color: '#ED2E7E',
      icon: danger,
    },
  ];
  return (
    <>
      <Header />
      <div className='App'>
        <div className='actions'>
          <Button text='Sort' padding='10px 66px' action={setActiveSort} />
          {activeSort && (
            <Modal
              title='Select type of sort'
              bottom='0'
              component={<Sort />}
              closeModal={setActiveSort}
            />
          )}
          <Button text='Select' padding='10px 66px' action={manageSelect} />
          {activeSelect && (
            <Modal
              title='Select'
              bottom='0'
              component={
                <Select
                  selected={selected}
                  showCheckbox={showCheckbox}
                  deleteActor={deleteActor}
                  handleCheck={handleCheck}
                  isChecked={isChecked}
                />
              }
              closeModal={manageSelect}
            />
          )}
        </div>
        {!actors.length ? (
          <NoActors />
        ) : (
          <div className='actors'>
            {actors.map((actor) => (
              <Actor
                showCheckbox={showCheckbox}
                key={actor.name}
                actor={actor}
                deleteActor={deleteActor}
                activeForm={editForm}
                openForm={setEditForm}
                actors={actors}
                isChecked={isChecked}
                handleCheck={handleCheck}
              />
            ))}
          </div>
        )}
        <Button
          variant='primary'
          text='Add new actor'
          padding='16px 106px'
          action={setActiveForm}
        />
        {activeForm && (
          <Modal
            bottom='0'
            top='0'
            title='Add new actor'
            component={<AddActor closeModal={setActiveForm} />}
            closeModal={setActiveForm}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

StyleguidePage.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  hobbies: PropTypes.string,
  describe: PropTypes.string,
};

export default StyleguidePage;
