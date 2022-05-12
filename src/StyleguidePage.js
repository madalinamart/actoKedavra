import { useState, useEffect } from 'react';
import './StyleguidePage.css';
import data from './actors.json';
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
import Select from './components/SelectActor/Select';
import Dropdown from './components/DropDown/Dropdown';

const StyleguidePage = () => {
  const [activeSort, setActiveSort] = useState(false);
  const [activeSelect, setActiveSelect] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [activeAlert, setActiveAlert] = useState(true);
  const [actors, setActors] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selected, setSelected] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
 

  useEffect(() => {
    setActors(data);
  }, []); 


  const deleteActor = (name) => {
    setActors((actors) => actors.filter((actor) => actor.name !== name));
  };
  
  const editActor = (newActor) => {
    let actorsList = actors.map((actor) =>  actor.name === newActor.name ?  actor : newActor );
    console.log('actorsList', newActor)
    setActors(actorsList);
    console.log('actors = ', actors)     
    setEditForm(false);
  }

  const manageSelect = () => {
    setActiveSelect(!activeSelect);
    setShowCheckbox(!showCheckbox);
  };

const sortByAscending = () => {
  let sortedAscending = actors.sort((a, b) => a.name.localeCompare(b.name))
  setActiveSort(false)
  setActors(sortedAscending)
  setIsDropDownOpen(false)
}


const sortByDescending = () => {
  let sortedDescending = actors.sort((a, b) => b.name.localeCompare(a.name))
  setActiveSort(false)
  setActors(sortedDescending)
  setIsDropDownOpen(false)
}

const handleCheck = (e) => {
  let names = [];
  setIsChecked(e.target.checked);
  if (e.target.checked) {
    actors.map((actor) => names.push(actor.name));
    setSelected(names);
  } else {
    setSelected([]);
  }
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
          <Dropdown isDropDownOpen={isDropDownOpen} setIsDropDownOpen={setIsDropDownOpen} ascending={sortByAscending} descending={sortByDescending} />
          <Button
            variant='select-sort'
            text='Sort'
            padding='10px 66px'
            action={setActiveSort}
          />
          {activeSort && (
            <Modal
              title='Select type of sort'
              bottom='0'
              component={<Sort ascending={sortByAscending} descending={sortByDescending}/>}
              closeModal={setActiveSort}
            />
          )}
          <Button
            variant='select-sort'
            text='Select'
            padding='10px 66px'
            action={manageSelect}
          />
          {activeSelect && (
            <Modal
              title={
                actors.length === selected.length
                  ? 'All Selected'
                  : `${selected.length} Selected`
              }
              bottom='0'
              component={
                <Select
                  length={actors.length}
                  selected={selected}
                  showCheckbox={showCheckbox}
                  deleteActor={deleteActor}
                  handleCheck={handleCheck}
                  isChecked={isChecked}
                  activeDelete={activeDelete}
                  setActiveDelete={setActiveDelete}
                  closeModal={manageSelect}
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
                editActor = {editActor}
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
            component={<AddActor closeModal={setActiveForm} buttonText='Add new actor'/>}
            closeModal={setActiveForm}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default StyleguidePage;
