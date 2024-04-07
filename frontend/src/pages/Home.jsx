import React from 'react'
import Navbar from '../components/navBar/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import HeroBottom from '../components/heroBottom/HeroBottom'
import WhatWeDoHome from '../components/whatwedo/WhatWeDoHome.jsx';
import StudyMaterial from '../components/studymaterial/StudyMaterial';
import Testimonial from '../components/testimonial/Testimonial.jsx'
import Mentor from '../components/mentor/Mentor';
import Footer from '../components/footer/Footer';


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HeroBottom/>
    <About/>
    <WhatWeDoHome/>
    <StudyMaterial />
    <Mentor/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home