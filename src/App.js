import './App.css';

function App() {
  const actor = {
    name: "Leonardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache"
    }

  return (
    <div className="App">
      <ul>
        <li>{actor.name}</li>
        <li>{actor.score}</li>
        <li>{actor.hobbies}</li>
        <li>{actor.description}</li>
      </ul>
    </div>
  );
}

export default App;
