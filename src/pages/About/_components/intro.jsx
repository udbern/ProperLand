import React from "react";
import IntroImg from "../../../assets/images/aboutintro.png";
import Vision from "../../../assets/images/icons/vision.png";
import Mission from "../../../assets/images/icons/mission.png";
import BackgroundImage from "../../../assets/images/aboutpattern.png";

function Intro() {
  return (
    <>
      <section
        className="  bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 mt-14 mb-14">
          <div className="grid lg:grid-cols-2 items-center gap-8 ">
            <div className="max-h-[746px] max-w-[523px] mx-auto md:mx-0">
              <img
                src={IntroImg}
                alt="About Intro"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="max-md:text-center">
              <div className="space-y-4 mb-8">
                <h2 className="font-sans3 text-primary leading-relaxed uppercase border-r-2 border-l-2 px-2 border-primary w-fit mx-auto md:mx-0 font-normal text-lg md:text-xl">
                  <span className="text-secondary">0 1</span> PROPERLAND INTRO
                </h2>
                <h3 className="text-primary font-kufam text-3xl md:text-4xl font-bold">
                  Buying & Selling Property In An Easy Way
                </h3>
                <p className="text-link font-normal text-base md:text-xl">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi.
                </p>
              </div>
              <div className="bg-[#FFFFFF] p-6 md:p-10 rounded-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <img
                    src={Vision}
                    alt="Vision"
                    className="mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="text-start">
                    <h2 className="text-xl text-primary font-kufam font-semibold mb-2">
                      Our Vision
                    </h2>
                    <p className="font-sans3 text-base md:text-xl text-[#7D7D7D] font-normal">
                      Distinctively re-engineer revolutionary meta-services and
                      premium At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <img
                    src={Mission}
                    alt="Mission"
                    className="mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="text-start ">
                    <h2 className=" text-xl font-kufam text-primary font-semibold mb-2">
                      Our Mission
                    </h2>
                    <p className=" font-sans3 text-base md:text-xl text-[#7D7D7D] font-normal">
                      Distinctively re-engineer revolutionary meta-services and
                      premium At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </section>
      <hr className="max-w-6xl mx-auto   text-link " />
    </>
  );
}

export default Intro;
