import React from 'react'
import Navbar from '../components/navBar/Navbar'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/footer/Footer'
import ContactHero from '../components/contactHero/ContactHero'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <ContactHero/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact