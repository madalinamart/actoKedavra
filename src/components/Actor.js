import Button from './Button/Button';
import edit from '../icons/edit.svg'
import Info from './Info/Info';
import Hobbies from './Hobbies/Hobbies';
import Description from './Description/Description';
import './Actor.css'



const Actor = ({img, name, occupation, score, hobbies, description, deleteActor}) => {
  return (
    <div className='actor'>
      <Info img={img} name={name} occupation={occupation} score={score} />
      <div className='close'><Button text='X' action={() => deleteActor(name)}/></div>
      <Hobbies hobbies={hobbies} />
      <Description description={description} readMore='Read more' readLess='Read Less'/>
      <Button text='Edit' variant='secondary' padding='8px' icon={edit} />
    </div>   
  );
};

export default Actor;
