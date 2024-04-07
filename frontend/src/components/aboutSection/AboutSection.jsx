import React from 'react';
import bannerImage from '../../assets/Images/online-education_52683-6972.jpg';
import OneIcon from '../../assets/Images/8.png'

const AboutSection = () => {
    return (
        <section className="about-section-3 py-12 md:py-16 lg:py-20">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <div className="about-img">
          <img
            src={bannerImage}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="md:w-1/2 mt-5 md:mt-0">
        <div className="about-content">
          <div className="mb-8">
           
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-4xl sm:leading-none md:text-4xl lg:text-6xl">
              About Infi Notes
            </h2>
          </div>
          <div className="about-features">
            
            <div className="mb-6">
              <div className="feature-item flex flex-col md:flex-row items-center">
                <div className="feature-icon icon-bg-1 icon-radius mr-4 md:mr-6 mb-4 md:mb-0">
                  <img src={OneIcon} alt="" />
                </div>
                <div className="feature-text">
                  <h4 className="font-bold text-base md:text-lg">
                    One Stop Solutions
                  </h4>
                  <p className="text-sm md:text-base">
                    We are helping hands and provide authentic notes, PTU solved
                    PYQ, MST solved PYQ, markings &amp; syllabus and other study
                    materials for FREE!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default AboutSection;
