import sadEmoji from '../../icons/sadEmoji.svg'
import './NoActors.css'

const NoActors = () => {
  return (
    <div className='no-actors-wrapper'>
        <img className='sad' src={sadEmoji} alt='sad face icon' />
        <p>There are no actors here. Consider adding one.</p>
    </div>
  )
}

export default NoActors