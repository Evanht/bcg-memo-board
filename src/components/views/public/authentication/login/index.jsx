import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { noop } from 'lodash'

import api from 'service/api'
import { Inputs, Typography, Button, Icon } from 'components/ui'

const { Text } = Inputs
const { Headers } = Typography

const StyledForm = styled.form`
  box-shadow: ${({ theme }) => theme.shadow.flat};
  padding: 20px;
  border-radius: 2px;
  width: 400px;
`
const FormItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
const FormHeader = styled(Headers.H2)`
  text-align: center
`

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state

    api.authenticate({
      strategy: 'local',
      email,
      password,
    })
      .then(({ accessToken }) => {
        api.passport.verifyJWT(accessToken)
          .then((response) => {
            console.log('RESPONSE', response)
            console.log(this.props.toggleLoggedIn)
            response.userId && this.props.toggleLoggedIn()
          })
          .catch(err => console.log('Error:', err))
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormHeader> Welcome back! </FormHeader>
        <FormItem>
          <Text
            onChange={e => this.setState({
             email: e.target.value,
            })}
            placeholder="email"
            htmlType="email"
            prefix={<Icon type="mail" />}
          />
        </FormItem>
        <FormItem>
          <Text
            onChange={e => this.setState({
             password: e.target.value,
            })}
            placeholder="********"
            type="password"
            prefix={<Icon type="lock" />}
          />
        </FormItem>
        <FormItem>
          <Button fullWidth htmlType="submit" primary>
            Login
          </Button>
        </FormItem>
      </StyledForm>
    )
  }
}

Login.propTypes = {
  toggleLoggedIn: PropTypes.func,
}

Login.defaultProps = {
  toggleLoggedIn: noop,
}

export default Login
