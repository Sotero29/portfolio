import React from 'react'
//componentes
import IAm from '../components/home/IAm/IAm'
import Tool from '../components/home/tools/Tool'
import Project from '../components/home/projects_card/Project'
import ContactUs from '../components/home/contact_us/ContactUs'

const Home = () => {
  return (
    <>
      <IAm/>
      <Tool/>
      <Project/>
      <ContactUs/>
    </>
  )
}

export default Home