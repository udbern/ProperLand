import React from "react";
import ServiceImg from "../../assets/images/service.png";
import Dollar from "../../assets/images/icons/dollars.png";
import HandShake from "../../assets/images/icons/handshake.png";
import Hand from "../../assets/images/icons/hand.png";
import User from "../../assets/images/icons/user.png";
import Phone from "../../assets/images/icons/call.png";
function services() {
  return (
    <>
      <section
        className=""
        style={{
          backgroundImage: `url(${ServiceImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
          <div className=" items-center   mb-10">
            <h2 className="font-sans3 text-start md:text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl md:mx-auto">
              <span className="text-secondary">0 5</span> Services
            </h2>
            <p className="text-primary text-start md:text-center text-3xl lg:text-4xl font-bold font-kufam">
              See How Can Help
            </p>

            <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-center">
              <div className="w-full  flex flex-col items-center justify-center p-6">
                <div className=" mb-4">
                  <img
                    src={Dollar}
                    alt=""
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                <div className="-mt-32 text-center ">
                  <h2 className=" font-kufam  text-primary text-xl md:text-2xl font-semibold mb-2">
                    Rent a Home
                  </h2>
                  <p className=" text-sm md:text-base text-[#8D8D8D] font-normal font-sans3">
                    High level overviews. approaches lverall value proposition.
                    Organically grow the holistic world view of disruptive.
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center justify-center p-6">
                <div className=" mb-4">
                  <img
                    src={HandShake}
                    alt=""
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="-mt-32 text-center ">
                  <h2 className=" font-kufam  text-primary text-xl md:text-2xl font-semibold  mb-2">
                    Sale a Home
                  </h2>
                  <p className="text-sm md:text-base text-[#8D8D8D] font-normal font-sans3">
                    Frameworks to provide a robust synopsis for high level
                    overviews. approaches lverall, Organically grow the
                    holistic.
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center justify-center p-6">
                <div className="mb-4">
                  <img
                    src={Hand}
                    alt=""
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="-mt-32 text-center ">
                  <h2 className="font-kufam  text-primary text-xl md:text-2xl font-semibold  mb-2">
                    Buy a Home
                  </h2>
                  <p className="text-sm md:text-base text-[#8D8D8D] font-normal font-sans3">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. approaches lverall value proposition.
                  </p>
                </div>
              </div>

              <div className="w-full  flex flex-col items-center justify-center p-6 md:col-span-2 lg:col-span-1">
                <div className=" mb-4">
                  <img
                    src={User}
                    alt=""
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="-mt-32 text-center ">
                  <h2 className="font-kufam  text-primary text-xl md:text-2xl font-semibold mb-2">
                    Experience Agent
                  </h2>
                  <p className="text-sm md:text-base text-[#8D8D8D] font-normal font-sans3">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. approaches lverall value proposition.
                  </p>
                </div>
              </div>

              <div className="w-full  flex flex-col items-center justify-center p-6 md:col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <img
                    src={Phone}
                    alt=""
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className=" -mt-32  text-center ">
                  <h2 className="font-kufam  text-primary text-xl md:text-2xl font-semibold mb-2">
                    Member Support
                  </h2>
                  <p className="  text-sm md:text-base  text-[#8D8D8D] font-normal font-sans3">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. lverall value proposition Organically
                    grow holistic .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default services;
