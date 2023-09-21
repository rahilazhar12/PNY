import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Blog from '../Screens/Blog'
import Navbar from '../Components/Navbar'
import AboutUs from '../Screens/AboutUs'
import Blogdetails from '../Screens/Blogdetails'
import Footer from './Footer'
import Design from '../Screens/Design'
import Contactus from '../Screens/Contactus'
import Trainingschedule from '../Screentwo/Trainings'
import Feestruchure from '../Screentwo/FeeStructure'
import Categories from  '../Screentwo/Categories'
import Coursedetails from  '../Screentwo/Coursedetail'
import Allcourses from  '../Screentwo/AllCourses'

const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<Design/>} />
                <Route path='/blogdetails/:id' element={<Blogdetails/>} />
                <Route path='/contactus' element={<Contactus/>} />
                <Route path='/trainingschedule' element={<Trainingschedule/>} />
                <Route path='/Feestruchure' element={<Feestruchure/>} />
                <Route path='/categories' element={<Categories/>} />
                <Route path='/coursedetails' element={<Coursedetails/>} />
                <Route path='/allcourses' element={<Allcourses/>} />
                


            </Routes>

            <Footer/>
          </>
    )
}

export default Router
