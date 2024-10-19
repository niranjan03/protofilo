import React from 'react'
import '../../assests/css/main.css'
import user from '../../assests/image/img/user.png'

const banner = () => {
  return (
    <div className='banner-section section-bg '>
        <div className="container">
        <div className="row ">
            <div className="col-md-6 col-lg-6 col-sm-12 ">
                <div className="banner-content">
                    <h2 className="">Hello, I am Niranjan Maurya</h2>
                    <span>I am Front-End Developer</span>
                    <p>Front-End Developer with a proven track record in creating responsive user interfaces and
                    optimizing website performance. Skilled in React.js, HTML5, CSS3, and JavaScript, with experience
                    in project development and team collaboration. Seeking a challenging role to leverage technical
                    expertise and contribute to innovative web solutions.</p>
                    <div className="download">
                      <button className="Resume-view" onClick=""></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 ">
                <div className="banner-img">
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default banner
