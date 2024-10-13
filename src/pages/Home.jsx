import React from 'react'
import Banner from '../components/Homepage/banner'
import Skills from '../components/Homepage/skill'
import Work from '../components/Homepage/work'
import Contact from '../components/Homepage/contact'
import Projects from '../components/Homepage/project'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
    <Skills />
    <Work />
    <Projects />
    <Contact />
    </div>
  )
}

export default Home
