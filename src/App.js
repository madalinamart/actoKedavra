import './App.css';
import PropTypes from 'prop-types'
import Actor from './components/Actor'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  const actor = {
    name: 'Leonardo Dicaprio',
    score: 10,
    hobbies: 'Music and dancing naked in the rain',
    description: 'He is a good guy with a thick mustache',
  };

  return (
    <div className="App">
    <Header />
   <Actor actor={actor} />
   <Footer />
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
