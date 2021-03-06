import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './index.css';
// import Dashboard from './components/dashboard/Dashboard'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { createStore, combineReducers } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import conf from './config/conf'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Stories from './components/stories/Stories'
import Pieces from './components/pieces/Pieces'
import Bits from './components/bits/Bits'
import About from './components/about/About'

const fbConfig = conf;

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // attachAuthIsReady: true
}

// console.log(fbConfig)

firebase.initializeApp(fbConfig)
firebase.firestore()

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

// Setup react-redux so that connect HOC can be used
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* <Dashboard /> */}
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stories">
              <Stories />
            </Route>
            <Route path="/pieces">
              <Pieces />
            </Route>
            <Route path="/bits">
              <Bits />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>

      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



