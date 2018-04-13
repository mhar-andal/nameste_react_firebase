import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import 'styles/styles.scss';

import Homepage from './components/Homepage';
import Header from './components/Header';
import Signup from './components/Signup';
import NotFound from './components/NotFound';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  render() {
    return (
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
    );
  }
}

render(<App />, document.getElementById('root'));
