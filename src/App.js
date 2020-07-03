import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App({ toggleMenu }) {
  var deferredPrompt;
  window.addEventListener('beforeinstallprompt', function (e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    showAddToHomeScreen();
  });

  function showAddToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt");
    a2hsBtn.style.display = "block";
    a2hsBtn.addEventListener("click", addToHomeScreen);
  }

  function addToHomeScreen() {
   var a2hsBtn = document.querySelector(".ad2hs-prompt");
   // hide our user interface that shows our A2HS button
   a2hsBtn.style.display = 'none';
   // Show the prompt
   deferredPrompt.prompt();
   // Wait for the user to respond to the prompt
   deferredPrompt.userChoice .then(function(choiceResult){
     if (choiceResult.outcome === 'accepted') {
       console.log('User accepted the A2HS prompt');
     }
     else {
       console.log('User dismissed the A2HS prompt');
     }
     deferredPrompt = null;
  });
}

  return (
    <main>
      <Header />
      <Main />
      <button className="ad2hs-prompt" style={{position:"absolute", display:"none", top:"50%", left:"50%"}}>Instalar</button>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    toggleMenu: state.toggleMenu,
  };
};

export default connect(mapStateToProps)(App);
