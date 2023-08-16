import { useState, useEffect } from "react";
import Actor from "./components/ActorCard/Actor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import Modal from "./components/ui/Modal/Modal";
import Button from "./components/ui/Button/Button";
import Alert from "./components/ui/Alert/Alert";
import NoActor from "./components/ui/NoActor/NoActor";
import Sort from "./components/ui/Sort/Sort";
import Form from "./components/ui/Form/Form";
import SelectActors from "./components/ui/SelectActors/SelectActors";
import { useParams } from "react-router-dom";
import Dropdown from "./components/ui/Dropdown/Dropwdown";
import Select from "./components/ui/Select/Select";

function StyleGuidePage() {
  const [actors, setActors] = useState([]);
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState(false);
  const [select, setSelect] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(false);
  const [alert, setAlert] = useState(null);
  const [allChecked, setAllChecked] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [isOpenSelectDesktop, setIsOpenSelectDesktop] = useState(false);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    try {
      const response = await fetch("../actors.json");
      const json = await response.json();
      setActors(json);
    } catch (error) {
      console.log(error);
    }
  };

  const { name } = useParams();

  const handleSortClickAsc = () => {
    setActors(
      [...actors].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    );
  };

  const handleSortClickDesc = () => {
    setActors(
      [...actors].sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      })
    );
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleSort = () => {
    setSort(!sort);
    setSelect(false);
    setDeleteCheck(false);
  };

  const toggleSelect = () => {
    setSelect(!select);
    setSort(false);
    setDeleteCheck(false);
  };

  const toggleDelete = () => {
    setDeleteCheck(!deleteCheck);
    setSort(false);
    setSelect(false);
  };

  const toggleAlert = (type) => {
    setAlert({ type });
    setTimeout(() => {
      closeAlert();
    }, 3000);
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handleSelectAll = () => {
    const updatedAllChecked = !allChecked;
    setAllChecked(updatedAllChecked);

    if (updatedAllChecked) {
      setIsCheck(actors.map((actor) => actor.name));
      setSelectedActors(actors.map((actor) => actor.name));
      console.log(selectedActors);
    } else {
      setIsCheck([]);
      setSelectedActors([]);
      console.log(selectedActors);
    }
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;

    setIsCheck((prevIsCheck) => {
      if (checked) {
        setSelectedActors((prevSelectedActors) => [
          ...prevSelectedActors,
          name,
        ]);
        return [...prevIsCheck, name];
      } else {
        setSelectedActors((prevSelectedActors) =>
          prevSelectedActors.filter((item) => item !== name)
        );
        return prevIsCheck.filter((item) => item !== name);
      }
    });
  };
 const setSelectedDesktop = () => {
  setIsOpenSelectDesktop(!isOpenSelectDesktop)
  toggleSelect()
 }
  const deleteActors = (name) => {
    setActors(actors.filter((actor) => actor.name !== name));
  };

  const deleteSelectedActors = () => {
    setActors((prevActors) =>
      prevActors.filter((actor) => !selectedActors.includes(actor.name))
    );
    setSelectedActors([]);
  };

  return (
    <>
      <Header />
      <Alert
        show={alert !== null}
        close={closeAlert}
        type={alert ? alert.type : ""}
        message={alert ? alert.message : ""}
      />
      <div className="container">
        {actors.length > 0 ? (
          <>
            <div className="sort-select">
              <Button label="Sort" handleClick={toggleSort} btnStyle="third" />
              <Button
                label="Select"
                handleClick={toggleSelect}
                btnStyle="third"
              />
              {sort && (
                <Modal
                  show={sort}
                  title="Select type of sort"
                  close={toggleSort}
                  content={
                    <Sort
                      asc={handleSortClickAsc}
                      desc={handleSortClickDesc}
                    />
                  }
                  small={true}
                />
              )}
              {select && (
                <Modal
                  show={select}
                  title="Select"
                  close={toggleSelect}
                  content={
                    <SelectActors
                      selectedLength={selectedActors.length}
                      handleClick={handleSelectAll}
                      name="all"
                      isCheck={allChecked}
                      showDelete={deleteCheck}
                      handleDelete={deleteSelectedActors}
                    />
                  }
                  small={true}
                />
              )}
              {deleteCheck && (
                <Modal
                  show={deleteCheck}
                  title="Are you sure you want to delete the selection?"
                  close={toggleDelete}
                  content={
                    <>
                      <Button btnStyle="primary" label="Yes, delete" />
                      <p className="close-form" onClick={toggleDelete}>
                        I changed my mind
                      </p>
                    </>
                  }
                  small={true}
                />
              )}
            </div>
            <div className="sort-select-desktop">
              {!isOpenSelectDesktop ? (
                <>
                  <Dropdown 
                      asc={handleSortClickAsc}
                      desc={handleSortClickDesc}/>
                  <Button
                    btnStyle="select-desktop"
                    label="Select"
                    handleClick={setSelectedDesktop}
                  />
                </>
              ) : (
                <Select
                  selectedLength={selectedActors.length}
                  handleClick={handleSelectAll}
                  close={setSelectedDesktop}
                  name="all"
                  isCheck={allChecked}
                  showDelete={deleteCheck}
                  handleDelete={deleteSelectedActors}
                />
              )}
            </div>
            <div className="actors-container">
              {actors.map((actor) => (
                <Actor
                  actor={actor}
                  key={actor.name}
                  selectOpen={select}
                  handleClick={handleCheck}
                  isChecked={isCheck.includes(actor.name)}
                  deleteActors={() => deleteActors(actor.name)}
                  openModal={() => toggleModal()}
                />
              ))}
            </div>
          </>
        ) : (
          <NoActor show={modal} close={toggleModal} openModal={toggleModal} />
        )}

        <Button
          label="Add new actor"
          btnStyle="primary"
          handleClick={toggleModal}
        />
      </div>
      {/* DISPLAY MODAL */}

      {modal && (
        <Modal
          show={modal}
          title={name ? "Edit actor" : "Add new actor"}
          close={toggleModal}
          content={
            <Form
              name={name}
              toggleAlert={toggleAlert}
              actors={actors}
              setActors={setActors}
              close={toggleModal}
            />
          }
        />
      )}
      <Footer />
    </>
  );
}

export default StyleGuidePage;
