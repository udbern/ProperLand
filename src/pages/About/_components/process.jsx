import React from "react";

function Process() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-4">
          <h2 className="font-sans3 text-center mb-5 uppercase text-primary leading-relaxed border-x-2 px-2 border-primary w-fit mx-auto font-normal text-base sm:text-lg md:text-xl">
            <span className="text-secondary">0 2</span> Process
          </h2>
          <p className="text-primary text-center capitalize text-2xl sm:text-3xl lg:text-4xl font-bold font-kufam">
            our main focus
          </p>
        </div>

        <div className="mt-10 p-4 sm:p-8 font-sans">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Statistics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 w-16 h-16 mx-auto">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    Planning stage
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    High level overviews. Approaches overall value proposition.
                    Organically grow the holistic world view of disruptive
                    innovation.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">1,200</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16 mx-auto">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-gray-800">Revenue</p>

                  <p className="text-sm text-gray-500 mt-2">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">$50,000</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 w-16 h-16 mx-auto">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-gray-800">Issues</p>

                  <p className="text-sm text-gray-500 mt-2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables.
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
