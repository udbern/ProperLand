import React from "react";

function Process() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 mt-14 mb-14">
        <div className="space-y-4">
          <h2 className="font-sans3 text-start md:text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl md:mx-auto">
            <span className="text-secondary">0 2</span> Process
          </h2>
          <p className="text-primary text-start capitalize md:text-center text-3xl lg:text-4xl font-bold font-kufam">
            our main focus
          </p>
        </div>
        <div className=" p-4 sm:p-8 font-sans">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 text-center">
              Statistics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-center  rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 mx-auto">
                  
                </div>
                <div className="mt-4 text-center">
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                  Planning stage
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">1,200</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 mx-auto">
                  <svg
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Revenue
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    metus mi consectetur felis turpis vitae ligula.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">$50,000</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 mx-auto">
                  <svg
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Issues
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    metus mi consectetur felis turpis vitae ligula.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
