import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const lastLocation = localStorage.getItem("last-location") || "/dashboard";

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to={lastLocation} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
