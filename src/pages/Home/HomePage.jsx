import React from 'react'
import Hero from '../../components/Hero/hero'
import Featured from '../../components/FeaturedProperties/featured'
import Intro from '../../components/Intro/intro'
import Why from '../../components/WhyChooseUS/why'
import Banner from '../../components/Banner/banner'
import Services from '../../components/Services/services'
import Review from '../../components/Reviews/review'
import Neighbor from '../../components/Neighborhood/Neighborhood'
import LatestBlog from '../../components/LatestBlog/blog'
function HomePage() {
  return (
    <div>
        <Hero/>
        <Intro />
        <Featured/>
        <Why/>
        <Banner/>
        <Services />
        <Review/>
        <Neighbor/>
        <LatestBlog/>
    </div>
  )
}

export default HomePage