import React from 'react'
import Hero from "./home/Hero"
import About from "./home/About"
import Featured from "./home/FeaturedProducts"

function Home() {
    return (
        <section>
            <Hero />
            <About />
            <Featured/>
        </section>
    )
}

export default Home
