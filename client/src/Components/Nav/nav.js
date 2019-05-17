import React from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './nav.scss';

class Nav extends React.Component {

render() {
    return (
        <main className="nav">
            <ul className="nav__links">
                <li className="nav__links--align">About Us</li>
                <li className="nav__links--align">Resources</li>
                <li className="nav__links--align">Contact Us</li>
            </ul>
        </main>
    )

    }
   
}

export default Nav;