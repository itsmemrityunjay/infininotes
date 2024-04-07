import React, { useState } from 'react';

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [
        {
        "id":3201,
        "name":"Titan W3",
        "price":7000,
        "details":"This is a very valuable wear product xyzz",
        "image":"https://www.bettervision.in/cdn/shop/products/front_8cc1c8f2-e945-4000-a534-187ba83d6829.jpg?v=1628237251"
        },
        {
            "id":3203,
            "name":"Fast Track",
            "price":3000,
            "details":"This is a very average wear product xyzz",
            "image":"https://sslimages.shoppersstop.com/sys-master/images/he3/hae/27150024540190/WFTNP1474SM01_NoColour.jpg_2000Wx3000H"
        },
  ];

  const handlePrevClick = () => {
    setActiveSlide(activeSlide === 1 ? slides.length : activeSlide - 1);
  };

  const handleNextClick = () => {
    setActiveSlide(activeSlide === slides.length ? 1 : activeSlide + 1);
  };

  return (
    <div className="bg-teal-100 h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto relative">
        {/* Slides */}
        {slides.map((slide) => (
          <div key={slide} className={slide === activeSlide ? 'block' : 'hidden'}>
            {/* Content for each slide */}
            Slide {slide.detail}
          </div>
        ))}
        {/* Prev/Next Arrows */}
        <div className="absolute inset-0 flex">
          <div className="flex items-center justify-start w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              onClick={handlePrevClick}
            >
              ←
            </button>
          </div>
          <div className="flex items-center justify-end w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -mr-6"
              onClick={handleNextClick}
            >
              →
            </button>
          </div>
        </div>
        {/* Buttons */}
        <div className="absolute w-full flex items-center justify-center px-4">
          {slides.map((slide) => (
            <button
              key={slide}
              className={`mx-2 w-4 h-4 rounded-full focus:outline-none focus:shadow-outline ${
                slide === activeSlide ? 'bg-teal-500' : 'bg-teal-200'
              }`}
              onClick={() => setActiveSlide(slide)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
