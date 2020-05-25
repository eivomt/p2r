import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDSdeyTKdjO2K_-RnFxS3cLlkzBDpscb6o",
  authDomain: "portfolio-87c23.firebaseapp.com",
  databaseURL: "https://portfolio-87c23.firebaseio.com",
  projectId: "portfolio-87c23",
  storageBucket: "portfolio-87c23.appspot.com",
  messagingSenderId: "252655341556",
  appId: "1:252655341556:web:098c7e840aa1350ce4b3a1",
  measurementId: "G-LZZ2WB07XC"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
