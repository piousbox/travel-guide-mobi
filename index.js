import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import App from './src/app';
import Nav from './src/components/nav';

// Global Styles
import './assets/styles/bootstrap.css';
import './assets/styles/index.less';

// Components
import { About } from './src/components/pages';
import { Firsttime } from './src/components/users';
import { Index as TPIndex, EditMany } from './src/components/travel-plans';
import { Show as CitiesShow, Index as CitiesIndex } from './src/components/cities';

render((
  <Router history={hashHistory}>
    <Route component={Nav}>
      <Route path="/pages/about" component={About} />

      <Route path="/users/firsttime" component={Firsttime} />

      <Route path="/travel-plans" component={TPIndex} />
      <Route path="/travel-plans/edit" component={EditMany} />

      <Route path="/cities/:cityName/from/:from/until/:until" component={CitiesShow} />
      <Route path="/cities" component={CitiesIndex} />

      <Route path="/manager" component={ManagerDashboard} />

      <Route path="/events/:id/edit" component={EventsEdit} />

      <Redirect from="/" to="/users/firsttime" />
    </Route>
  </Router>
), document.getElementById('app'));
