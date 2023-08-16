import React from "react";
import PropTypes from "prop-types";
import Image from "./ActorImg/Image";
import "./Actor.css";
import Likes from "./ActorLikes/Likes";
import Hobbies from "./ActorHobbies/Hobbies";
import Button from "../ui/Button/Button";
import Description from "./ActorDescription/Description";
import Checkbox from "../ui/Checkbox/Checkbox";
import { Link } from "react-router-dom";

function Actor({
  actor,
  selectOpen,
  handleClick,
  isChecked,
  deleteActors,
  openModal
}) {
  return (
    <div className="actor-card">
      <div className="actor-container">
      <Image isprofile='profile' src={actor.picture} alt="morgan freeman photo" />
      <div className="details">
        <p className="name">{actor.name}</p>
        <Likes occupation={actor.occupation} score={actor.score} />
        <Hobbies hobbies={actor.hobbies} />
        <Description description={actor.description} />
        <Link to={`/${actor.name}`}>
        <Button btnStyle="secondary" label="Edit" img="/img/edit-icon.png" handleClick={openModal}/>
        </Link>
      </div>
      </div>
      {selectOpen ? (
        <Checkbox
          handleClick={handleClick}
          selected={actor}
          isChecked={isChecked}
          name={actor.name}
        />
      ) : (
        <Button btnStyle="close" label="x" handleClick={deleteActors}/>
      )}
    </div>
  );
}

// actor,selectOpen,handleClick,isChecked,deleteActors,openModal

Actor.propTypes = {
  actor: PropTypes.object.isRequired,
  selectOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  deleteActors: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

export default Actor;
