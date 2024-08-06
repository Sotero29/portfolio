import React, { useState } from 'react'
//componentes
import ContactUs from '../contact_us/ContactUs'
import NavBar from './NavBar'

const Header = () => {

  return (
    <header className='header'>
      <h1 className='logo'>Mi portafolio</h1>
      <NavBar/>
      <button className='contact-button'>
        Contactame
      </button>
    </header>
  )
}

export default Header