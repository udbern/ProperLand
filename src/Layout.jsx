import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
