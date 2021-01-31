import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, } from "redux";
import {default as reducer} from './redux/reducer/reducer'

import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(
  reducer,devToolsEnhancer({})
);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


