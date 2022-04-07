import React from 'react';
import Button from './Button/Button';
import edit from '../icons/edit.svg'
import Info from './Info/Info';



const Actor = ({img, name, occupation, score, hobbies, description}) => {
 console.log(name)
  return (
    <div className='actor'>
      <Info img={img} name={name} occupation={occupation} score={score} />
      <Button text='Edit' classStyle='secondary' icon={edit}/>
    </div>   
  );
};

export default Actor;
