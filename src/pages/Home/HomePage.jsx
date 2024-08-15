import React from 'react'
import Hero from '../../components/Hero/hero'
import Featured from '../../components/FeaturedProperties/featured'
import Intro from '../../components/Intro/intro'
import Why from '../../components/WhyChooseUS/why'


function HomePage() {
  return (
    <div>
        <Hero/>
        <Intro />
        <Featured/>
        <Why/>
    </div>
  )
}

export default HomePage