// Public routing
import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import { Route, Switch } from 'react-router-dom'

import Authentication from './authentication'

const Public = props => (
  <Switch>
    <Route path="/" component={() => <Authentication {...props} />} />
    {/* Any other public routing would go here - like About page, Team page, etc. */}
  </Switch>
)

Public.propTypes = {
  toggleLoggedIn: PropTypes.func,
}

Public.defaultProps = {
  toggleLoggedIn: noop,
}


export default Public
