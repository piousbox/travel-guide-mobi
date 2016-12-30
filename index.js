import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import App from './src/app';
import Nav from './src/components/nav';

// Global Styles
import './assets/styles/bootstrap.css';
import './assets/styles/index.less';

// Components
import Page1 from './src/components/page1.js';
import Page2 from './src/components/page2.js';
import About from './src/components/about';
import UsersFirsttime from './src/components/users-firsttime/users-firsttime';
import { default as TravelPlansIndex } from './src/components/travel-plans/index';
import { default as TravelPlansEditMany } from './src/components/travel-plans/edit-many';
import { default as CitiesShow } from './src/components/cities/show';
import { default as CitiesIndex } from './src/components/cities/index';

render((
  <Router history={hashHistory}>
    <Route component={Nav}>
      <Route path="/pages/page1" component={Page1}/>
      <Route path="/pages/page2" component={Page2}/>
      <Route path="/pages/about" component={About} />
      <Route path="/users/firsttime" component={UsersFirsttime} />
      <Route path="/travel-plans" component={TravelPlansIndex} />
      <Route path="/travel-plans/edit" component={TravelPlansEditMany} />
      <Route path="/cities/:cityName/from/:from/until/:until" component={CitiesShow} />
      <Route path="/cities" component={CitiesIndex} />
      <Redirect from="/" to="/users/firsttime" />
    </Route>
  </Router>
), document.getElementById('app'));
