import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Location from '../components/Location'
import OrderTracker from '../components/Orders/Tracker'
import FeaturedProducts from '../components/Menu/FeaturedSection'

const HomePage = () => {
  return (
    < >
      <Hero className="grid__hero hero__container"/>
      <Layout> {/*  className="grid__content" */}
        <About /> 
        <OrderTracker />
        <FeaturedProducts />
        <Location /> 
      </Layout>
    </>
  )
}

export default HomePage
