import React from 'react'
import arfatower from '../Assets/image/arfa tower.png'
import iqbaltown from '../Assets/image/iqbal town.png'
import johartown from '../Assets/image/Jahor town.png'
import multan from '../Assets/image/Multan.png'
import allbrances from '../Assets/image/Group 48095475.png'
import pnylogonew from '../Assets/image/PNY Trainings logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Footer = () => {

    const navigate = useNavigate()


    const redirectToCity = (cityName) => {
        navigate(`/citywisedata/${cityName.toLowerCase()}`);
    };


    return (
        <div>

            <footer class="footer p-10 bg-base-200 text-base-content">
                <aside className='lg:w-[361px]'>
                    <img src={pnylogonew} alt="" width={159} />
                    <p> <span className='font-bold'>Head Office</span> <br />
                        Office # 1, Level # 14, Arfa Software Technology Park,
                        Ferozepur Road Lahore, Pakistan
                        Phone: 03041111774
                        Whatsapp: 03201443744</p>
                </aside>
                <nav className='max-sm:text-sm'>
                    <header class=" text-black font-bold">Quick Link</header>
                    <Link to='/faqs' class="link link-hover">FAQs</Link>
                    <a class="link link-hover">Admission</a>
                    <a class="link link-hover">Event</a>
                    <Link to='/gallery' class="link link-hover">Gallery</Link>
                    <a class="link link-hover">Instructors</a>
                    <Link to='/terms-conditions' class="link link-hover">Terms & Conditions</Link>
                    <Link to='/privacy-policy' class="link link-hover">Privacy Policy</Link>
                </nav>
                <nav>
                    <header class="text-black font-bold">Offered Courses</header>
                    <a class="link link-hover">Meta Social Media Marketing Bootcamp</a>
                    <a class="link link-hover">Instagram Marketing Expert Bootcamp</a>
                    <a class="link link-hover">Deep Learning and Computer Vision for Python</a>
                    <a class="link link-hover">Short Courses in Multan</a>
                    <a class="link link-hover">Sketchup bootcamp - Creating interior with SketchUp</a>
                    <a class="link link-hover">Bootcamp Advacne UI/UX with Figma</a>
                    <a class="link link-hover">Bootcamp - Python</a>
                </nav>
                {/* <nav>
                    <header class="footer-title">Company</header>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Careers</a>
                    <a class="link link-hover">Contact us</a>
                    <a class="link link-hover">Blog</a>
                </nav> */}
                <nav>
                    <header class="text-black font-bold">Language Courses</header>
                    <a class="link link-hover">Spoken English Language Course</a>
                    <a class="link link-hover">IELTS prepration course</a>
                    <a class="link link-hover">Pearson Test of English</a>
                </nav>
            </footer>

            <div className=' border-b-2 border-blue-600'></div>

            {/* Our Branches--------------------------------------------------------------------------------------------- */}
            <div className=' text-center bg-base-300 text-xl font-semibold p-2'>Our Branches</div>
            <footer class="footer p-10 grid lg:grid-cols-12 md:grid-cols-12 bg-base-200 text-base-content">


                <nav className='col-span-2'>

                    <img src={arfatower} alt="" />
                    <header class="text-black font-bold">Arfa Tower (Head Office)</header>
                    <a class="link link-hover  lg:w-[150px]">Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road Lahore</a>

                </nav>
                <nav className='col-span-2' >
                    <img src={iqbaltown} alt="" />
                    <header class="text-black font-bold">Iqbal Town</header>
                    <a class="link link-hover  lg:w-[150px]">743 B Kashmir Block Allama Iqbal Town Lahore</a>

                </nav>
                <nav className='col-span-2'>
                    <img src={johartown} alt="" />
                    <header class="text-black font-bold">Johar Town</header>
                    <a class="link link-hover  lg:w-[150px]">1st Floor 256 / A, Block R2 Near Shaukat Khanam Hospital, next to Standard Chartered, Lahore</a>

                </nav>
                <nav className='col-span-2'>
                    <img src={multan} alt="" />
                    <header class="text-black font-bold">Multan</header>
                    <a class="link link-hover lg:w-[150px]">237-B, Model Town, Main Boulevard, Multan</a>
                </nav>
                <nav className='col-span-2'>
                    <img src={multan} alt="" />
                    <header class="text-black font-bold">Rawalpindi</header>
                    <a class="link link-hover lg:w-[150px]">Office # 604, Alpha Techno Square NASTP, Old Airport Nur khan Airbase, Chaklala Cantt, Rawalpindi.</a>
                </nav>
                <nav>
                    <img src={allbrances} alt="" />
                    <header class="text-black font-bold">View All Branches</header>
                    <a class="link link-hover w-[150px]"> View All Branches</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p className='text-xl font-bold'>Courses We Offers in Cities</p>
                    <div>
                        {["Lahore", "Rawalpindi", "Karachi", "Multan", "Sialkot", "Faisalabad", "Gujranwala", "Azad Kashmir", "Islamabad"].map((city) => (
                            <button key={city} className="btn btn-link" onClick={() => redirectToCity(city)}>
                                {city}
                            </button>
                        ))}
                    </div>
                </aside>
            </footer>


            <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside>
                    <p>Copyright © 2023 - All right reserved by PNY Trainings</p>
                </aside>
                <nav class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
