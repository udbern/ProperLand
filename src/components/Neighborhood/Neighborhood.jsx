import React from "react";
import NewYork from "../../assets/images/newyork.jpg";
import Atlanta from "../../assets/images/atlanta.jpg";
import Singapor from "../../assets/images/singapor.jpg";
import Paris from "../../assets/images/paris.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import Proland from "../../assets/images/icons/proland.png";
import No from "../../assets/images/icons/no.png";
import Modern from "../../assets/images/icons/modern.png";
import Brand from "../../assets/images/icons/brand.png";
import Tech from "../../assets/images/icons/tech.png";
import Bitax from "../../assets/images/icons/bitax.png";
import Target from "../../assets/images/icons/target.png";
import Classic from "../../assets/images/icons/classic.png";
import Build from "../../assets/images/icons/build.png";
import { Button } from "flowbite-react";

function Neighborhood() {
  const data = [
    { value: "56,180", label: "In property sales" },
    { value: "99%", label: "Customer satisfaction" },
    { value: "25K+", label: "Property Transaction" },
    { value: "2,918", label: "Price Reduce" },
  ];

  const neighborhoods = [
    { image: NewYork, alt: "New York" },
    { image: Atlanta, alt: "Atlanta" },
    { image: Singapor, alt: "Singapore" },
    { image: Paris, alt: "Paris" },
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
      <section className="max-w-6xl mb-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-6 sm:mb-0"
            >
              <p className="text-3xl sm:text-4xl font-kufam font-bold text-primary">
                {item.value}
              </p>
              <p className="text-link font-sans3 text-lg sm:text-xl font-normal text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <hr className="text-gray-600 h-2 mt-5 mb-20" />

        <div className="mb-10">
          <h2 className="font-sans3 text-start md:text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl mx-auto">
            <span className="text-secondary">0 6</span> Neighborhoods
          </h2>
          <p className="text-primary text-start md:text-center text-3xl lg:text-4xl font-bold font-kufam">
            Discover The Neighborhoods
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {neighborhoods.map((neighborhood, index) => (
              <div
                key={index}
                className="relative h-80 md:h-[407px] overflow-hidden rounded-[5px] w-full"
              >
                <img
                  src={neighborhood.image}
                  alt={neighborhood.alt}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-0 flex w-full p-2">
                  <FaCircleArrowRight className="ml-auto text-white/35 text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F5F1EF] p-6 sm:p-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
            <p className="text-primary text-center font-kufam font-semibold text-xl sm:text-2xl">
              More than 50+ Brands Trusted World Wide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-5">
              {brands.map((brand, index) => (
                <div key={index} className="w-1/4 sm:w-auto">
                  <img
                    src={brand.image}
                    alt={brand.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <Button className="bg-[#ffffff] flex items-center mt-5 capitalize font-kufam font-medium text-lg sm:text-xl py-2 px-4 rounded-[5px] text-primary">
              Explore Now <FaCircleArrowRight className="text-secondary text-xl ml-2"/>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Neighborhood;