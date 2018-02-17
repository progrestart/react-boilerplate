import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home/Home';
import Twitter from './Twitter/Twitter';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/twitter' component={Twitter}/>
      </Switch>
    );
  }
}

export default Router;