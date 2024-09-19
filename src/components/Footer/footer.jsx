import React from 'react'
import logo from '../../assests/image/logo/logo.svg'
import { Quicklink, socialmedia } from '../../Context/PageData'
import { Link } from 'react-router-dom'
import '../../assests/css/main.css'

const footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div  className="footer">

      <div className="container-fluid text-center ">
        <div className="row">
          <div className="col">
            <div>
              <img src={logo} alt="" />
            </div>
            <p></p>
          </div>
          <div className="col footer-link">
            <h5>Quick Links</h5>
            <ul>
              {
                Quicklink.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                    )
                    })
              }
            </ul>
          </div>
          <div className="col footer-social">
            <h5>Connect of Us</h5>
            <ul>
              {
                socialmedia.map((item, index) => {
                  return (
                    <li key={index} className='footer-link'>
                      <Link to={item.link} className='social-media' target="_blank" rel="noopener noreferrer">{item.icon}
                      <p>{item.name}</p></Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className='copyright'>
          <div><hr />
          </div>
          <p> ©<span>{year}</span> Prolific, Inc.
          All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default footer
