import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleGuidePage from './StyleGuidePage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <StyleGuidePage />} />
        <Route path="/:name" exact element={ <StyleGuidePage />} />
      </Routes>
    </Router>
  );
}

export default App;
