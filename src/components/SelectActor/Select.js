import PropTypes from 'prop-types';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import './Select.css';
import Delete from '../../icons/Delete.svg';
import Modal from '../Modal/Modal';

const Select = ({
  selected,
  showCheckbox,
  deleteActor,
  length,
  activeDelete,
  setActiveDelete,
  closeModal,
  isChecked,
  handleCheck,
}) => {
  const deleteActors = () => {
    selected.map((select) => deleteActor(select));
    closeModal();
  };
  return (
    <div className='select-container'>
      <div className='select'>
        <p>Select All</p>
        <CheckBox
          showCheckbox={showCheckbox}
          name='select-all'
          isChecked={isChecked}
          handleCheck={handleCheck}
        />
      </div>
      <Button
        text='Delete'
        disabled={selected.length > 0 ? false : true}
        variant='secondary'
        padding='8px'
        icon={Delete}
        direction='row-reverse'
        action={() => setActiveDelete(true)}
      />
      {activeDelete && (
        <Modal
          title={
            length === selected.length
              ? 'Are you sure you want to delete the selection'
              : 'Are you sure you want to delete this actor'
          }
          bottom='0'
          component={
            <>
              <Button
                text='Yes, delete'
                variant='primary'
                action={deleteActors}
              />{' '}
              <p onClick={closeModal}>I changed my mind</p>
            </>
          }
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

Select.propTypes = {
  selected: PropTypes.array,
  showCheckbox: PropTypes.bool,
  deleteActor: PropTypes.func,
  handleCheck: PropTypes.func,
  isChecked: PropTypes.bool,
  length: PropTypes.number,
  activeDelete: PropTypes.bool,
  setActiveDelete: PropTypes.func,
  closeModal: PropTypes.func,
};

export default Select;
