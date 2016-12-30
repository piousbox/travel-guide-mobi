import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './src/app';
import Nav from './src/components/nav';

// Global Styles
import './assets/styles/bootstrap.css';
import './assets/styles/index.less';

// Components
import Page1 from './src/components/page1.js';
import Page2 from './src/components/page2.js';
import About from './src/components/about';
import UsersFirsttime from './src/components/users-firsttime';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
      <Route path="/pages/page1" component={Page1}/>
      <Route path="/pages/page2" component={Page2}/>
      <Route path="/pages/about" component={About} />
      <Route path="/users/firsttime" component={UsersFirsttime} />
    </Route>
  </Router>
), document.getElementById('app'));
