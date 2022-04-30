import { useState, useEffect } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Actor from "./components/Actor";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";
import success from "./icons/success.svg";
import warning from "./icons/warning.svg";
import danger from "./icons/danger.svg";
import NoActors from "./components/NoMoreActors/NoActors";
import Sort from "./components/Sort/Sort";
import AddActor from "./components/Form/AddActor";

const StyleguidePage = () => {
  const [activeSort, setActiveSort] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [activeAlert, setActiveAlert] = useState(true);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("actors.json")
      .then((response) => response.json())
      .then((data) => setActors(data));
  };

  const alertList = [
    {
      id: 1,
      title: "Success",
      message: "Actor added successfully.",
      backgroundColor: "#E5FFF2",
      color: "#00994D",
      icon: success,
    },
    {
      id: 2,
      title: "Warning",
      message: "You can add max. 7 actors.",
      backgroundColor: "#FEFEE5",
      color: "#6A5300",
      icon: warning,
    },
    {
      id: 3,
      title: "Danger",
      message: "Your changes were not saved.",
      backgroundColor: "#FFE5FA",
      color: "#ED2E7E",
      icon: danger,
    },
  ];
  return (
    <>
      <Header />
      <div className="App">
        <div className="actions">
          <Button classStyle="primary" text="Sort" action={setActiveSort} />
          {activeSort && (
            <Modal
              title="Select type of sort"
              bottom="0"
              component={<Sort />}
              closeModal={setActiveSort}
            />
          )}
          <Button classStyle="primary" text="Select" />
        </div>
        {
          !actors.length ? <NoActors /> :
          <div className="actors">
            {
            actors.map((actor) => (
              <Actor
                key={actor.name}
                img={actor.picture}
                name={actor.name}
                occupation={actor.occupation}
                score={actor.score}
                hobbies={actor.hobbies}
                description={actor.description}
              />
            ))}
          </div>
        }
        <Button
          classStyle="primary"
          text="Add new actor"
          color="#fff"
          backgroundColor="#6308F7"
          action={setActiveForm}
        />
        {activeForm && (
          <Modal
            bottom="0"
            top="0"
            title="Add new actor"
            component={<AddActor closeModal={setActiveForm} />}
            closeModal={setActiveForm}
          />
        )}
        <Footer />
      </div>
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