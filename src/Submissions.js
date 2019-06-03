import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';




function Submissions() {
  return(
    <div>
    <div className="formDiv">
    <h2>Tell us about your big idea!!</h2>
    <form>
      Name:<br/>
      <input type="text" /><br/>
      EIN:<br/>
      <input type="text" /><br/>
      Job Title/Location:<br/>
    <input type="text" /><br/>
    Supervisor:<br/>
    <input type="text"/><br/>
    <br/>
    What kind of idea is this?<br/>
  <input type="radio"/>Internal/BOH<br/>
    <input type="radio"/>Customer Facing<br/>
    <input type="radio"/>Big Ideas<br/>
    <br/>
    Idea:<br/>
  <input type="text" className="idea"/><br/>
  <br/>
  Have you proposed this idea previously?<br/>
<input type="radio"/>Yes<br/>
<input type="radio"/>No<br/>

Would you be willing to work on this idea with the 1819 team to develop<br/>
this idea on top of your daily work duties?<br/>
<input type="radio"/>Yes<br/>
<input type="radio"/>No<br/>
<br/>
<input type="submit" value="Submit"/>
    </form>
  </div>
    </div>
  );
}

export default Submissions;
