import React from 'react'
import '../../assests/css/main.css'
import user from '../../assests/image/img/user.png'
import { TypeAnimation } from 'react-type-animation'

const banner = () => {
  const handleClick = () => {
    const url = 'https://drive.google.com/file/d/1tb5JM-dwhqRFDg8TG7g2rvr5hSRpgIPU/view?usp=sharing'
    window.open(url, '_blank');
  }

  return (
    <div className='banner-section section-bg '>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 col-lg-6 col-sm-12 ">
            <div className="banner-content">
              <h2 className="">Hello, I am </h2>
              <TypeAnimation
                sequence={[
                  'Niranjan Maurya', // Types 'One'
                  1000, // Waits 1s
                  'Web Developer', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'React Js Developer', // Types 'Three' without deleting 'Two'
                  () => {
                    // console.log('Sequence completed');
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
              />
              {/* <span>I am Front-End Developer</span> */}
              <p>Front-End Developer with a proven track record in creating responsive user interfaces and
                optimizing website performance. Skilled in React.js, HTML5, CSS3, and JavaScript, with experience
                in project development and team collaboration. Seeking a challenging role to leverage technical
                expertise and contribute to innovative web solutions.</p>
              <div className="download">
                <button className="Resume-view" onClick={() => handleClick()}>Resume</button>
                
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
