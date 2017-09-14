import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import _App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducer"

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <_App />
  </Provider>,
  document.getElementById('root'));
