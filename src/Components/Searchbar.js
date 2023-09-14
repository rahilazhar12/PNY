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
            <section className='p-4 shadow-md'>
                <div className="grid lg:grid-cols-12 md:grid-cols-8 max-sm:space-y-1">
                    <div className=' max-sm:flex max-sm:justify-center  lg:col-span-1 '>
                        <img className='' src={PNYlogo} alt="" /> </div>

                    <div className=' lg:col-span-2 md:col-span-2'>
                        <div className=' max-sm:flex max-sm:justify-center'>
                            <div class="dropdown dropdown-hover">
                                <label tabindex="0" class="btn max-sm:w-64 lg:w-[140px] md:w-[160px] xl:w-[220px]  h-[38px]  bg-[#308AFF] hover:text-black text-white hover:bg-[#308AFF] btn-sm"> <BiCategory /> Categories</label>
                                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Searchbar */}
                    <div className=' max-sm:flex max-sm:justify-center lg:col-span-5 xl:col-span-4 md:col-span-5'>
                        <input className='border max-sm:p-3 lg:w-full md:w-full h-9 rounded' placeholder='Search for the software or skills you want to learn' type="text" />
                    </div>

                    <div className=' lg:col-span-4 xl:col-span-5 md:col-span-12'>
                        <div className=' text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down lg:mt-2'>
                            <ul className='flex max-sm:justify-center gap-5  lg:justify-end'>
                                {/* <li className='font-bold hover:text-blue-400 mt-1 lg:hidden xl:block md:hidden max-sm:hidden'>
                                    <button className='btn btn-xs blinking-text btn-warning'>Fast Track Pro Bootcamps in 2023</button>
                                </li> */}
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/">Home</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/about">About</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/blog">Blog</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/contact">Design</Link></li>
                                {/* <li className='font-bold hover:text-blue-400 mt-1 xl:hidden max-sm:hidden'>
                                    <button className='btn btn-xs blinking-text btn-warning'>Fast Track Pro Bootcamps in 2023</button>
                                </li> */}

                            </ul>
                        </div>
                        {/* sm */}
                        {/* <div className='text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down md:hidden lg:hidden'>
                            <ul className=' flex max-sm:justify-center mt-2'>
                                <button className='btn btn-xs blinking-text btn-warning'>Fast Track Pro Bootcamps in 2023</button>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>

        </Flowbite>
    )
}

export default Searchbar
