import React from 'react'

const AboutQuote = () => {
  return (
    <div className='py-12'>
    <section className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
  <div className="text-center">
    <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 italic">
      <p className="mb-4 md:mb-6 lg:mb-8">
        "Success is the sum of small efforts, repeated day in and day out"
      </p>
      <footer className="text-red-600">
        <cite className="font-semibold">John Christopher</cite>
      </footer>
    </blockquote>
  </div>
</section>
</div>
  )
}

export default AboutQuote