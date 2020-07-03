import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App({ toggleMenu }) {
  window.onload = (e) => {
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
    });
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  }
  return (
    <main>
      {process.env.REACT_APP_HOLA}
      <Header />
      <Main />
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    toggleMenu: state.toggleMenu,
  };
};

export default connect(mapStateToProps)(App);
