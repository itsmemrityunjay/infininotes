import React from 'react'
import { Link } from 'react-router-dom'
import Leave from '../../assets/Images/leaves_3.png'

const AboutMain = () => {
  return (
    <div className="pt-12">
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20" style={{backgroundImage: `url(${Leave})`,backgroundRepeat:'no-repeat',backgroundPosition:'center'} }>

  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">
      <ul className="flex justify-center space-x-6 md:space-x-8 lg:space-x-10 mb-8 md:mb-10 lg:mb-12">
        <li>
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            Home 
          </Link>
        </li>
        <p>/</p>
        <li>
          <Link
            to="/about"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            About Us
          </Link>
        </li>
      </ul>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 md:mb-6 lg:mb-8">
        About Us
      </h1>
    </div>
  </div>
</section>
</div>

  )
}

export default AboutMain