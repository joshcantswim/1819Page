import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function MeetTheTeam() {
  return (
    <div className="MeetDiv">
  <h1>Meet the team</h1>
  <div className="IDdiv">
    <img src="https://via.placeholder.com/150"/>
    <h3>Chris Daniels</h3>
    <p><b>Manager in Residence</b></p>
    <p>Blah blah blah blah blah</p>
  </div>
  <div className="IDdiv">
  <img src="https://i.ibb.co/177HczP/nando.jpg" alt="nando" border="0"/>
    <h3>Fernando d'Hyver</h3>
    <p><b>Developer Co-Op</b></p>
    <p>Fernando was born and raised
    in Mexico City until he was 11
    years old. He moved to the
    Cincinnati area at the age of
    12. He is a 3rd year student
    in the UC's IT program in
    Cybersecurity. He is working
    in the position of Software
    Development intern at the 1819
    Innovation Hub. He is fluent in
    Spanish, English and French and
    loves to tinker with tech whenever
    'spossible in his free time.</p>
  </div>
  <div className="IDdiv">
<img src="https://i.ibb.co/Dg1jMFz/josh.jpg" alt="josh" border="0"/>
    <h3>Josh Shell</h3>
    <p><b>Developer Co-Op</b></p>
    <p>Josh is a Software Development
    major at the University of
    Cincinnati working as a developer
    for Kroger at the 1819 Innovation
    Hub. Before Kroger he had a
    career in retail and fashion
    merchandising in New York before
    teaching himself how to code.
    He comes with a B.A. in Political
    Science from Wilmington College (2012)
    and a crippling caffeine dependency.</p>
  </div>
  <div className="IDdiv">
    <img src="https://i.ibb.co/nbYTd2V/addison.jpg" alt="addison" border="0"/>
    <h3>Addison Carter</h3>
    <p><b>Industrial Design Co-Op</b></p>
    <p>Addison Carter is a 4th year industrial
    design student in the UC design art and
    architecture school.  He has worked for
    Kroger, Kao, Apex, and P&G.  If he is not
     doing consumer research or user centered
     design you can find him reading the chemistry
     journals or doing sculptural CNC.  In his
    non-work life he runs a dog dress business,
    chases his son, and enjoys cooking.</p>
  </div>
  <div className="IDdiv">
<img src="https://i.ibb.co/Bgfjhww/tory.jpg" alt="tory" border="0"/>
    <h3>Victoria Schoeffler</h3>
    <p><b>Project Manager Co-Op</b></p>
    <p>Tory is the project manager
    intern at the 1819 Innovation Hub.<br/>
    She is a 5th year student at the
    University of Cincinnati studying
   Operations Management. She was born
    and raised in Centerville, Ohio and
    moved to Cincinnati for school.
    She enjoys spending time outside
    and with her family and friends. </p>
  </div>
  <div className="IDdiv">
    <img src="https://i.ibb.co/NZXfCNx/kcow.png" alt="kcow" border="0"/>
    <h3>KCow</h3>
    <p><b>Mascot</b></p>
    <p>KCow enjoys long walks on the range and prairie grass.
     He dislikes long cold winters, cyotes and muddy water.
     He enjoys a glass of lactose free milk and dislikes
     the meat section at Kroger. MOOOOOOOOOOOOOOOO</p>
  </div>
    </div>
  );
}

export default MeetTheTeam;
