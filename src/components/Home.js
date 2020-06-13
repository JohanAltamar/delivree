import React from 'react'
import Hero from "./home/Hero"
import About from "./home/About"
import Featured from "./home/FeaturedProducts"
import Location from "./home/Location"
import WorkingHours from "./home/WorkingHours"
import Contact from "./home/Contact"
import CartButton from "./CartButton"
import Footer from "./Footer"

function Home() {
    return (
        <section>
            <Hero />
            <About />
            <Featured/>
            <Location />
            <WorkingHours/>
            <Contact/>
            <CartButton id="cart-floating-button-home"/>
            <Footer/>
        </section>
    )
}

export default Home
