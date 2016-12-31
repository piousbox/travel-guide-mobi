import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Redirect } from 'react-router'

// Global Styles
import './assets/styles/bootstrap.css'
import './assets/styles/index.less'

import App from './src/app'
import Nav from './src/nav'
import { About, Terms } from './src/pages'
import { Firsttime, Login } from './src/users'
import { Index as TPIndex, EditMany } from './src/travel-plans'
import { Dashboard } from './src/manager'
import { Show as EventsShow, Edit as EventsEdit } from './src/events'

render((
  <Router history={hashHistory}>
    <Route component={Nav}>
      <Route path="/pages/about" component={About} />
      <Route path="/pages/terms" component={Terms} />

      <Route path="/users/firsttime" component={Firsttime} />
      <Route path="/users/login" component={Login} />

      <Route path="/travel-plans" component={TPIndex} />
      <Route path="/travel-plans/edit" component={EditMany} />

      <Route path="/cities/:cityName/from/:from/until/:until" component={TPIndex} />

      <Route path="/manager" component={Dashboard} />

      <Route path="/events/:id" component={EventsShow} />
      <Route path="/events/:id/edit" component={EventsEdit} />

      <Redirect from="/" to="/users/firsttime" />
    </Route>
  </Router>
), document.getElementById('app'));
