import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, Store } from "redux";
import reducer from './redux/reducer';

import { devToolsEnhancer } from 'redux-devtools-extension';

const store: Store<GameState, ChampionAction> & {
  dispatch: DispatchType
} = createStore(
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


