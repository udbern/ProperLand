import React from "react";
import Logo from "../assets/images/logo/Logo.svg";

function logo() {
  return (
    <>
      <div className="h-6  md:h-10  ">
        <img
          src={Logo}
          alt="logo.svg"
          className="object-cover object-center h-full   "
        />
      </div>
    </>
  );
}

export default logo;
