// Public routing
import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import { Route, Switch } from 'react-router-dom'

import Authentication from './authentication'

const Public = (props) => {
  return (
    <Switch>
      <Route path="/" component={() => <Authentication {...props} />} />
    </Switch>
  )
}

Public.propTypes = {
  toggleLoggedIn: PropTypes.func,
}

Public.defaultProps = {
  toggleLoggedIn: noop,
}


export default Public
