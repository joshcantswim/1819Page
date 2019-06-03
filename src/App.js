import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import MeetTheTeam from './MeetTheTeam';
import Submissions from './Submissions';
import Resources from './Resources';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App" >
<div className="Header"/>
{/*Anything coded habove this will appear on all pages */}
      <Nav />
  <Switch>
      <Route path="/" exact component={Home}/>
      <Route  path="/about" component={About}/>
      <Route path="/MeetTheTeam" component={MeetTheTeam}/>
      <Route path="/Submissions" component={Submissions}/>
      <Route path="/Resources" component={Resources} />
    </Switch>
    </div>
  </Router>
  );
}
 /*Homepage content goes here*/
const Home = () => (
  <div id="home">
  </div>
);

export default App;
