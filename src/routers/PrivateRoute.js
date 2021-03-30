import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, useLocation } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname?.includes("/dashboard")) {
      localStorage.setItem("last-location", pathname);
    }
  }, [pathname]);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
