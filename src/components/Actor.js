import Button from './Button/Button';
import edit from '../icons/edit.svg'
import Info from './Info/Info';
import Hobbies from './Hobbies/Hobbies';
import Description from './Description/Description';
import { Link } from 'react-router-dom';
import './Actor.css'
import Modal from './Modal/Modal';
import AddActor from './Form/AddActor';
import CheckBox from './CheckBox/CheckBox';



const Actor = ({actor, deleteActor, activeForm, openForm, actors, }) => {  

  return (
    <div className='actor'>
      <div className='actor-checkbox'>
      <CheckBox />
      </div>
      <Info img={actor.picture} name={actor.name} occupation={actor.occupation} score={actor.score} />
      <div className='close'><Button text='X' action={() => deleteActor(actor.name)}/></div>
      <Hobbies hobbies={actor.hobbies} />
      <Description description={actor.description} readMore='Read more' readLess='Read Less'/>
      <Link to={`/${actor.name}`}>
      <Button text='Edit' variant='secondary' padding='8px' icon={edit} action={openForm}/>
      </Link>
      {activeForm && (
          <Modal
            bottom='0'
            top='0'
            title='Edit actor'
            component={<AddActor closeModal={openForm} actors={actors} />}
            closeModal={openForm}
          />
        )}

    </div>   
  );
};

export default Actor;
