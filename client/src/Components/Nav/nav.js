import React from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './nav.scss';

class Nav extends React.Component {

render() {
    return (
        <div className="nav">
        <ul className='nav__links'>
            <li>About Us</li>
            <li>Resources</li>
            <li>Contact Us</li>
        </ul>
        </div>
    )

    }
   
}

export default Nav;