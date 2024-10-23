import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Projectcard = ({imgurl, title, description, giturl, previewurl}) => {
  return (
    <div>
        <div className='' style={{background:`url(${imgurl})`, backgroundSize:'cover'}}>
            <div className=''>
                <Link to={giturl} className=''>
                <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to={previewurl} className=''>
                <FontAwesomeIcon icon={faEye} />
                </Link>
            </div>
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Projectcard