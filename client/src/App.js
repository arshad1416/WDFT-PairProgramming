import React from 'react';
import Nav from './Components/Nav'
import Main from './Components/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Error from './Components/Error/error';
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
