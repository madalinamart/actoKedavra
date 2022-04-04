import React from 'react';

const Actor = ({actor}) => {

  return (
    <div>
      <ul>
        <li>{actor.name}</li>
        <li>{actor.score}</li>
        <li>{actor.hobbies}</li>
        <li>{actor.description}</li>
      </ul>
    </div>
  );
};

export default Actor;
