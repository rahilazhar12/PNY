import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Blog from '../Screens/Blog'
import Navbar from '../Components/Navbar'
import AboutUs from '../Screens/AboutUs'
import Blogdetails from '../Screens/Blogdetails'
import Footer from './Footer'
import Contactus from '../Screens/Contactus'
import Trainingschedule from '../Screentwo/Trainings'
import Feestruchure from '../Screentwo/FeeStructure'
import Categories from  '../Screentwo/Categories'
import Coursedetails from  '../Screentwo/Coursedetail'
import Allcourses from  '../Screentwo/AllCourses'
import Design from '../Screens/Design'
import Gallery from '../Screens/Gallery'
import Gallerydetailed from '../Screens/Gallerydetailed'
import Faqs from '../Screens/Faqs'
import Testapi from './Testapi'

const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<Design/>} />
                <Route path='/blog/marketing/:slug' element={<Blogdetails/>} />
                <Route path='/contactus' element={<Contactus/>} />
                <Route path='/trainingschedule' element={<Trainingschedule/>} />
                <Route path='/Feestruchure' element={<Feestruchure/>} />
                <Route path='/:slug' element={<Categories/>} />
                <Route path='/:slug123' element={<Coursedetails />} />
                <Route path='/allcourses' element={<Allcourses/>} />
                <Route path='/Carrer' element={<Design/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/imagesshow/:id' element={<Gallerydetailed/>} />
                <Route path='/faqs' element={<Faqs/>} />
                <Route path='/api' element={<Testapi/>} />

                


            </Routes>

            <Footer/>
          </>
    )
}

export default Router
