import React from 'react'
import { GalleryData } from '../Components/Data'
import { Link } from 'react-router-dom'


const Gallery = () => {
    return (
        <>
            <main>
                <section>
                    <div className=' bg-[#152438] text-white h-[306px] flex flex-col justify-center items-center'>
                        <div className=' text-[48px] font-semibold'>Gallery</div>
                        <div className=' text-[20px] font-normal'>Find Our Blessing & Success Events</div>
                    </div>
                </section>

                <section>
                    <div className='grid xl:grid-cols-3 xl:ml-10 lg:grid-cols-3 p-5 md:grid-cols-2 gap-y-5'>
                        {
                            GalleryData.map((item) => {
                                return (
                                    <>
                                        <div className="block  xl:w-[398px] lg:w-[300px] md:w-[350px] p-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                                <Link to={`/imagesshow/${item.id}`}>
                                                <img className="rounded-t-lg" src={item.image} alt 
                                                 /> </Link>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-base text-[#308AFF] text-[18px] font-normal dark:text-neutral-200">
                                                   {item.description}
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