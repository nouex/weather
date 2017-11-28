import 'bootstrap/dist/css/bootstrap.css';
import "./css/icons.css"
import React from 'react';
import ReactDOM from 'react-dom';
import _App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk"
import { compose, createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <_App />
  </Provider>,
  document.getElementById('root'));
