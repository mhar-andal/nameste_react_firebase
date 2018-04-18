import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { createUser } from 'store/auth/actions';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    flexGrow: 1,
    display: 'grid',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    marginTop: '20%',
    width: 400,
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // display: 'block',
  },
});

class SignUp extends Component {
  static propTypes = {
    classes: PropTypes.object
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = (e, name) => {
    e.preventDefault();
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state.email, this.state.password, this.props.firebase);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h1
            style={{
            color: 'black',
            float: 'left'
          }}
          >Sign up
          </h1>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="firstName"
              label="First Name"
              className={classes.textField}
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e, 'firstName')}
              margin="normal"
              fullWidth
            /><TextField
              id="lastName"
              label="Last Name"
              className={classes.textField}
              value={this.state.lastName}
              onChange={(e) => this.handleChange(e, 'lastName')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={(e) => this.handleChange(e, 'email')}
              margin="normal"
              fullWidth
              type="email"
            />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              value={this.state.password}
              onChange={(e) => this.handleChange(e, 'password')}
              margin="normal"
              fullWidth
              type="password"
            />
            <TextField
              id="confirmpassword"
              label="Confirm Password"
              className={classes.textField}
              value={this.state.confirmPassword}
              onChange={(e) => this.handleChange(e, 'confirmPassword')}
              margin="normal"
              fullWidth
              type="password"
            />
            <Button type="submit" variant="raised" color="primary" className={classes.button} fullWidth>
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createUser,
}, dispatch);

export default compose(
  withFirebase,
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignUp);
