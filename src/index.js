import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { throttle } from "lodash";

import "bootstrap/dist/css/bootstrap.min.css";
// import { saveState } from "./localStorage";
import store from "./redux2/store";
import App from "./App";

import './styles/main.scss';


// store.subscribe(
//   throttle(() => {
//     saveState({
//       ...store.getState(),
//       userInterface: { ...store.getState().userInterface, toggleMenu: false },
//     });
//   }, 1000)
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
