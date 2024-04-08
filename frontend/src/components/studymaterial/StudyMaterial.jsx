import React from "react";
import Im1 from "../../assets/Images/1.png";
import Im2 from "../../assets/Images/2.png";
import Im3 from "../../assets/Images/3.png";
import Im4 from "../../assets/Images/4.png";
import Im5 from "../../assets/Images/5.png";
import Im6 from "../../assets/Images/6.png";
import Im7 from "../../assets/Images/7.png";
import { Link } from "react-router-dom";


const StudyMaterial = () => {
  return (
    <>
      <section className="px-4 py-8 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto">
          <div className="text-center py-8">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-lg sm:leading-none md:text-xl lg:text-3xl">
              " Programmatic Study
              <span className="font-bold text-red-500 px-2">Adventures ".</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Link
                  to="/courses"
                  className="block"
                >
                  <div className="p-4">
                    <img src={Im1} alt="" className="w-16 mx-auto" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      SEMESTER - 1
                    </h4>
                  </div>
                </Link>
              </div>
            </div>

            {/*  */}

            <div className="w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  href="https://www.cgcassignment.com/engineering"
                  className="block"
                >
                  <div className="p-4">
                    <img src={Im2} alt="" className="w-16 mx-auto" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      SEMESTER - 2
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            {/*  */}

            <div className="w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  href="https://www.cgcassignment.com/engineering"
                  className="block"
                >
                  <div className="p-4">
                    <img src={Im3} alt="" className="w-16 mx-auto" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      SEMESTER - 3
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            {/*  */}

            <div className="w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  href="https://www.cgcassignment.com/engineering"
                  className="block"
                >
                  <div className="p-4">
                    <img src={Im4} alt="" className="w-16 mx-auto" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      SEMESTER - 4
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            {/*  */}

            <div className="w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  href="https://www.cgcassignment.com/engineering"
                  className="block"
                >
                  <div className="p-4">
                    <img src={Im5} alt="" className="w-16 mx-auto" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      SEMESTER - 5
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            {/*  */}

            <div className="w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  href="https://www.cgcassignment.com/engineering"
                  className="block"
                >
                  <div className="p-4">
                    <img src={Im6} alt="" className="w-16 mx-auto" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      SEMESTER - 6
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            {/*  */}

            <div className="w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  href="https://www.cgcassignment.com/engineering"
                  className="block"
                >
                  <div className="p-4">
                    <img src={Im7} alt="" className="w-16 mx-auto" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      SEMESTER - 7
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            {/*  */}

            {/* Repeat this block for each category */}
          </div>
        </div>
      </section>

    </>
  );
};

export default StudyMaterial;