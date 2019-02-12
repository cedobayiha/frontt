import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from "react-redux"
import { createStore } from "redux"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let reducer = function(state, action) {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
  if (action.type === "set-message") {
    return { ...state, message: action.message };
  }
  return state;
};

const store = createStore(
  reducer,
  {}, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
