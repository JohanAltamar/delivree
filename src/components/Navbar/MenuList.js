import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const MenuList = ({ sideMenu, handleToggleMenu }) => {
  const { userInfo } = useSelector((state) => state);
  const { logged } = userInfo;

  const handleCloseMenu = () => {
    if (sideMenu) handleToggleMenu();
  };

  return (
    <nav className={`${sideMenu ? "navbar__side-menu-list" : "wide"}`}>
      <Link to="/" onClick={handleCloseMenu}>
        <li>Inicio</li>
      </Link>
      <Link to="/menu" onClick={handleCloseMenu}>
        <li>Menu</li>
      </Link>
      <Link to="/cart" onClick={handleCloseMenu}>
        <li>Carrito</li>
      </Link>
      <Link to="/login" onClick={handleCloseMenu}>
        <li>{logged ? "Perfil" : "Ingreso"}</li>
      </Link>
    </nav>
  );
};

export default MenuList;

MenuList.propTypes = {
  sideMenu: PropTypes.bool,
};
