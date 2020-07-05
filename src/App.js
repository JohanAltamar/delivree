import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import PwaModal from "./components/PwaModal";

function App({ toggleMenu }) {
  const [beforeinstallpromptEventData, setEventData] = useState(false)
  const [showPWAModal, setShowPWAModal] = useState(true);
  //Add pwaStatus to redux
  const [PWAStatus, setPWAStatus] = useState(false);
  var deferredPrompt;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    setEventData(e);
  });

  function addToHomeScreen() {
    setShowPWAModal(false);
    deferredPrompt = beforeinstallpromptEventData;
    if(deferredPrompt){
      deferredPrompt.prompt();
      deferredPrompt.userChoice
      .then(function(choiceResult){
        if (choiceResult.outcome === 'accepted') {
          // console.log('User accepted the A2HS prompt');
        }
        else {
          // console.log('User dismissed the A2HS prompt');
          setPWAStatus(choiceResult.outcome);
        }
        deferredPrompt = null;
      });
    }
  }

  return (
    <main>
      <Header />
      <Main />
      {beforeinstallpromptEventData &&
        <PwaModal
          show={showPWAModal}
          onHide={() => setShowPWAModal(false)}
          installPWA={(value) => {
            if(value){
              addToHomeScreen();
            }
            else{
              setPWAStatus("dismissed");
              setShowPWAModal(false);
            }
          }}
        />
      }
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    toggleMenu: state.toggleMenu,
  };
};

export default connect(mapStateToProps)(App);
