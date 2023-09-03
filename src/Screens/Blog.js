import React, { useState } from 'react'
import PNYlogo from '../Assets/images/pny.png'
import cardData from '../Components/Data'
import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Searchbar from '../Components/Searchbar'

const Blog = () => {

    const [filter, setFilter] = useState('All')


    const handlefilter = (filtercriteria) => {
        setFilter(filtercriteria)
    }

    const filterData = cardData.filter((item) => {
        return filter === "All" || item.title.includes(filter)
    })
    return (
        <main>
            {/* Section-1 */}
            <Searchbar />

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
