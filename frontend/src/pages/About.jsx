import React from 'react'
import Navbar from '../components/navBar/Navbar'
import AboutQuote from '../components/aboutQote/AboutQuote'
import AboutMain from '../components/aboutMain/AboutMain'
import WhatWeDo from '../components/whatwedo/WhatWeDo';
import AboutHero from '../components/aboutHero/AboutHero';
import Footer from '../components/footer/Footer'
import AboutSection from '../components/aboutSection/AboutSection';

const About = () => {
  return (
    <>
    <Navbar/>
    <AboutMain/>
    <AboutSection/>
    <AboutHero/>
    <WhatWeDo/>
    <AboutQuote/>
    <Footer/>
    </>
  )
}

export default About