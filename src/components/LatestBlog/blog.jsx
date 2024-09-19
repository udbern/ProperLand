import React from "react";
import Background from "../../assets/images/blogbackground.png";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaCircleArrowRight } from "react-icons/fa6";
function Blog() {
  const latestBlogs = [
    {
      image: Blog1,
      alt: "New York",
      date: "November 05, 2021",
      category: "Architecture",

      text: "Here's how to decorate your new home from scratch",
    },
    {
      image: Blog2,
      alt: "Atlanta",
      date: "November 14, 2021",
      category: "Market Manager",
      text: "Home buying basics: How many Kitchans and bedrooms?",
    },
  ];

  return (
    <section
      className="bg-[#F5F1EF] bg-center  "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8  ">
        <div className="flex flex-col justify-center items-center pb-10">
          <h2 className="font-sans3 text-center mb-5 uppercase text-primary leading-relaxed border-r-2 border-l-2 px-2 border-primary w-fit font-normal text-base sm:text-lg md:text-xl mx-auto">
            <span className="text-secondary">0 6</span> Blog
          </h2>

          <p className="text-primary text-center text-2xl sm:text-3xl lg:text-4xl font-bold font-kufam mb-8">
            Discover The Neighborhoods
          </p>

          <div className="flex flex-col w-full">
            {latestBlogs.map((latestBlog, index) => (
              <div key={index} className="mb-12">
                <div className="max-w-[898px] mx-auto mt-5 max-h-[342px]">
                  <img
                    src={latestBlog.image}
                    alt={latestBlog.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <Link
                  to=""
                  className="flex flex-col items-center text-center justify-center space-y-3 sm:space-y-5 mt-6 sm:mt-10 mb-6 sm:mb-10 max-w-2xl mx-auto p-4"
                >
                  <div className="flex items-center justify-center">
                    <h2 className="font-sans3 font-normal text-base sm:text-xl text-link">
                      {latestBlog.date} | <span>{latestBlog.category}</span>
                    </h2>
                  </div>
                  <p className="text-primary font-kufam font-medium text-xl sm:text-2xl md:text-3xl">
                    {latestBlog.text}
                  </p>
                </Link>
                <div className="flex justify-center"></div>
              </div>
            ))}
          </div>
          <Button className="bg-[#ffffff]   capitalize font-kufam font-medium text-xl py-2 px-4 rounded-[5px] text-primary ">
            see all articles
            <FaCircleArrowRight className="text-primary text-xl ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
