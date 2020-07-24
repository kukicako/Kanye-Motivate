import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import QuoteCard from './quoteCard'
import { useDarkMode } from './hooks/useDarkMode'
import dark from './images/dark.png'

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
    
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  function handleChange(){
    window.location.href = window.location.pathname + window.location.search + window.location.hash;
  }

  return (
    <div className="App">
    <div>
      <h1>Get Motivated With Yeezus</h1>
    </div> 
    <div className="dark-mode_toggle">
        <img
        src={dark}
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'} 
        /> 
      </div>

    <div className="quote-container">
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
    </div>
    <div className="new">
      <button onClick={handleChange} className="myButton">New Quotes?</button>
      <p>VOTE KANYE 2020</p>

    </div>


  </div>
  );
}

export default App;
