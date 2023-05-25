import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import counterReducer from "./store/reducers/counter.js";
import resultReducer from "./store/reducers/Result.js";


const rootReducer = combineReducers({
  ctr: counterReducer,
  resR: resultReducer
});
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>


);
