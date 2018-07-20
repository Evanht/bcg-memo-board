// Public routing
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Test = () => (
  <h1>Public routing</h1>
)

const Public = () => (
  <Switch>
    <Route path="/" component={Test} />
  </Switch>
)

export default Public
