import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
//Paginas
import { Home, Projects } from './pages'
//componetes
import Header from './components/home/header/Header'
import Footer from './components/home/footer/Footer'
import Error404 from './components/404'

function App() {
  return (
    <div className='layout'>
      <Header/>
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>} />
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </section>
      <Footer/>
    </div>
  )
}

export default App