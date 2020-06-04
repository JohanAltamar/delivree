import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/Header";

function App({ toggleMenu }) {
  return (
    <>
      <Header />
      {/* <Container
        fluid
        className={clsx(toggleMenu && "red-bg")}
        style={{ height: "400px" }}
      ></Container> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    toggleMenu: state.toggleMenu,
  };
};

export default connect(mapStateToProps)(App);
