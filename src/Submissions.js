import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';




function Submissions() {
  return(
    <div>
    <div className="formDiv">
    <h1>Tell us about your big idea!</h1>
    <form>
      <span>
      Name:<br/>
    <input type="text" className = "toptext" placeholder="First and Last"/><br/>
      EUID:<br/>
    <input type="text" className = "toptext" placeholder="ex. CD11897"/><br/>
      Job Title/Location:<br/>
    <input type="text" className = "toptext" placeholder="ex: Manager, Cashier"/><br/>
    Supervisor:<br/>
  <input type="text" className = "toptext" placeholder="Manager's Name"/><br/>
</span>
    <br/>
    What kind of idea is this?<br/>
  <input type="radio"/>Internal/BOH<br/>
    <input type="radio"/>Customer Facing<br/>
    <input type="radio"/>Big Ideas<br/>
    <br/>
    Idea:<br/>
  <input type="text" className="idea" placeholder="Describe your idea..."/><br/>
  <br/>
  Have you proposed this idea previously?<br/>
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
