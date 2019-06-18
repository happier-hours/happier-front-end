import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { withSession } from '../container/auth/withSession';
import Home from './Home';
import Callback from '../container/auth/Callback';
import CreatePlace from '../container/places/CreatePlace';
import PlaceById from '../container/places/PlaceById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={withSession(CreatePlace)} />
        <Route path="/callback" component={Callback} />
        <Route path="/places/:id" component={PlaceById} />
      </Switch>
    </Router>
  );
}
