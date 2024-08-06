import React from 'react'
import { data } from '../../../data/projects'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
      <section className='works'>
        {
          data.map(project => {
            return (
              <article key={project.id} className='work-item'>
                <div className='mask'>  
                  <img src={project.img} alt={project.name} />
                </div>
                <h3>{ project.name }</h3>
                <p>{ project.categories }</p>
                <p>{ project.technologies }</p>
                <p className='description'>{ project.description }</p>
                <Link to={project.url} className='link'>Conoce mas</Link>
              </article>
            )
          })
        }
      </section>
  )
}

export default Project