
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
import kanye21 from './images/kanye21.jpg'
import kanye22 from './images/kanye22.jpg'
import kanye23 from './images/kanye23.jpg'
import kanye24 from './images/kanye24.jpg'
import kanye25 from './images/kanye25.jpg'
import kanye26 from './images/kanye26.jpg'
import kanye27 from './images/kanye27.jpg'
import kanye28 from './images/kanye28.png'
import kanye29 from './images/kanye29.jpg'
import kanye30 from './images/kanye30.jpg'
import kanye31 from './images/kanye31.jpg'
import kanye32 from './images/kanye32.jpg'
import kanye33 from './images/kanye33.jpg'
import kanye34 from './images/kanye34.jpg'
import kanye35 from './images/kanye35.jpg'
import kanye36 from './images/kanye36.png'
import kanye37 from './images/kanye37.jpg'
import kanye38 from './images/kanye38.jpg'
import kanye39 from './images/kanye39.png'
import kanye40 from './images/kanye40.jpg'








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
        kanye20,
        kanye21,
        kanye22,
        kanye23,
        kanye24,
        kanye25,
        kanye26,
        kanye27,
        kanye28,
        kanye29,
        kanye30,
        kanye31,
        kanye32,
        kanye33,
        kanye34,
        kanye35,
        kanye36,
        kanye37,
        kanye38,
        kanye39,
        kanye40,



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
                <h2 className="quote-text">"{quote}"</h2>
            </div>
        </div>
    </div>

  );
};


export default QuoteCard;
