import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import rootReducer from 'store/reducers';
import firebase from 'firebase';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBGBMGzBB5QquSZxwXyNUaEaYUOPlPnILM',
  authDomain: 'nameste-c2647.firebaseapp.com',
  databaseURL: 'https://nameste-c2647.firebaseio.com',
  projectId: 'nameste-c2647',
  storageBucket: 'nameste-c2647.appspot.com',
  messagingSenderId: '154119087842'
};
// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false // enable/disable Firebase's database logging
};

const devTools =
  window.devToolsExtension && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension()
    : f => f;

const firebaseinstance = firebase.initializeApp(firebaseConfig);

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseinstance, config),
  devTools
)(createStore);

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, {});
export default store;
