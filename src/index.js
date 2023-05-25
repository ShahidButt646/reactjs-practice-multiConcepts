import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import counterReducer from "./store/reducers/Counter.js";
import resultReducer from "./store/reducers/Result.js";
import "./index.css";

const rootReducer = combineReducers({
  ctr: counterReducer,
  resR: resultReducer,
});
const store = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
