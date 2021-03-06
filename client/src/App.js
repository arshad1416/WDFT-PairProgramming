import React from 'react';
import Nav from './Components/Nav/nav'
import Main from './Components/Main/main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Error from './Components/Error/error';
import './App.css';

class App extends React.Component {
  render() {
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
}

export default App;
