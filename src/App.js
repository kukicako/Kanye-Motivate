import React, {useState, useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import QuoteCard from './quoteCard'
import { useDarkMode } from './hooks/useDarkMode'
import dark from './images/dark.png'

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [timerDays, SetTimerDays] = useState('00');
  const [timerHours, SetTimerHours] = useState('00');
  const [timerMinutes, SetTimerMinutes] = useState('00');
  const [timerSeconds, SetTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('November 03 2020 00:00:00').getTime();
    
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0){
        // stop our timer
        clearInterval(interval.current)
      } else {
        // update timer
        SetTimerDays(days);
        SetTimerHours(hours);
        SetTimerMinutes(minutes);
        SetTimerSeconds(seconds)
      }
    }, 1000)
    
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  })
    
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


    <section className="timer">
      <div className="timerTitle">
        <p>{timerDays}</p>
        <p className="space">days</p>
      </div>
      <div className="timerTitle">
        <p>{timerHours}</p>
        <p className="space">Hours</p>

      </div>
      <div className="timerTitle">
        <p>{timerMinutes}</p>
        <p className="space">minutes</p>

      </div>
      <div className="timerTitle">
        <p>{timerSeconds}</p>
        <p className="space">seconds</p>
      </div>
      
    </section>


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

