import React from 'react';
import ProjectCard from '../Project/ProjectCard';
import web from '../../assests/image/img/web1.png'

const Projectdata = [
    {
        id: 1,
    title: "New Jyoti Decor",
    description: "Project 1 description",
    imageUrl: {web},
    gitUrl: "/",
    previewUrl: "/",
    },
    {
        id: 2,
    title: "Portfolio Website",
    description: "Project 1 description",
    imageUrl: "../../assests/image/img/web2.png",
    gitUrl: "/",
    previewUrl: "/",
    },
    {
        id: 3,
    title: "Portfolio Website",
    description: "Project 1 description",
    imageUrl: "",
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
                    <li key={index} className='col-4 col-md-4 '>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            img={project.imageUrl}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    
  );
};

export default Project;