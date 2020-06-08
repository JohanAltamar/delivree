import React from 'react'
import Hero from "./home/Hero"
import About from "./home/About"
import Featured from "./home/FeaturedProducts"
import Location from "./home/Location"

function Home() {
    return (
        <section>
            <Hero />
            <About />
            <Featured/>
            <Location />
        </section>
    )
}

export default Home
