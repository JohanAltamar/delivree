import React from "react";
import MenuList from "./MenuList";

const SideMenu = ({ toggleMenu, handleToggleMenu }) => {
  return (
    <>
      <div
        className={`navbar__side-menu-container ${toggleMenu ? "active" : ""}`}
      >
        <div
          className={`navbar__side-menu-container-closer ${
            toggleMenu ? "active" : ""
          }`}
          onClick={handleToggleMenu}
        >
          {/** side menu closer area */}
        </div>
      </div>
      <div className={`navbar__side-menu ${toggleMenu ? "active" : ""}`}>
        <MenuList sideMenu handleToggleMenu={handleToggleMenu} />
      </div>
    </>
  );
};

export default SideMenu;
