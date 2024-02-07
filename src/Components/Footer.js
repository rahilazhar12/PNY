import React, { useState, useEffect } from 'react'
import arfatower from '../Assets/image/arfa tower.png'
import iqbaltown from '../Assets/image/iqbal town.png'
import johartown from '../Assets/image/Jahor town.png'
import multan from '../Assets/image/Multan.png'
import allbrances from '../Assets/image/Group 48095475.png'
import pnylogonew from '../Assets/image/PNY Trainings logo.png'
import pnylogodark from '../Assets/image/pny logo dark.jpg.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate()



    const redirectToCity = (cityName) => {
        navigate(`/city/${cityName}`);
    };
    const redirectshortcourses = (course) => {
        navigate(`/shortcourses/${course}`);
    };

    useEffect(() => {
        fetch('https://www.pnytrainings.com/api/footer/courses')
            .then(response => response.json())
            .then(data => setCourses(data.courses_links))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);


    return (
        <div>

            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside className='lg:w-[361px]'>
                    <img className='block dark:hidden' src={pnylogonew} alt="" width={159} />
                    <img className='dark:block hidden' src={pnylogodark} alt="" width={159} />
                    <p> <span className='font-bold'>Head Office</span> <br />
                        Office # 1, Level # 14, Arfa Software Technology Park,
                        Ferozepur Road Lahore, Pakistan
                        Phone: 03041111774
                        Whatsapp: 03201443744</p>
                </aside>
                <nav className='max-sm:text-sm'>
                    <header className=" text-black font-bold  dark:text-white">Quick Link</header>
                    <Link to='/faqs' className="link link-hover">FAQs</Link>
                    <Link className="link link-hover">Admission</Link>
                    <Link to='/gallery' className="link link-hover">Gallery</Link>
                    <Link to='/terms-conditions' className="link link-hover">Terms & Conditions</Link>
                    <Link to='/privacy-policy' className="link link-hover">Privacy Policy</Link>
                </nav>
                <nav>
                    <header className="text-black font-bold dark:text-white">Offered Courses</header>
                    <Link className="link link-hover">Meta Social Media Marketing Bootcamp</Link>
                    <Link className="link link-hover">Instagram Marketing Expert Bootcamp</Link>
                    <Link className="link link-hover">Deep Learning and Computer Vision for Python</Link>
                    <Link className="link link-hover">Short Courses in Multan</Link>
                    <Link className="link link-hover">Sketchup bootcamp - Creating interior with SketchUp</Link>
                    <Link className="link link-hover">Bootcamp Advacne UI/UX with Figma</Link>
                    <Link className="link link-hover">Bootcamp - Python</Link>
                </nav>

                <nav>
                    <header className="text-black font-bold dark:text-white">Language Courses</header>
                    <Link className="link link-hover">Spoken English Language Course</Link>
                    <Link className="link link-hover">IELTS prepration course</Link>
                    <Link className="link link-hover">Pearson Test of English</Link>
                </nav>
                <nav>
                    <h1 className="text-black font-bold dark:text-white">Short Courses</h1>

                    <div className='flex flex-col space-y-2'>
                        <Link to='/short-courses-in-lahore'>Short courses in Lahore</Link>
                        <Link to='/short-courses-in-rawalpindi'>Short courses in Rawalpindi</Link>
                        <Link to='/short-courses-in-karachi'>Short courses in Karachi</Link>
                        <Link to='/short-courses-in-faisalabad'>Short courses in Faisalabad</Link>
                        <Link to='/short-courses-in-gujranwala'>Short courses in Gujranwala</Link>
                        <Link to='/short-courses-in-multan'>Short courses in Multan</Link>
                        <Link to='/blog/short-course-in-sialkot'>Short courses in Sialkot</Link>
                        <Link to='/short-courses-in-azad-kashmir'>Short courses in Azad-Kashmir</Link>

                    </div>


                </nav>
            </footer>

            <div className=' border-b-2 border-blue-600'></div>

            {/* Our Branches--------------------------------------------------------------------------------------------- */}
            <div className=' text-center bg-base-300 text-xl font-semibold p-2'>Our Branches</div>
            <footer className="footer p-10 grid lg:grid-cols-12 md:grid-cols-12 bg-base-200 text-base-content">


                <nav className='col-span-2'>

                    <img src={arfatower} alt="" />
                    <header className="text-black dark:text-white font-bold">Arfa Tower (Head Office)</header>
                    <p className="  lg:w-[150px]">Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road Lahore</p>

                </nav>
                <nav className='col-span-2' >
                    <img src={iqbaltown} alt="" />
                    <header className="text-black font-bold dark:text-white">Iqbal Town</header>
                    <Link className="  lg:w-[150px]">743 B Kashmir Block Allama Iqbal Town Lahore</Link>

                </nav>
                <nav className='col-span-2'>
                    <img src={johartown} alt="" />
                    <header className="text-black font-bold dark:text-white">Johar Town</header>
                    <Link className="  lg:w-[150px]">1st Floor 256 / A, Block R2 Near Shaukat Khanam Hospital, next to Standard Chartered, Lahore</Link>

                </nav>
                <nav className='col-span-2'>
                    <img src={multan} alt="" />
                    <header className="text-black font-bold dark:text-white">Multan</header>
                    <Link className=" lg:w-[150px]">237-B, Model Town, Main Boulevard, Multan</Link>
                </nav>
                <nav className='col-span-2'>
                    <img src={multan} alt="" />
                    <header className="text-black font-bold dark:text-white">Rawalpindi</header>
                    <Link className=" lg:w-[150px]">Office # 604, Alpha Techno Square NASTP, Old Airport Nur khan Airbase, Chaklala Cantt, Rawalpindi.</Link>
                </nav>
                <nav>
                    <img src={allbrances} alt="" />
                    <header className="text-black font-bold dark:text-white">View All Branches</header>
                    <Link className="link link-hover w-[150px]"> View All Branches</Link>
                    <Link to='https://www.dmca.com/Protection/Status.aspx?ID=7c917940-1e0d-4855-93f4-76d5632f1b81&refurl=https://www.pnytrainings.com/'>
                        <img className=' cursor-pointer' src="https://www.locklizard.com/wp-content/uploads/2023/04/dmca-protected.png" alt="" />
                    </Link>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p className='text-xl font-bold '>Courses We Offers in Cities</p>
                    <div> 
                        {["Lahore", "Rawalpindi", "Karachi", "Multan", "Sialkot", "Faisalabad", "Gujranwala", "Azad Kashmir", "Islamabad"].map((city) => (
                            <button key={city} className="btn btn-link text-black dark:text-white" onClick={() => redirectToCity(city)}>
                                {city}
                            </button>
                        ))}
                    </div>
                </aside>
            </footer>

            <section className=' grid lg:grid-cols-6  gap-4 p-3 mb-10 '>
                <div className=' lg:col-span-6 max-sm:text-center'>Copyright © 2023 - All right reserved by PNY Trainings</div>
                <div className='  cursor-pointer flex space-x-4 max-sm:mx-auto'>


                    <div className=' cursor-pointer'> <Link to="https://twitter.com/PnyTrainings" className=' cursor-pointer' target='_blank'>
                        <FaTwitter className='text-xl hover:text-blue-500' />
                    </Link></div>


                    <div> <Link to="https://www.facebook.com/PNY.Trainings" className=' cursor-pointer' target='_blank'>
                        <FaFacebook className='text-xl hover:text-blue-500' />
                    </Link></div>


                    <div> <Link to="https://pk.linkedin.com/company/pny-trainings" className=' cursor-pointer' target='_blank'>
                        <FaLinkedin className='text-xl hover:text-blue-700' />
                    </Link>
                    </div>


                    <div> <Link to="https://www.youtube.com/channel/UCdkE8Zm_dNclx3B7s-t6pBQ" className=' cursor-pointer' target='_blank'>
                        <FaYoutube className='text-xl hover:text-red-600' />
                    </Link>
                    </div>


                    <div> <Link to="https://www.instagram.com/pny.trainings/" className=' cursor-pointer' target='_blank'>
                        <FaInstagram className='text-xl hover:text-pink-600' />
                    </Link>
                    </div>


                </div>
            </section>


        </div>
    )
}

export default Footer
