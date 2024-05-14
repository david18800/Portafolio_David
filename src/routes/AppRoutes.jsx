import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { AboutMe } from '../pages/AboutMe'
import { Skills } from '../pages/Skills'
import { Experience } from '../pages/Experience'
import { ContactUs } from '../pages/ContactUs'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export const AppRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="Projects" element={<Projects/>} />
            <Route path="Aboutme" element={<AboutMe/>} />
            <Route path="Skills" element={<Skills/>} />
            <Route path="Experience" element={<Experience/>} />
            <Route path="Contactus" element={<ContactUs/>} />
            <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>
        <Footer/>
    </>
  )
}
