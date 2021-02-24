import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import OrderTracker from '../components/Orders/Tracker'

const HomePage = () => {
  return (
    < >
      <Hero className="grid__hero hero__container"/>
      <Layout> {/*  className="grid__content" */}
        <About /> 
        <OrderTracker />
      </Layout>
    </>
  )
}

export default HomePage
