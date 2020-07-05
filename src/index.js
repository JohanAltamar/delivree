import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import { throttle } from "lodash";

import "bootstrap/dist/css/bootstrap.min.css";
import { saveState } from "./localStorage";

store.subscribe(
  throttle(() => {
    saveState({
      ...store.getState(),
      userInterface: { toggleMenu: false, PWAInstallBanner: false },
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
