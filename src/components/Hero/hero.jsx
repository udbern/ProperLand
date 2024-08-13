import React from "react";
import HeroImg from "../../assets/images/hero.png";
import House from "../../assets/images/vector.svg";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

function Hero() {
  return (
    <>
      <div
        className="min-h-screen bg-[#FFF0E9] flex items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[609px] w-full mx-auto mt-32 lg:ml-24">
          <div className="p-1 mb-5 bg-gradient-to-r w-fit px-5  to-[#FFB28D] from-[#F3D1C1]">
            <div className="flex items-center space-x-4">
              <img
                src={House}
                alt="tiny-house"
                className="w-6 h-6 object-contain"
              />
              <span className="font-kufam text-base sm:text-lg md:text-xl font-normal">
                Real Estate Agency
              </span>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-primary font-kufam font-[700] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Find the perfect place to Live with your family.
            </h3>
            <p className="text-link mt-4 text-base font-sans3 font-normal sm:text-lg md:text-xl leading-relaxed">
              Distinctively re-engineer revolutionary meta-services and premium
              architectures. Intrinsically incubate.
            </p>
            <button
              type="button"
              className="px-4 py-2 sm:px-5 sm:py-2.5 mt-6 sm:mt-8 bg-[#ffffff]  flex items-center justify-center mx-auto lg:mx-0 font-kufam font-[500] text-lg sm:text-xl text-primary tracking-wider rounded outline-none transition-all hover:bg-primary hover:text-white"
            >
              Explore Property{" "}
              <IoArrowForwardCircleSharp className="ml-2 text-secondary h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
