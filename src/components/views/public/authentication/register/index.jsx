import React, { Component } from 'react'
// TODO implement registration page - at moment make accounts via curl.

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: undefined,
      password: undefined,
    }
  }

  render() {
    return (
      <div>
        <h1>Register page</h1>
      </div>
    )
  }
}

export default Register
