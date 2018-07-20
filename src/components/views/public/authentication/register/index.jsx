import React, { Component } from 'react'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
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
