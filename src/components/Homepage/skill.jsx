import React from 'react'
import { skills } from '../../Context/PageData'

const skill = () => {
  return (
    <div className='skill bg-white'>
        <h2 className='heading-skill'>Skills</h2>
      <div className='container section-skill slider-container'>
      <div className='skill-grid'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-bar'>
              <img src={skill.icon} className='skill-img' alt={skill.alt} />
              
              <h4 className='skill-name'>{skill.name}</h4>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default skill;