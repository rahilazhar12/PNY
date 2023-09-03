import React from 'react'
import { Link } from 'react-router-dom'
import PNYlogo from '../Assets/images/pny.png'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const Searchbar = () => {
    return (
        <Flowbite>
            <div>
                <section>
                    <div className="container-lg  mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7  lg:grid-cols-12">

                        <div className='image py-2 mx-10 col-span-1 max-sm:flex max-sm:justify-center md:col-span-1 md:w-20 h-15'>
                            <img src={PNYlogo} alt="PNY Logo" />
                        </div>

                        <div className='button py-2 px-4 sm:col-span-1 md:col-span-4 lg:col-span-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start'>
                            <button className='bg-[#308AFF] text-white w-full px-5 py-2 md:w-28 rounded mb-2 sm:mb-0 sm:mr-6 max-xl:mx-10'>Categories</button>
                            <input className='w-full border px-4 h-9 md:max-w-md  rounded' placeholder='Search for the software or skills you want to learn' type="text" />
                        </div>
                       
                        <div className='sm:col-span-1 md:col-span-2  lg:col-span-3 text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down'>
                            <ul className='flex space-x-6 justify-end py-5 mr-10 max-sm:justify-center'>
                                <li className='font-bold hover:text-blue-400'><Link to="/">Home</Link></li>
                                <li className='font-bold hover:text-blue-400'><Link to="/about">About</Link></li>
                                <li className='font-bold hover:text-blue-400'><Link to="/blog">Blog</Link></li>
                                <li className='font-bold hover:text-blue-400'><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>


                    </div>
                </section>
            </div>
        </Flowbite>

    )
}

export default Searchbar
