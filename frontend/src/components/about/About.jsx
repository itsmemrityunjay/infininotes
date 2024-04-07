import React from 'react'
import Count from "../counters/Count1"

function About() {
  return (
    <>
    <div className="text-center max-w-6xl mx-auto ">
  <p className="my-1 text-sm tracking-widest text-grey-500 uppercase pt-8">
  About Infinotes
  </p>
  <h1 className="my-3 text-3xl font-bold tracking-tight text-red-800 md:text-5xl dark:text-red-500">
  Fueling Your Educational Journey
  </h1>
  <div>
    <p className="max-w-2xl mx-auto my-2 text-base text-gray-600 md:leading-relaxed md:text-md dark:text-gray-600">
    Our mission is to democratize education, making it accessible to all. With a vast library of textbooks, comprehensive notes, and a wealth of question papers, we empower you to learn at your own pace, on your terms.
    </p>
  </div>
  <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row py-8">
    <span
      className="inline-block w-auto min-w-[250px] px-6 py-9 transition-all rounded-md shadow-xl text-black-700 sm:w-auto text-8xl"
      href=""
    >
      <Count/>
    </span>

    <span
      className="inline-block w-auto min-w-[250px] px-6 py-9 transition-all rounded-md shadow-xl text-black-700 sm:w-auto text-8xl"

    >
      <Count/>
     
    </span>
    <span
      className="inline-block w-auto min-w-[250px] px-6 py-9 transition-all rounded-md shadow-xl text-black-700 sm:w-auto text-8xl"

    >
      <Count/>
     
    </span>
    
  </div>
</div>
</>
  )
}

export default About