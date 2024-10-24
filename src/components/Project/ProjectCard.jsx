import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({imageUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div className="card position-relative" style={{ width: '18rem' }}>
            {imageUrl && (
                <img src={imageUrl} className="card-img-top" alt={title} />
            )}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                
            </div>
            <div className="logos">
            <Link to={gitUrl} className='logo'>
                <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to={previewUrl} className='logo'>
                <FontAwesomeIcon icon={faEye} />
                </Link>
            </div>
        </div>

    
   
  )
}

export default ProjectCard;

{/* <div>
<div className='project-card ' style={{ height: '280px' }}>
      {imageUrl && (
        <img src={imageUrl} className="card-img-top" alt={title} />
    )}
    <div className=''>
        <Link to={gitUrl} className=''>
        <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link to={previewUrl} className=''>
        <FontAwesomeIcon icon={faEye} />
        </Link>
    </div>
</div>
<div>
    <h4>{title}</h4>
    <p>{description}</p>
</div>
</div> */}