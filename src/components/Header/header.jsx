import React, { useState } from "react";
import Logo from "../../ui/logo";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Properties", path: "/properties" },
  { name: "Pages", path: "/pages" },
  { name: "Blog", path: "/blog" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="container mx-auto fixed inset-x-0 top-10 z-50">
        <div className=" border border-gray-200 max-w-6xl mx-auto w-full font-kameron font-bold bg-[#ffffff] md:py-4 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between  mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Logo />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
              <ul className="flex flex-col md:flex-row items-center font-medium text-primary md:space-x-8 mt-4 md:mt-0">
                {menu.map((item, index) => (
                  <li key={index} className="py-2 md:py-0">
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
                <li className="py-2 md:py-0">
                  <button
                    type="button"
                    className="text-white bg-primary rounded-[5px] font-medium text-sm px-4 py-2 text-center"
                  >
                    Get started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
