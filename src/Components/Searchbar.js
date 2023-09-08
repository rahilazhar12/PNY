import React from 'react'
import { Link } from 'react-router-dom'
import PNYlogo from '../Assets/images/pny.png'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { motion } from 'framer-motion';
import { BiCategory } from 'react-icons/bi'
import pnylogonew from '../Assets/image/PNY Trainings logo.png'

const Searchbar = () => {
    return (
        <Flowbite>

            <div>
                <section className='shadow-xl'>
                    <div className="container-lg  mx-auto  grid grid-cols-1  md:grid-cols-7  lg:grid-cols-12">

                        <div className='image py-2 mx-10 col-span-1 max-sm:flex max-sm:justify-center md:col-span-1 md:w-20 h-15'>
                            <img src={PNYlogo} alt="PNY Logo" />
                        </div>

                        <div className='button  py-2 px-4 sm:col-span-1 md:col-span-3 lg:col-span-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start'>

                            <div class="dropdown dropdown-hover">

                                <label tabindex="0" class="btn max-sm:w-64 h-10 bg-[#308AFF] hover:text-black text-white hover:bg-[#308AFF] btn-sm  m-1"> <BiCategory /> Categories</label>
                                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>

                            <input className='w-full border px-4 h-9 md:max-w-md  rounded' placeholder='Search for the software or skills you want to learn' type="text" />
                        </div>

                        <div className='md:col-span-3 lg:col-span-3 text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down'>
                            <ul className='flex gap-6 md:justify-center lg:justify-end md:py-6 lg:py-6 lg:mr-10 max-sm:justify-center'>

                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/">Home</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/about">About</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/blog">Blog</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* sm */}
                        <div className='text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down md:hidden lg:hidden'>
                            <ul className=' flex max-sm:justify-center py-2'>
                                <button className='btn btn-xs blinking-text btn-warning'>Fast Track Pro Bootcamps in 2023</button>
                            </ul>
                        </div>


                    </div>
                </section>
            </div>
        </Flowbite>

    )
}

export default Searchbar
