
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import kanye from './images/kanye.png'
import kanye2 from './images/kanye2.jpg'
import kanye3 from './images/kanye3.jpg'
import kanye4 from './images/kanye4.jpg'
import kanye5 from './images/kanye5.png'
import kanye6 from './images/kanye6.jpg'
import kanye7 from './images/kanye7.png'
import kanye8 from './images/kanye8.png'
import kanye9 from './images/kanye9.jpg'
import kanye10 from './images/kanye10.jpg'
import kanye11 from './images/kanye11.jpg'
import kanye12 from './images/kanye12.jpg'
import kanye13 from './images/kanye13.jpg'
import kanye14 from './images/kanye14.jpg'
import kanye15 from './images/kanye15.png'
import kanye16 from './images/kanye16.jpg'
import kanye17 from './images/kanye17.jpg'
import kanye18 from './images/kanye18.jpg'
import kanye19 from './images/kanye19.jpg'
import kanye20 from './images/kanye20.jpg'







const QuoteCard = props => {
    const [quote, setQuote] = useState([]);



    const  images = [
        kanye,
        kanye2,
        kanye3,
        kanye4,
        kanye5,
        kanye6,
        kanye7,
        kanye8,
        kanye9,
        kanye10,
        kanye11,
        kanye12,
        kanye13,
        kanye14,
        kanye15,
        kanye16,
        kanye17,
        kanye18,
        kanye19,
        kanye20

    ]
    
    const randomValue = images[Math.floor(Math.random() * images.length)];
        

    useEffect(() => {
    Axios
    .get('https://api.kanye.rest')
    .then(res => {
        const quotes = res.data.quote
        console.log(res, "U GOT A QUOTE")
        setQuote(quotes)
        
    })
    .catch(error =>{
        console.log(error, "error")
    })
    }, [])


    


  return (
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={randomValue} className="kanye-img" alt="kanye"></img>
            </div>
            <div class="flip-card-back">
                <h2>"{quote}"</h2>
            </div>
        </div>
    </div>

  );
};


export default QuoteCard;
