import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Studies from './pages/Studies';

export default () => {

  return (
    <Switch>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/projects" component={Projects}>
        <Projects/>
      </Route>
      <Route exact path="/studies" component={Studies}>
        <Studies/>
      </Route>
    </Switch>
  );
}