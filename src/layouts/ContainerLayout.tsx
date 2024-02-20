import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContainerLayout = () => {
  return (
    <>
    <Navbar />
    <div className='max-w-6xl mx-auto px-5 py-32'>
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default ContainerLayout