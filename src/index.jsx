import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from 'material-ui/CssBaseline';
import { createMuiTheme } from 'material-ui/styles';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'styles/styles.scss';

import store from './store';

import Homepage from './containers/Homepage';
import Header from './components/Header';
import Signup from './containers/Signup';
import NotFound from './components/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <CssBaseline />
              <Header />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/signup" component={Signup} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
