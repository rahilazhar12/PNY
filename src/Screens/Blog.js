import React, { useState } from 'react'
import PNYlogo from '../Assets/images/pny.png'
import cardData from '../Components/Data'
import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'

const Blog = () => {

    const [filter, setFilter] = useState('All')


    const handlefilter = (filtercriteria)=>{
        setFilter(filtercriteria)
    }

    const filterData = cardData.filter((item)=>{
           return filter === "All" ||  item.title.includes(filter)
    })
    return (
        <main>
            {/* Section-1 */}
            <section className='lg:h-16'>
                <div className="container-lg  mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7  lg:grid-cols-12">

                    <div className='image py-2 mx-10 col-span-1 max-sm:flex max-sm:justify-center md:col-span-1 md:w-20 h-15'>
                        <img src={PNYlogo} alt="PNY Logo" />
                    </div>

                    <div className='button py-2 px-4 sm:col-span-1 md:col-span-4 lg:col-span-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start'>
                        <button className='bg-[#308AFF] text-white w-full px-5 py-2 md:w-28 rounded mb-2 sm:mb-0 sm:mr-6 max-xl:mx-10'>Categories</button>
                        <input className='w-full border px-4 h-9 md:max-w-md  rounded' placeholder='Search for the software or skills you want to learn' type="text" />
                    </div>

                    <div className='sm:col-span-1 md:col-span-2  lg:col-span-3'>
                        <ul className='flex space-x-6 justify-end py-5 mr-10 max-sm:justify-center'>
                            <li className='font-bold hover:text-blue-400'><a href="">About</a></li>
                            <li className='font-bold hover:text-blue-400'><a href="">Blog</a></li>
                            <li className='font-bold hover:text-blue-400'><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Section-2 */}
            <section className='bg-[#152438] h-auto sm:h-96'>
                <div className="main grid text-white justify-center">
                    <div className="blog text-3xl font-semibold px-6 mt-8 sm:text-5xl sm:px-20 sm:mt-20 text-center">Blogs and insights</div>
                    <div className="latest text-center mt-3 sm:mt-6">The latest industry news, interviews, technologies, and resources.</div>
                </div>

                <div className="list text-white">
                    <ul className='flex flex-wrap justify-center mt-6 sm:mt-10'>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('All')}>All</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Technology')}>Technology</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Marketing')}> Marketing</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Software')}>Software</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Education')}>Education</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Short Courses in Islamabad')}>Short Courses in Islamabad</li>
                    </ul>
                    <ul className='flex flex-wrap justify-center mt-3 sm:mt-6'>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Short courses in Faisalabad')}>Short courses in Faisalabad</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('IT Softwares')}>IT Softwares</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('SEO')}>SEO</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Design')}>Design</li>
                        <li className='border rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer' onClick={() => handlefilter('Photography')}>Photography</li>
                    </ul>
                </div>
            </section>

            {/* Section-3 */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
                {filterData.map((item, index) => (
                    <Card
                        key={index}
                    >
                        <img style={{ width: '500px', height: '300px' }} src={item.imgSrc} alt="" />

                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                        </h5>
                        <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
                            {item.description1}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {item.description}
                        </p>
                        <Button>
                            <p>
                                Read more
                            </p>
                        </Button>
                    </Card>
                ))}
            </section>


        </main>
    )
}

export default Blog
