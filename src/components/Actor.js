import React from 'react';
import Button from './Button/Button';
import edit from '../icons/edit.svg'
import Info from './Info/Info';
import Hobbies from './Hobbies/Hobbies';
import Description from './Description/Description';
import './Actor.css'



const Actor = ({img, name, occupation, score, hobbies, description}) => {
  return (
    <div className='actor'>
      <Info img={img} name={name} occupation={occupation} score={score} />
      <Button text='X' classStyle='close-button' />
      <Hobbies hobbies={hobbies} />
      <Description description={description} />
      <Button text='Edit' classStyle='secondary' icon={edit}/>
    </div>   
  );
};

export default Actor;
