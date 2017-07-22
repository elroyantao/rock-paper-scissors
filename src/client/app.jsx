import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'


import Home from '../shared/components/presentation/Home/Home'
import Hello from '../shared/components/presentation/Hello/Hello'
import Header from '../shared/components/presentation/Header/Header'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/hello" component={Hello} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}
