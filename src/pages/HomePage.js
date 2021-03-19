import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Location from "../components/Location";
import OrderTracker from "../components/Orders/Tracker";
import FeaturedProducts from "../components/Menu/FeaturedSection";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO title="Inicio" />
      <Layout>
        {/*  className="grid__content" */}
        <Hero className="grid__hero hero__container mb-4" />
        <About />
        <OrderTracker />
        <FeaturedProducts />
        <Location />
      </Layout>
    </>
  );
};

export default HomePage;
