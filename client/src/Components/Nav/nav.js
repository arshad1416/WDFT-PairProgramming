import React from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Nav from './nav.scss';

export class Nav extends React.Component {

render() {
    return (
        <div className="nav">
        <ul>
            <li>About Us</li>
            <li>Resources</li>
            <li>Contact Us</li>
        </ul>
        </div>
    )

    }
   
}