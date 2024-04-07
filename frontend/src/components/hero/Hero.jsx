import React from 'react';
import { Link } from 'react-router-dom';
import Hero1 from "../../assets/Images/Hero.png";
import { MacbookScroll } from "../ui/macbook-scroll.tsx";

const Hero = () => {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
           <p className="max-w-md mt-3 text-base text-black-500 sm:text-xl md:mt-5 md:text-2xl md:max-w-lg lg:text-4xl">Start Your Journey to Academic Excellence Today</p>
        }
        badge={<Badge />}
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
};

const Badge = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      {/* <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10 " >
        <div className="text-left pt-4">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-4xl sm:leading-none md:text-4xl lg:text-6xl">
            Your Ultimate  
            <span className="font-bold text-red-500 mx-2">Learning Resource</span>
          </h2>
          <p className="max-w-md mt-3 text-base text-black-500 sm:text-xl md:mt-5 md:text-2xl md:max-w-lg lg:text-4xl">Start Your Journey to Academic Excellence Today</p>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-md md:mt-5 md:text-md lg:text-lg md:max-w-xl">
            Join the Infinotes community today and embark on a journey of learning and growth. Unlock the doors to endless possibilities and let us be your partner in education.
          </p>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/courses"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-grey-600 focus:outline-none focus:shadow-outline-grey md:py-2 lg:py-4 lg:text-lg md:px-10"
              >
                Start Learning
              </Link>
            </div>
            <div className="rounded-md shadow lg:mx-2 md:mx-2 sm:mx-0 lg:mt-2 md:mt-2 sm:mt-8">
              <Link
                to="/courses"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-grey transition duration-150 ease-in-out bg-white-500 border border-transparent rounded-md hover:bg-grey-600 focus:outline-none focus:shadow-outline-grey md:py-2 lg:py-4 lg:text-lg md:px-10"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
          {/* <div className="rounded-lg bg-transparent text-black w-full">
            <img src={Hero1} alt=""/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
