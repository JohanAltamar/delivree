import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const SEO = ({ title = "" }) => {
  return (
    <Helmet
      titleTemplate={`%s | ${
        process.env.REACT_APP_Restaurant_Name || "Delivree"
      }`}
    >
      <html lang="es" />
      <title>{title}</title>
      {/* <link rel="canonical" href="https://mysite.com/example" /> */}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
};
