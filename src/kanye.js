import React, {useState, useRef, useEffect} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import QuoteCard from './quoteCard'
import { useDarkMode } from './hooks/useDarkMode'
import dark from './images/dark.png'
import countdown from './countdown'
import vote from './images/vote.png'
import left from './images/left.png'
import right from './images/right.png'
import {Link} from 'react-router-dom'


export default function Kanye() {
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
      <h1 className="MainTitle" style={{cursor: "default"}}>Kanye Motivate</h1>
      {/* <p>VOTE KANYE 2020</p> */}
    </div> 

    <section className="arrow-container">
      <div className="link-container">
        <Link  style={{textDecoration: "none"}} to="/vote" className="arr-con">
          <img className="arrow" src={left} />
        </Link>
          <h2 className="vote-title">About Kanye</h2>
      </div>
      <div className="link-container2">
        <h2 className="vote-title2">Vote 2020</h2>
        <Link to="/vote" className="arr-con2">
          <img  className="arrow" src={right}/> 
        </Link>
    </div>
    </section>


    <div className="quote-container">
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
    </div>

    <div className="new">
      <a className="vote" href="https://vote.gov/">
        <img className="voteIMG" src={vote} /> </a>


        <button onClick={handleChange} className="myButton">New Quotes?</button>
      <div className="dark-mode_toggle">
          <img
            className="darkmode"
            src={dark}
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'} 
          /> 
        </div> 

    </div>


  </div>

  );

}

