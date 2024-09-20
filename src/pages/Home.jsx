import React from 'react'
import Banner from '../components/Homepage/banner'
import Skills from '../components/Homepage/skill'
import Work from '../components/Homepage/work'
import Contact from '../components/Homepage/contact'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
    <Skills />
    <Work />
    <Contact />
    </div>
  )
}

export default Home
