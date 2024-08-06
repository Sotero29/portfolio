import React from 'react'
import { NavLink } from 'react-router-dom'
import { data } from '../../../data/linksNav'

const NavBar = () => {
  return (
    <nav>
      <ul>
        {
          data.map((data, index) => {
            return (
              <NavLink key={index} target={data.target} to={data.url}
                className={({ isActive }) => isActive ? 'active' : 'pending'} >
                {data.name}
              </NavLink>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default NavBar