import React from 'react'
import '../../assests/css/main.css'

const banner = () => {
  return (
    <div className='banner-section section-bg '>
        <div className="container">
        <div className="image-container">
          <img src="https://via.placeholder.com/150" alt="Ibrahim Memon" />
        </div>
        <div className="text-container">
          <p className="intro">Hello! I am Niranjan Maurya</p>
          {/* <p className="title">A Designer who</p>
          <h1 className="heading">Judges a book</h1>
          <p className="subheading">by its <span className="highlight">cover</span>...</p>
          <p className="subtitle">Because if the cover does not impress you what else can?</p> */}
          <h2 className="main-heading">I'm a Front-End Developer.</h2>
          {/* <p className="body">A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals. </p> */}
        </div>
      </div>
    </div>
  )
}

export default banner
