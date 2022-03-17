import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import Proficiencies from './Components/Proficiencies'
import Projects from './Components/Projects'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <HomePage/>
        <Proficiencies/>
        <Projects/>
      </div>
    </BrowserRouter>
  );
}

export default App;
