import React from 'react'
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import HeroImg from '../../../assets/images/abouthero.png';
import House from '../../../assets/images/tiny.png';

function Hero() {
  return (
    <div>
          <div
        className="min-h-screen bg-center    bg-[#FFF0E9]  flex items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          
        }}
      >
        <div className="max-w-[609px] w-full mx-auto md:mt-32 lg:ml-24">
          <div className="p-1 mb-5 bg-gradient-to-r w-fit px-5  to-[#FFB28D] from-[#F3D1C1]">
            <div className="flex items-center space-x-4">
              <img
                src={House}
                alt="tiny-house"
                className="w-6 h-6 object-contain"
              />
              <span className="font-kufam uppercase text-base sm:text-lg md:text-xl font-normal">
              about properland
              </span>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-primary font-kufam font-[700] text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            About Our Real Estate
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero