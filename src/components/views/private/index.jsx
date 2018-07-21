// Private routing
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Ideas from './ideas'

const Private = () => (
  <Switch>
    <Route path="/" component={Ideas} />
  </Switch>
)

export default Private
