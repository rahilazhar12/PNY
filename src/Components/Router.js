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
import Categories from '../Screentwo/Categories'
import Coursedetails from '../Screentwo/Coursedetail'
import Allcourses from '../Screentwo/AllCourses'
import Design from '../Screens/Design'
import Gallery from '../Screens/Gallery'
import Gallerydetailed from '../Screens/Gallerydetailed'
import Faqs from '../Screens/Faqs'
import Testapi from './Testapi'
import Fastbootcamp from '../Screens/Fastbootcamp'
import Googlecertification from '../Screens/Googlecertification'
import Flyers from '../Screens/Flyers'
import Flyermodal from './Flyermodal'
import Termsandconditions from '../Screens/Termsandconditions'
import Privacypolicy from '../Screens/Privacypolicy'
import Citywisedata from '../Screens/Citywisedata'
import Specialpage from '../Screens/Specialpage'
import WhatsAppIcon from './Whatsappicon'
import Lahore from '../Screens/Shortcourses/Lahore'
import Multan from '../Screens/Shortcourses/Multan'
import Rawalpindi from '../Screens/Shortcourses/Rawalpindi'
import Gujranwala from '../Screens/Shortcourses/Gujranwala'
import Faisalabad from '../Screens/Shortcourses/Faisalabad'
import Karachi from '../Screens/Shortcourses/Karachi'
import Sialkot from '../Screens/Shortcourses/Sialkot'
import Azadkashmir from '../Screens/Shortcourses/AzadKashmir'



const Router = () => {
    return (
        <>
            <Navbar />
            <WhatsAppIcon />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<Design />} />
                <Route path='/blog/marketing/:slug' element={<Blogdetails />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/trainingschedule' element={<Trainingschedule />} />
                <Route path='/Feestruchure' element={<Feestruchure />} />
                <Route path='/courses/:slug' element={<Categories />} />



                <Route path='/:courseSlug' element={<Coursedetails />} />



                <Route path='/allcourses' element={<Allcourses />} />
                <Route path='/Carrer' element={<Design />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/imagesshow/:id' element={<Gallerydetailed />} />
                <Route path='/faqs' element={<Faqs />} />
                <Route path='/fast-track-pro-bootcamps' element={<Fastbootcamp />} />
                <Route path='/google-scholarship-certification-in-lahore-pakistan' element={<Googlecertification />} />
                <Route path='/flyers' element={<Flyers />} />
                <Route path='/modalflyer' element={<Flyermodal />} />
                <Route path='/terms-conditions' element={<Termsandconditions />} />
                <Route path='/privacy-policy' element={<Privacypolicy />} />
                <Route path='/city/:name' element={<Citywisedata />} />
                <Route path='/specialpage/:url' element={<Specialpage />} />

                {/* Shortcourses */}
                <Route path='/short-courses-in-lahore' element={<Lahore />} />
                <Route path='/short-courses-in-multan' element={<Multan />} />
                <Route path='/short-courses-in-rawalpindi' element={<Rawalpindi />} />
                <Route path='/short-courses-in-karachi' element={<Karachi />} />
                <Route path='/short-courses-in-faisalabad' element={<Faisalabad />} />
                <Route path='/short-courses-in-azad-kashmir' element={<Azadkashmir />} />
                <Route path='/short-course-in-sialkot' element={<Sialkot />} />
                <Route path='/short-courses-in-gujranwala' element={<Gujranwala />} />


                {/* <Route path='/allcourses' element={<Allcourses/>} /> */}
                {/* <Route path='/c' element={<Carousal/>} /> */}

            </Routes>

            <Footer />
        </>
    )
}

export default Router
