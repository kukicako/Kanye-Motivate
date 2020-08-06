import React, {useState, useRef, useEffect} from 'react';

export default function Timer() {
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
      
  
    return (
     
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
  
  
    );
  
  }