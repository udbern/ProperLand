import React from "react";
import Hero from "../../components/Hero/hero";
import Intro from "../../components/Intro/intro";
import Featured from "../../components/FeaturedProperties/featured"

function Home() {
  return (
    <>
      <Hero/>
      <Intro/>
      <Featured/>
    </>
  );
}

export default Home;