import React, { useState, useRef } from "react";
import Image from "../../../assets/images/space.png";
import SpaceVideo from "../../../assets/video/intro.mp4";
import { MdOutlinePlayCircle } from "react-icons/md";

function Space() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <section className="py-6 sm:py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 md:space-y-4">
                <h2 className="font-kufam text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  Learn More About Who We Are in Real Estate
                </h2>
                <p className="text-link text-xs sm:text-sm md:text-base lg:text-lg font-sans3">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolore.
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <img
                  src={Image}
                  alt="Space Exploration"
                  className="rounded-[5px] shadow-md w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 md:space-y-4">
                <h2 className="font-kufam text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  We're reinventing the space
                </h2>
                <p className="text-link text-xs sm:text-sm md:text-base lg:text-lg font-sans3">
                  Learn about our ongoing and future space missions, pushing the
                  boundaries of human exploration.
                </p>
                <div>
                  <h2 className="font-kufam text-primary text-lg sm:text-xl md:text-2xl font-semibold">Full Services</h2>
                  <p className="text-[#7D7D7D] font-sans3 font-normal text-xs sm:text-sm md:text-base lg:text-lg">
                    Interactively procrastinate high-payoff content without
                    backward-compatible data.
                  </p>
                </div>
                <div>
                  <h2 className="font-kufam text-primary text-lg sm:text-xl md:text-2xl font-semibold">Safe Investments</h2>
                  <p className="text-[#7D7D7D] font-sans3 font-normal text-xs sm:text-sm md:text-base lg:text-lg">
                    Interactively procrastinate high-payoff content without
                    backward-compatible data.
                  </p>
                </div>
              </div>
              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] md:w-1/2 mt-4 md:mt-0 rounded-[5px] overflow-auto relative">
                <video
                  className="h-full w-full object-cover"
                  src={SpaceVideo}
                  loop
                  muted
                  playsInline
                  ref={videoRef}
                >
                  Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 sm:p-2 md:p-3 lg:p-4"
                    onClick={handlePlayClick}
                  >
                    <MdOutlinePlayCircle className="text-xl sm:text-2xl md:text-3xl text-primary" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Space;
