import './App.css';
import PropTypes from 'prop-types'
import Actor from './components/Actor'


function App() {
  const actor = {
    name: 'Leonardo Dicaprio',
    score: 10,
    hobbies: 'Music and dancing naked in the rain',
    description: 'He is a good guy with a thick mustache',
  };

  return (
    <div className="App">
   <Actor actor={actor} />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  hobbies: PropTypes.string,
  describe: PropTypes.string
}

export default App;
