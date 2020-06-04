import React from "react";
import BurgerIcon from "./header/BurgerMenu";
import { connect } from "react-redux";
import { toggleMenu } from "../redux/actions";

function Header({ toggleMenu }) {
  return (
    <header id="header">
      <div id="brand-name">Foodies</div>
      <div id="burger-icon" onClick={() => toggleMenu()}>
        <BurgerIcon />
      </div>
    </header>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu() {
      dispatch(toggleMenu());
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
