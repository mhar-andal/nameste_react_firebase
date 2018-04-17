import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class SignUp extends Component {
  static propTypes = {
    classes: PropTypes.object
  };

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
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUp);
