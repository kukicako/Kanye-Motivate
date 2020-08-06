import React from "react";
// import "./styles.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Kanye from "./kanye"
import Countdown from "./countdown"

export default function App() {

  return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Kanye} />
        <Route exact path="/vote" component = {Countdown} />


        </div>
      </Router>
  );
}