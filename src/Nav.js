import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ui>
        <Link to='./'>
          <li>Home</li>
        </Link>
      <Link to='./About'>
        <li>About</li>
        </Link>
        <Link to='./MeetTheTeam'>
        <li>Meet The Team</li>
        </Link>
        <Link to='./Submissions'>
        <li>Submissions</li>
        </Link>
        <Link to='./Resources'>
        <li>Resources</li>
        </Link>
      </ui>
    </nav>
  );
}

export default Nav;
