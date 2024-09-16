import React from 'react'
import logo from '../../assests/image/logo/logo.svg'
import { navbardata } from '../../Context/PageData'
import { Link } from 'react-router-dom'

import '../../assests/css/main.css'

const navbar = () => {
  return (
    <div className='navbar '>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='menu-bar'>
            <ul className='nav-links'>
                {navbardata.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    </div>
  )
}

export default navbar
