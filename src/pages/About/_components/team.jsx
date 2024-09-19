import React from "react";
import Peter from "../../../assets/images/peter.png";
import Sam from "../../../assets/images/sam.png";
import Rose from "../../../assets/images/rose.png";
import Elena from "../../../assets/images/elena.png";
import { FaCircleArrowRight, FaFacebook, FaFacebookF } from "react-icons/fa6";
import Proland from "../../../assets/images/icons/proland.png";
import No from "../../../assets/images/icons/no.png";
import Modern from "../../../assets/images/icons/modern.png";
import Brand from "../../../assets/images/icons/brand.png";
import Tech from "../../../assets/images/icons/tech.png";
import Bitax from "../../../assets/images/icons/bitax.png";
import Target from "../../../assets/images/icons/target.png";
import Classic from "../../../assets/images/icons/classic.png";
import Build from "../../../assets/images/icons/build.png";
import { Button } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";
import { BiX } from "react-icons/bi";

function Team() {
  const data = [
    { value: "56,180", label: "In property sales" },
    { value: "99%", label: "Customer satisfaction" },
    { value: "25K+", label: "Property Transaction" },
    { value: "2,918", label: "Price Reduce" },
  ];

  const teamData = [
    { image: Peter, alt: "Peter", name: "Peter Parker" },
    { image: Elena, alt: "Elana", name: "Elena Gilberts" },
    { image: Sam, alt: "Sam", name: "Sam Parker" },
    { image: Rose, alt: "Rose", name: "Rosalina  William" },
  ];

  const brands = [
    { image: Proland, alt: "Brand" },
    { image: No, alt: "Brand" },
    { image: Modern, alt: "Brand" },
    { image: Brand, alt: "Brand" },
    { image: Tech, alt: "Brand" },
    { image: Bitax, alt: "Brand" },
    { image: Target, alt: "Brand" },
    { image: Classic, alt: "Brand" },
    { image: Build, alt: "Brand" },
  ];

  return (
    <>
      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 bg-secondary p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-6 sm:mb-0"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-kufam font-bold text-primary">
                {item.value}
              </p>
              <p className="text-link font-sans3 text-base sm:text-lg lg:text-xl font-normal text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        

        <div className=" max-w-6xl mt-20 mb-20   mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans3 text-start md:text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-sm sm:text-base md:text-lg mx-auto">
            <span className="text-secondary">0 6</span> Experts
          </h2>
          <p className="text-primary text-start md:text-center text-2xl sm:text-3xl lg:text-4xl font-bold font-kufam">
            Our Property Team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 group">
            {teamData.map((teamData, index) => (
              <div
                key={index}
                className="relative  sm:h-72 md:h-80 lg:h-[421px]  overflow-hidden rounded-[5px] w-full"
              >
                <div className="h-full max-w-full">
                <img
                  src={teamData.image}
                  alt={teamData.alt}
                  className="h-full w-full object-cover object-center"
                />
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-2 py-4 bg-white group-hover:bg-secondary duration-500  transition-all ease-in-out  bg-opacity-90">
                    <h2 className="text-primary font-kufam text-lg sm:text-xl lg:text-2xl font-semibold">{teamData.name}</h2>
                    <p className="font-sans3 group-hover:text-primary text-secondary flex items-center justify-between font-normal text-sm sm:text-base lg:text-xl">
                      <span>land seller</span>
                      <span className="flex items-center space-x-2">
                        <FaFacebookF className="text-primary text-base sm:text-lg lg:text-xl" />
                        <BsInstagram className="text-primary text-base sm:text-lg lg:text-xl" />
                        <BiX className="text-primary text-base sm:text-lg lg:text-xl" />
                      </span>
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F5F1EF] p-4 sm:p-6 lg:p-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
            <p className="text-primary text-center font-kufam font-semibold text-lg sm:text-xl lg:text-2xl">
              More than 50+ Brands Trusted World Wide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10 mt-5">
              {brands.map((brand, index) => (
                <div key={index} className="w-1/3 sm:w-1/4 md:w-auto">
                  <img
                    src={brand.image}
                    alt={brand.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <Button className="bg-[#ffffff] flex items-center mt-5 capitalize font-kufam font-medium text-base sm:text-lg lg:text-xl py-2 px-4 rounded-[5px] text-primary">
              Explore Now
              <FaCircleArrowRight className="text-secondary text-lg sm:text-xl ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
