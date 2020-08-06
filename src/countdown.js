import React, {useState, useRef, useEffect} from 'react';
import background from "./images/background.png"
import left from './images/left.png'
import right from './images/right.png'
import {Link} from 'react-router-dom'
import { useDarkMode } from './hooks/useDarkMode'
import dark from './images/dark.png'
import vote from './images/vote.png'
import gif from './images/gif.webp'


export default function Timer() {
    const [timerDays, SetTimerDays] = useState('00');
    const [timerHours, SetTimerHours] = useState('00');
    const [timerMinutes, SetTimerMinutes] = useState('00');
    const [timerSeconds, SetTimerSeconds] = useState('00');
    const [darkMode, setDarkMode] = useDarkMode(false);

    
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  function handleChange(){
    window.location.href = window.location.pathname + window.location.search + window.location.hash;
  }
  
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
      
  
    return (
    <div>
        <div>
            <h1 style={{marginTop:"1%"}}>2020 US Presidential Election Countdown</h1>
        </div>
        <section className="arrow-container">
            <div className="link-container">
                <Link  style={{textDecoration: "none"}} to="/" className="arr-con">
                <img className="arrow" src={left} />
                </Link>
                <h2 className="vote-title">About Kanye</h2>
            </div>
            <div className="link-container2">
                <h2 className="vote-title2">Vote 2020</h2>
                <Link to="/" className="arr-con2">
                <img  className="arrow" src={right}/> 
                </Link>
            </div>
        </section>

        <section className="timer">
            <div className="timerTitle">
                <p >{timerDays}</p>
                <p className="space">days</p>
            </div>
            <h1>:</h1>
            <div className="timerTitle">
                <p >{timerHours}</p>
                <p className="space">Hours</p>
    
            </div>
            <h1 >:</h1>
            <div className="timerTitle">
                <p >{timerMinutes}</p>
                <p className="space">minutes</p>
        
            </div>
            <h1>:</h1>
            <div className="timerTitle">
                <p style={{color:"red"}}>{timerSeconds}</p>
                <p className="space" >seconds</p>
            </div>
        
        </section>

        <div className="election">
            <div className="kanye-gif">
                <img className="giffy" src={gif}></img>
            </div>
            <div className="kanye-gif2">
                <iframe className="giffy" src="https://www.youtube.com/embed/pXyryUHItuc?autoplay=1" width="400" height="455" frameborder="0"></iframe>
            </div>
            <div className="kanye-gif3">
            <a class="twitter-timeline" data-width="350" data-height="350" data-theme="light" href="https://twitter.com/kanyewest?ref_src=twsrc%5Etfw">Tweets by kanyewest</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <div className="kanye-gif4">
            <blockquote class="embedly-card"><h4><a href="https://en.wikipedia.org/wiki/Kanye_West">Kanye West</a></h4><p>Kanye Omari West (; born June 8, 1977) is an American rapper, producer, and fashion designer. His music draws from a range of genres, including hip hop, soul, baroque pop, electro, indie rock, synth-pop, industrial, and gospel.</p></blockquote>
                <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
            </div>
        </div>

        <div className="new">
      <a className="vote" href="https://vote.gov/">
        <img className="voteIMG" src={vote} /> </a>


        <a href="/" className="myButton">Quotes?</a>
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