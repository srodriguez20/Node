import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './routes/Home.js'
import Store from './routes/Store.js'

const app= document.getElementById('app')
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact strict component={Home}/>
      <Route path='/store' exact strict component={Store}/>
    </Switch>
  </BrowserRouter>
  , app)
