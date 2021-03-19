import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import types from "../../redux2/types";
import MenuButton from "../Buttons/MenuButton";
import MenuList from "./MenuList";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  const dispatch = useDispatch();
  const { toggleMenu } = useSelector((state) => state.ui);

  const handleToggleMenu = () => {
    dispatch({ type: types.UI__TOGGLE_MENU });
  };

  const handleScroll = () => {
    setShadow(window.pageYOffset > 40);
  };

  //scroll subscription
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`grid__navbar grid__padding navbar__wrapper ${
        shadow ? "navbar__shadow" : ""
      }`}
    >
      <Link to="/">
        <h1 className="navbar__brand-title">
          {process.env.REACT_APP_Restaurant_Name || "Delivree"}
        </h1>
      </Link>
      <nav className="navbar__sections">
        <MenuList />
      </nav>
      <MenuButton
        className={`navbar__menu-icon ${toggleMenu ? "open" : ""}`}
        onClick={handleToggleMenu}
      />
      <SideMenu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu} />
    </header>
  );
};

export default Navbar;
