import React from 'react'
import logo from '../../assests/image/logo/logo.svg'
import { Quicklink, socialmedia } from '../../Context/PageData'
import { Link } from 'react-router-dom'
import '../../assests/css/main.css'

const footer = () => {
  return (
    <div  className="footer">

      <div class="container-fluid text-center ">
        <div class="row">
          <div class="col">
            <div>
              <img src={logo} alt="" />
            </div>
            <p></p>
          </div>
          <div class="col footer-link">
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
          <div class="col footer-social">
            <h5>Connect of Us</h5>
            <ul>
              {
                socialmedia.map((item, index) => {
                  return (
                    <li key={index} className='footer-link'>
                      <Link href={item.link} className='social-media' target="_blank" rel="noopener noreferrer">{item.icon}
                      <p>{item.name}</p></Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className='copyright'>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default footer
