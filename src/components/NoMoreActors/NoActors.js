import sadEmoji from '../../icons/sadEmoji.svg'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './NoActors.css'

const NoActors = ({displayModal, activeModal}) => {
  return (
    <div className='no-actors-wrapper'>
        <img className='sad' src={sadEmoji} alt='sad face icon' />
        <p>There are no actors here. Consider adding one.</p>
        {activeModal && <Modal closeModal={displayModal} />}
        <Button text='Add new actor' classStyle='primary' color='#fff' backgroundColor='#6308F7' action={() => displayModal(true)} />
    </div>
  )
}

export default NoActors