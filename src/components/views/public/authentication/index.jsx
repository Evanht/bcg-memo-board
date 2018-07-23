import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import { Route, Switch } from 'react-router-dom'
import { Flex } from 'grid-styled'
import styled from 'styled-components'

import Login from './login'
import Register from './register'

const AuthenticationWrapper = styled(Flex)`
  background: #F7F7F7;
  height: 100vh;
`

const Authentication = props => (
  <AuthenticationWrapper justifyContent="center" alignItems="center" p={4} >
    <Switch>
      <Route path="/login" component={() => <Login {...props} />} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Register} />
    </Switch>
  </AuthenticationWrapper>
)

Authentication.propTypes = {
  toggleLoggedIn: PropTypes.func,
}

Authentication.defaultProps = {
  toggleLoggedIn: noop,
}

export default Authentication
