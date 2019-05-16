import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import Nav from './Components/Nav/nav.js';
=======
import Nav from './Components/Nav'
import Main from './Components/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Error from './Components/Error/error';
>>>>>>> 5a7a1d74f467ab4e62fc833b891d561075ed64c2
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main}></Route>
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
