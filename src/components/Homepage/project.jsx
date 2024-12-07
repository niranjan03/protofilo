import React from 'react';

import web from '../../assests/image/img/web1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import web1 from '../../assests/image/img/web2.png'

const Projectdata = [
    {
        id: 1,
    title: "New Jyoti Decor",
    description: "Project 1 description",
    image: web,
    gitUrl: "/",
    previewUrl: "/",
    },
    {
        id: 2,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: web1,
    gitUrl: "/",
    previewUrl: "/",
    },
    {
        id: 3,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "",
    gitUrl: "/",
    previewUrl: "/",
    }
];


const Project = () => {
    
    
    return (
        <div className='container'>
            <h3>Projects</h3>
            <div className=''>
            <ul  className="row  d-flex">
                {Projectdata.map((project, index) => (
                    <li key={index} className='col-6 col-md-6 '>
                        <div className="card" style={{width: "auto"}} >
                            <div className="image-container">
                            <img src={project.image} className="card-img-top card-img " alt="..." />
                            <div className='logos'>
                            <div className='icon-background'></div>
                                <Link path >
                                <FontAwesomeIcon icon={faGithub} />
                                </Link>
                                <Link path >
                                <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </div>
                            </div>
                                <div class="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">
                                        {project.description}</p>
                                    
                                </div>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    
  );
};

export default Project;