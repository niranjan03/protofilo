import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faXTwitter, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'


import htmlicon from '../assests/image/logo/html-5.png'
import cssicon from '../assests/image/logo/css.png'
import javascripticon from '../assests/image/logo/js.png'
import reacticon from '../assests/image/logo/science.png'
import giticon from '../assests/image/logo/social.png'
import bootstrapicon from '../assests/image/logo/bootstrap.png'
import mongodbicon from '../assests/image/logo/mongodb.svg'
import GitHubicon from '../assests/image/logo/github.png'
import pythonicon from '../assests/image/logo/python.png'
import tailwindicon from '../assests/image/logo/tailwind-css.png'


export const navbardata = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Work',
        link: '/work',
    },
    {
        name: 'Project',
        link: '/project',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
]

export const socialmedia = [
    {
        name: 'Instagram',
        icon: <FontAwesomeIcon icon={faSquareInstagram} />,
        link: 'https://www.instagram.com/your-instagram-handle/', 
    },
    {
        name: 'LinkedIn',
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        link: 'https://www.linkedin.com/in/your-linkedin-handle/', 
    },
    {
        name: 'Twitter',
        icon: <FontAwesomeIcon icon={faXTwitter} />,
        link: 'https://twitter.com/your-twitter-handle', 
    },
    {
        name: 'GitHub',
        icon: <FontAwesomeIcon icon={faGithub} />,
        link: 'https://github.com/niranjan03',
    }
]

export const Quicklink=[
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Work',
        link: '/work',
    },
    {
        name: 'Project',
        link: '/project',
    },
    {
        name: 'Contact',
        link: '/contact',
    }
]


export const skills =[
    {
        name: 'HTML5',
        icon: htmlicon,
        alt: 'html5',
    },  
    {
        name: 'CSS3',
        icon: cssicon,
        alt: 'css3',
    },
    {
        name: 'JavaScript',
        icon: javascripticon,
        alt: 'javascript',
    },
    {
        name: 'Bootstrap',
        icon: bootstrapicon,
        alt: 'bootstrap',
    },
    {
        name: 'TailWind CSS',
        icon: tailwindicon,
        alt: 'TailWind CSS'
    },
    {
        name: 'Git',
        icon: giticon,
        alt: 'git',
    },
    {
        name: 'GitHub',
        icon: GitHubicon,
        alt: 'GitHub',
    },
    {
        name: 'React',
        icon:  reacticon,
        alt: 'react',
    },
    {
        name: 'Python',
        icon:  pythonicon,
        alt: 'Python',
    },
    {
        name: 'MongoDB',
        icon: mongodbicon,
        alt: 'mongodb',
    }
]