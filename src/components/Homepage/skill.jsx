import React from 'react'
import { skills } from '../../Context/PageData'

const skill = () => {
  return (
    <div className='skill bg-white'>
        <div className='container section-skill '>
            {
                skills.map((skill,index)=>{
                    return (
                        <div key={index} className='skill-bar'>
                            <img src={skill.icon} className='skill-img' alt={skill.alt} />
                            <h2 className='skill-name'>{skill.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default skill