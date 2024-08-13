import React, { useState } from "react";

import IntroVideo from "../../assets/video/intro.mp4";
function Intro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-10 bg-[#F2F2F2]">
        <div className="flex-1 md:flex-[2] p-5 md:p-10 space-y-2">
          <h2 className="font-sans3 text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-lg md:text-xl">
            <span className="text-secondary">01</span> PROPERLAND INTRO
          </h2>
          <h3 className="text-primary font-kufam text-3xl md:text-4xl font-bold">
            Buying & Selling Property In An Easy Way
          </h3>
          <p className="text-link font-normal text-base md:text-xl">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi.
          </p>
        </div>
        <div className="flex-1 relative h-64 md:h-auto">
          <video
            className="h-full w-full object-cover"
            src={IntroVideo}
            loop
            muted
            playsInline
            ref={(el) => {
              if (el && isPlaying) {
                el.play();
              }
            }}
          >
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 md:p-4"
              onClick={handlePlayClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-12 md:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Intro;
