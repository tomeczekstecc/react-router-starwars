import React, { Fragment } from "react";
import Home from "./components/Home";
import Characters from "./components/charachters/Characters";
import Character from "./components/charachters/charachter/Charachter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css'


function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/characters' component={Characters} />
          <Route exact path="/characters/:id" component={Character}/>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
