import React from "react";
import Hut from "../../assets/images/hut.png";
import Pig from "../../assets/images/pig.png";
import Money from "../../assets/images/money.png";
import Locate from "../../assets/images/Locate.png";
import Hand from "../../assets/images/hands.png";

function Why() {
  return (
    <>
      <section className=" bg-[#fffff] z-20 relative">
        <div className="max-w-6xl mx-auto justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto items-center   mb-10">
            <h2 className="font-sans3 text-start md:text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl md:mx-auto">
              <span className="text-secondary">0 3</span> Why Choose
            </h2>
            <p className="text-primary text-start md:text-center text-3xl lg:text-4xl font-bold font-kufam">
              Why Choose Our Properties Of Real Estate Industries
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="">
              <img src={Pig} className="object-cover object-center" alt="" />
            </div>
            <div className=" col-span-2">
              <img src={Hut} className="object-cover object-center" alt="" />
            </div>
            <div className="">
              <img src={Hand} className="object-cover object-center" alt="" />
            </div>
            <div className="">
              <img src={Locate} className="object-cover object-center" alt="" />
            </div>
            <div className="">
              <img src={Pig} className="object-cover object-center" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Why;
