import React, { useRef } from 'react';

import ProjectCard from '../Project/ProjectCard';
import { motion, useInView } from "framer-motion";


const Projectdata = [
    {
        id: 1,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "",
    gitUrl: "/",
    previewUrl: "/",
    },
    {
        id: 2,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "",
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
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
    
    return (
        <div className=''>
            <h3>Projects</h3>
            <div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {Projectdata.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
            </div>
            
        </div>
    
  );
};

export default Project;