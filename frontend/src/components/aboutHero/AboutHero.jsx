import React from "react";
import AboutImage from "../../assets/Images/admission-cell2-scaled.jpg";

const AboutHero = () => {
  return (
    <>
      <div className="bg-zinc-100">
        <div className=" relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
          <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10 ">
            <div className="text-left pt-4">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-4xl sm:leading-none md:text-4xl lg:text-6xl">
                Our Aim and Mission!
              </h2>
              <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-md md:mt-5 md:text-md lg:text-lg md:max-w-xl">
                At the core of InfiNotes is a simple yet powerful mission: to
                empower college students like you. We believe that education
                should be accessible to all..
              </p>
              <div className="mt-5 sm:flex md:mt-8"></div>
            </div>
          </div>
          <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
            <div className="relative w-full p-3 rounded  md:p-8">
              <div className="rounded-lg bg-transparent text-black w-full">
                <img src={AboutImage} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
