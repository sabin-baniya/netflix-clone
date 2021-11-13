import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './global-styles'
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/FirebaseContext'

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);