import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SignUp extends Component {
  state = {
    value: ''
  };

  handleChange = event => {
    console.log('value', event.target.value);
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return;
  }
}

export default SignUp;
