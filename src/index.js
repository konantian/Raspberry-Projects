import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from "react-router";
import Routes from "./Routes";
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import history from './history';
import allReducers from './reducers';

import * as serviceWorker from './serviceWorker';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>,
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
