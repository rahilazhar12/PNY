import React, { useState } from 'react'
import Searchbar from '../Components/Searchbar'
import { Card } from 'flowbite-react'
import arfatower from '../Assets/image/Image.png'
import arfa from '../Assets/image/arfa.png'
import { contactus } from '../Components/Data'
import { Link } from 'react-router-dom'

const Contactus = () => {


    return (
        <>
            <section>
                <Searchbar />
            </section>



            <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center'>
                <div className='text-[48px] max-sm:text-[24px] font-semibold'>Contact Us</div>
                <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div>
            </section>

            <section className='bg-[#f0f2f5]'>
                <div className="grid lg:grid-cols-2">
                    <div>
                        <img className=' lg:h-full md:w-full' src={arfatower} alt="" />
                    </div>
                    <div>
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us with Your Queries</h2>
                            {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">You can reach us anytime via <span className='text-[#308AFF]'>hr@pnytrainings.com</span></p> */}
                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="you@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+92 (303) 4243782" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">How can we help?</label>
                                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tell us a little about the project..." defaultValue={""} />
                                </div>
                                <div></div>
                            </form>
                            <div className='mb-5 text-[#525A64]'>Select courses (optional)</div>
                            <div className="grid grid-cols-2">
                                <div className='mb-3'> <input type="checkbox" class="checkbox checkbox-sm " /> One Year Diploma</div>
                                <div className='mb-3'><input type="checkbox" class="checkbox checkbox-sm" /> Marketing</div>
                                <div className='mb-3'><input type="checkbox" class="checkbox checkbox-sm" /> Web Development</div>
                                <div className='mb-3'><input type="checkbox" class="checkbox checkbox-sm" /> Art & Design</div>
                                <div className='mb-3'><input type="checkbox" class="checkbox checkbox-sm" /> Amazon Courses</div>
                                <div className='mb-3'><input type="checkbox" class="checkbox checkbox-sm" /> Other</div>
                            </div>
                            <div className='flex justify-center mt-5'><button className='bg-blue-500 w-full py-[12px] px-[20px] rounded-lg text-white'>Submit</button></div>
                        </div>



                    </div>
                </div>
            </section>

            <section className='mt-10 lg:mb-10 lg:space-y-3'>
                <div className='lgh'>Our Branches</div>
                <div className='text-center text-[20px] font-medium'>Find our more Branches in Pakistan </div>
            </section>

            <section>
                <div className="grid justify-center xl:ml-8 lg:ml-0 md:ml-5 lg:grid-cols-3 md:grid-cols-2  lg:gap-x-10 lg:px-10  xl:p-10  gap-y-10  max-sm:p-3">
                    {
                        contactus.map((item) => {
                            return (
                                <>
                                    <div class="card xl:w-[408px]  lg:w-[308px] md:w-[350px]  max-sm:w-full bg-base-100 shadow-2xl">
                                        <figure><img className='p-6' src={item.image} alt="" /></figure>
                                        <div class="card-body">
                                            <h2 class="card-title text-[24px]  font-semibold">{item.title}</h2>
                                            <p className='text-[16px]'>{item.description}</p>
                                            <div className='flex justify-between mt-3'>
                                                <div className='text-[16px]'><span className='text-[#308AFF] mr-3'>Phone</span>{item.phone}</div>
                                                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                                    Visit Us
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </section>

        </>
    )
}

export default Contactus
