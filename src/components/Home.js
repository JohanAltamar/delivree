import React from 'react'
import Hero from "./home/Hero"
import About from "./home/About"
import Featured from "./home/FeaturedProducts"
import Location from "./home/Location"
import WorkingHours from "./home/WorkingHours"
import Contact from "./home/Contact"
import CartButton from "./CartButton"
import Footer from "./Footer"
import {Helmet} from "react-helmet"

function Home() {
    return (
        <section>
            <Helmet>
                <title>Foodies restaurant</title>
                <meta name="description" content="Foodies is the first restaurant taking orders from the web page. We offer fast food, italian food, burgers, hot dogs and cocktails" />
            </Helmet>
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
