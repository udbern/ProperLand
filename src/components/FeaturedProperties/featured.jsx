import { Button, Card } from "flowbite-react";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

const data = [
  {
    image:
      "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$250,000",
    forSale: true,
    description: "Modern Family Home",
    location: "123 Main St, Cityville",
    details: [
      { label: "Beds", value: 3, icon: FaBed },
      { label: "Baths", value: 2, icon: FaBath },
      { label: "Parking", value: 1, icon: FaCar },
      { label: "", value: "2000 sqft", icon: FaRulerCombined },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/4450337/pexels-photo-4450337.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$180,000",
    forSale: true,
    description: "Cozy Downtown Apartment",
    location: "456 Elm St, Townsburg",
    details: [
      { label: "Beds", value: 2, icon: FaBed },
      { label: "Baths", value: 1, icon: FaBath },
      { label: "Parking", value: 1, icon: FaCar },
      { label: "", value: "1200 sqft", icon: FaRulerCombined },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$350,000",
    forSale: true,
    description: "Spacious Suburban House",
    location: "789 Oak Rd, Suburbville",
    details: [
      { label: "Beds", value: 4, icon: FaBed },
      { label: "Baths", value: 3, icon: FaBath },
      { label: "Parking", value: 2, icon: FaCar },
      { label: "", value: "2500 sqft", icon: FaRulerCombined },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$420,000",
    forSale: true,
    description: "Luxury Penthouse",
    location: "101 Sky Ave, Metropolis",
    details: [
      { label: "Beds", value: 3, icon: FaBed },
      { label: "Baths", value: 2, icon: FaBath },
      { label: "Parking", value: 1, icon: FaCar },
      { label: "", value: "2000 sqft", icon: FaRulerCombined },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$280,000",
    forSale: true,
    description: "Charming Cottage",
    location: "222 Willow Ln, Villagetown",
    details: [
      { label: "Beds", value: 3, icon: FaBed },
      { label: "Baths", value: 2, icon: FaBath },
      { label: "Parking", value: 1, icon: FaCar },
      { label: "", value: "2000 sqft", icon: FaRulerCombined },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$550,000",
    forSale: true,
    description: "Beachfront Villa",
    location: "333 Coastal Dr, Seaside",
    details: [
      { label: "Beds", value: 5, icon: FaBed },
      { label: "Baths", value: 4, icon: FaBath },
      { label: "Parking", value: 3, icon: FaCar },
      { label: "", value: "3000 sqft", icon: FaRulerCombined },
    ],
  },
];

function Featured() {
  return (
    <>
      <section className="bg-[#F5F1EF]  z-20  pb-20 relative">
        <div className="flex justify-center">
          <div className=" bg-gradient-to-b from-[#F2DED4] to-[#FFFFFF00] h-48 w-48  md:h-[25rem] md:w-[25rem] absolute    -z-10 rounded-full -bottom-14 md:-bottom-32 "></div>
        </div>

        <div className="max-w-6xl mx-auto justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto items-center   mb-10">
            <h2 className="font-sans3 text-start md:text-center mb-5 text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl md:mx-auto">
              <span className="text-secondary">0 2</span> PROPERLAND INTRO
            </h2>
            <p className="text-primary text-start md:text-center text-3xl lg:text-4xl font-bold font-kufam">
              Properties for sale in your favorite area
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {data.map((property, index) => (
              <Card
                key={index}
                className="bg-white max-h-[656px] p-4 sm:p-5 shadow-none border-none rounded-[5px]"
              >
                <img
                  src={property.image}
                  alt={property.description}
                  className="w-full h-48 sm:h-60 object-cover rounded-[5px]"
                />
                <div className="p-2 sm:p-4">
                  <div className="flex justify-between font-kufam items-center mb-2">
                    <span className="text-secondary text-base  md:text-2xl font-semibold">
                      {property.price}
                    </span>
                    <button className="bg-secondary font-medium text-sm sm:text-base md:text-base px-2 sm:px-4 text-primary py-1 sm:py-2 rounded-[5px]">
                      For Sale
                    </button>
                  </div>
                  <h3 className="text-sm sm:text-xl md:text-base font-kufam text-primary font-semibold mb-2">
                    {property.description}
                  </h3>
                  <p className="text-gray-600 flex items-center text-sm sm:text-base md:text-sm mb-4">
                    <span className="mr-1">
                      <IoLocationSharp className="text-secondary  md:text-2xl " />
                    </span>
                    {property.location}
                  </p>
                  <div className="flex flex-wrap justify-between gap-3 space-x-0 sm:text-sm text-gray-500">
                    {property.details.map((item, idx) => (
                      <span
                        className="border border-[#D7D7D7]  text-sm rounded-[5px] px-2 sm:px-4 py-1 sm:py-2 mb-2 sm:mb-0 flex items-center"
                        key={idx}
                      >
                        <item.icon className="mr-1" />
                        <span className="mx-1">|</span>
                        {item.value} {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center ">
          <Button className="bg-[#ffffff]  capitalize font-kufam font-medium text-xl py-2 px-4 rounded-[5px] text-primary ">
            touch with us
          </Button>
        </div>
      </section>
    </>
  );
}

export default Featured;
