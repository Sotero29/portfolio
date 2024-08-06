import React from 'react'
import Card from './Card'
//imagenes de proyectos
import projectOne from '../../../assets/img/img_projects/pro1.png'
import projectDos from '../../../assets/img/img_projects/pro2.png'

const projects = [
  {
    id: 0,
    img: projectOne,
    name: 'Proyecto 1',
    description: 'des.',
    to: '/projects'
  }, {
    id: 1,
    img: projectDos,
    name: 'Proyecto 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, animi sunt. Quos sapiente, tempore dolores nostrum alias enim modi tempora incidunt cum nobis porro esse, inventore nesciunt vero. Minus, facere.',
    to: '/projects'
  },
]

const Cards = () => {

  return (
    <div>
      {
        projects.map(({ id, img, name, description, to }) => 
          (
            <Card 
              key={id}
              img={img}
              name={name}
              description={description}
              to={to}
            />
          )
        )
      }
    </div>
  )
}

export default Cards