import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main"

function App({ toggleMenu }) {
  return (
    <>
      <Header />
      <Main/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    toggleMenu: state.toggleMenu,
  };
};

export default connect(mapStateToProps)(App);
