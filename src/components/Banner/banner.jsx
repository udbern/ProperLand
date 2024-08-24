import { IoArrowForwardCircleSharp } from "react-icons/io5";
import BannerImg from "../../assets/images/banner.png";

export default function Banner() {
  return (
    <div
      className="bg-gray-100 py-16 bg-center "
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
      }}
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:w-2/3 mb-10">
          <h2 className="font-sans3 text-primary mb-4 uppercase leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-lg md:text-xl">
            <span className="text-secondary">0 4</span> About Us
          </h2>
          <p className="text-primary text-start text-2xl sm:text-3xl mb-4 lg:text-4xl font-bold font-kufam">
            42+ years of helping you find the right Propertys
          </p>

          <p className="text-base md:text-xl bg-[#FFF0E9]/20  font-normal text-link mb-4">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto
          </p>
          <p className="text-base md:text-xl bg-[#FFF0E9]/20  font-normal text-link mb-8">
            Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>

          <button className="bg-secondary flex items-center capitalize text-primary  font-medium font-kufam py-2 px-4 rounded-[5px] transition duration-300 text-sm sm:text-base">
            learn more
            <IoArrowForwardCircleSharp className="ml-2 text-primary h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </section>
    </div>
  );
}
