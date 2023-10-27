import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  // give Provider the store so they can stick it on context
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
