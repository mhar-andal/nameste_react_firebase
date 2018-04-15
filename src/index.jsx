import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { render } from 'react-dom';

import 'styles/styles.scss';

import Homepage from './components/Homepage';
import Header from './components/Header';
import Signup from './containers/Signup';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/signup" component={Signup} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
