import React from 'react'
import { Link } from 'react-router-dom'
import { socialmedia } from '../../Context/PageData'

const contact = () => {
  return (
    <div className='contact-section'>
      <div className="container">
        <div className="row">
        <div class="col-md-8 offset-md-2">
        <div className='heading'>
          <h4 className='title'>Contact</h4>
          <p >I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect.</p>
          <div>
            <ul className='contact-link'>
              {
                socialmedia.map((item, index) => {
                  return (
                    <li key={index} >
                      <Link to={item.link}  target="_blank" rel="noopener noreferrer">{item.icon}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default contact