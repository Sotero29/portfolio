import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = ({ img, name, description, to }) => {
  return (
      <div>
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <div>
            <NavLink to={to}>link</NavLink>
          </div>
        </div>
      </div>
  )
}

export default Card