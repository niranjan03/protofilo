import React, { useState } from 'react'
import logo from '../../assests/image/logo/logo.svg'
import { navbardata } from '../../Context/PageData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (

        <nav className='bg-inherit p-4'>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white flex items-center">
                    <img src={logo} alt="" />
                </div>
                <div className=" md:flex hidden space-x-4">
                    {navbardata.map((item, index) => {
                        return (
                            <Link href={item.link} className='text-white hover:text-primary-color hover:bg-secondary-color p-2'>{item.name}</Link>
                        )
                    })
                    }
                </div>
                <button onClick={toggleMenu} className='md:hidden text-white focus:outline-none'>
                    {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
            {
                isOpen && (

                    <div className="md:hidden bg-inherit px-8 py-6">
                        {navbardata.map((item, index) => {
                            return (
                                <Link href={item.link} key={index} className='block text-white hover:text-gray-400'>
                                    {item.name}
                                </Link>
                            )
                        }
                        )}
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar
