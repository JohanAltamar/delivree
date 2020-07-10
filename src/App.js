import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {showPWAInstallBanner} from "./redux/actions"
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import PwaModal from "./components/PwaModal";

function App() {
  // const [showPWAModal, setShowPWAModal] = useState(true);
  const dispatch = useDispatch();
  const showPWAModal = useSelector(
    (state) => state.userInterface.PWAInstallBanner
  );
  const [beforeinstallpromptEventData, setEventData] = useState(false);
  //Add pwaStatus to redux
  // const [PWAStatus, setPWAStatus] = useState(false);
  var deferredPrompt;

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    setEventData(e);
  });

  function addToHomeScreen() {
    dispatch(showPWAInstallBanner(false));
    deferredPrompt = beforeinstallpromptEventData;
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          // console.log('User accepted the A2HS prompt');
        } else {
          // console.log('User dismissed the A2HS prompt');
          // setPWAStatus(choiceResult.outcome); //Could be saved to remember user choice
        }
        deferredPrompt = null;
      });
    }
  }

  return (
    <main>
      <Header />
      <Main />
      {beforeinstallpromptEventData && (
        <PwaModal
          show={showPWAModal}
          onHide={() => dispatch(showPWAInstallBanner(false))}
          installPWA={(value) => {
            if (value) {
              addToHomeScreen();
            } else {
              // setPWAStatus("dismissed");
              dispatch(showPWAInstallBanner(false));
            }
          }}
        />
      )}
    </main>
  );
}

export default App;
