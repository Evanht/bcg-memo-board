// Put Public/Private routing here. To do it without redux
// here we will have a component which handles authentication
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import api from 'service/api'
import Public from './public'
import Private from './private'

const AppWrapper = styled.div`
  background: red;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  componentDidMount() {
    api.authenticate()
      .then(({ accessToken }) => {
        api.passport.verifyJWT(accessToken)
          .then(response => response.userId && this.setState({
            isLoggedIn: true,
          }))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(`Not logged in mate: ${err}`))
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() => {
              if (this.state.isLoggedIn) {
                return <Private />
              }
              return <Public />
            }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
