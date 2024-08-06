import React from 'react'

const goals = [
  'Poner en práctica mis conocimentos de programación.',
  'Participar en el desarrollo de un programa de consola.',
  'Trabajar en una empresa de software.',
]

const listGoals = goals.map((goal, index) => 
  <li key={index}>{goal}</li>
)

const Goals = () => {
  return (
    <>
      <h3>Mis metas a corto plazo</h3>
      <ul>{ listGoals }</ul>
    </>
  )
}

export default Goals