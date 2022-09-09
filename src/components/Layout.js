import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import GetStarted from "./GetStarted"
import Services from "./Services"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
export default function Layout() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <GetStarted/>
            <Services/>
            <Testimonials/>
            <Contact/>
        </>
    )
}