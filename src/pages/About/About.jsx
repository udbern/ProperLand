import React from 'react';
import Hero from './_components/hero';
import Intro from './_components/intro';
import Process from './_components/process';
import Reviews from '../../components/Reviews/review'
import Space from './_components/space'
import Team from './_components/teams';
function About() {
  return (
    <div>
      <Hero/>
      <Intro/>
      <Process/>
      <Reviews/>
      <Space/>\
      <Team/>
    </div>
  )
}

export default About