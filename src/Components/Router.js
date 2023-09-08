import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Blog from '../Screens/Blog'
import Navbar from '../Components/Navbar'
import AboutUs from '../Screens/AboutUs'
import Contact from '../Screens/Contact'
import Blogdetails from '../Screens/Blogdetails'
import Footer from './Footer'

const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blogdetails/:id' element={<Blogdetails/>} />
            </Routes>

            <Footer/>
          </>
    )
}

export default Router
