import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <main className="grid__content">{children}</main>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
