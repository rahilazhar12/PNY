import React, { useState, useEffect } from 'react'
import { GalleryData } from '../Components/Data'
import { Link } from 'react-router-dom'
import Searcbar from '../Components/Searchbar'
import axios from 'axios'


const Gallery = () => {

    const [image, setImage] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                let response = await axios.get("https://www.pnytrainings.com/api/gallery")
                setImage(response.data.galleries)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [])

    console.log(image, 'image____________')
    return (
        <>
            <main>
                <section>
                    <Searcbar />
                </section>
                <section>
                    <div className=' bg-[#152438] text-white h-[306px] flex flex-col justify-center items-center'>
                        <div className=' text-[48px] font-semibold'>Gallery</div>
                        <div className=' text-[20px] font-normal'>Find Our Blessing & Success Events</div>
                    </div>
                </section>

                <section>
                    <div className='grid xl:grid-cols-3  xl:ml-10 lg:grid-cols-3 p-5 md:grid-cols-2 gap-3'>
                        {
                            image.map((item) => {
                                return (
                                    <>
                                        <div className="block border border-[#308AFF] xl:w-[398px] lg:w-[300px] md:w-[350px] p-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                                <Link to={`/imagesshow/${item.id}`}>
                                                    <img className="rounded-t-lg" src={item.gallery_image} alt={item.description} />
                                                </Link>

                                            </div>
                                            <div className="">
                                                <p className="text-base text-[#308AFF]  font-normal dark:text-neutral-200">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default Gallery