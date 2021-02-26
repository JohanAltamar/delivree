import React from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
