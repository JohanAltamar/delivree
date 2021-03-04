import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Redirect, Route, useHistory, useLocation } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname?.includes("/dashboard/")) {
      localStorage.setItem("last-location", pathname);
    }
    const lastLocation = localStorage.getItem("last-location");
    if (isAuthenticated && lastLocation) {
      history.replace(lastLocation);
    }
  }, []);

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
