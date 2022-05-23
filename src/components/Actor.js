import Button from './Button/Button';
import edit from '../icons/edit.svg';
import Info from './Info/Info';
import Hobbies from './Hobbies/Hobbies';
import Description from './Description/Description';
import { Link } from 'react-router-dom';
import './Actor.css';
import Modal from './Modal/Modal';
import Form from './Form/Form';
import FormInput from './FormInput/FormInput';
import CheckBox from './CheckBox/CheckBox';

const Actor = ({
  actor,
  deleteActor,
  activeForm,
  openForm,
  showCheckbox,
  editActor,
  actors,
  handleCheck,
  isChecked,
  setActiveForm,
}) => {
  return (
    <div className='actor'>
      <div className='actor-checkbox'>
        <CheckBox
          showCheckbox={showCheckbox}
          name={actor.name}
          id={actor.name}
          handleCheck={handleCheck}
          isChecked={isChecked}
        />
      </div>
      <Info
        img={actor.picture}
        name={actor.name}
        occupation={actor.occupation}
        score={actor.score}
      />
      <div className='close'>
        <Button text='X' action={() => deleteActor(actor.name)} />
      </div>
      <Hobbies hobbies={actor.hobbies} />
      <Description
        description={actor.description}
        readMore='Read more'
        readLess='Read Less'
      />
      <Link to={`/${actor.name}`}>
        <Button text='Edit' padding='8px' icon={edit} action={openForm} />
      </Link>
      {activeForm && (
        <Modal
          bottom='0'
          top='0'
          title='Edit actor'
          component={
            <Form
              formInitialValues={{
                name: '',
                occupation: '',
                hobbies: '',
                description: '',
              }}
              buttonText='Edit actor'
              closeModal={openForm}
              submit={editActor}
              actors={actors}
            >
              <div className='name-occupation'>
                <FormInput label='Name' name='name' />
                <FormInput
                  label='Occupation besides acting'
                  name='occupation'
                />
              </div>
              <FormInput label='Hobbies' name='hobbies' />
              <div className='textarea'>
                <FormInput
                  label='Description'
                  name='description'
                  type='textarea'
                />
              </div>
            </Form>
          }
          closeModal={openForm}
        />
      )}
    </div>
  );
};

export default Actor;
