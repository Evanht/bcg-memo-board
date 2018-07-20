// Private routing
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Test = () => (
  <h1>Private routing</h1>
)

const Private = () => (
  <Switch>
    <Route path="/" component={Test} />
  </Switch>
)

export default Private
