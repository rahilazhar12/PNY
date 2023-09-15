import React from 'react'
import map from '../Assets/images/noun-pakistan-264183 1.png'

const Map = () => {
    return (
        <section className=' lg:mt-5'>
            <div className='lgh'>We Build Leaders For Professional Community</div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 lg:px-20 lg:py-10 md:px-3 md:py-10 max-sm:p-1 ">
                <div className='max-sm:order-1 '> 
                    <div className='bg-blue-500 rounded-xl text-white xl:w-[541px] xl:h-[239px] xl:py-[47px] xl:px-[32px]  lg:w-[362px] lg:h-[200px] lg:px-[13px] lg:py-[26px] md:w-[362px] md:h-[200px] md:px-[10px] md:py-[20px] max-sm:px-3 max-sm:py-10'>
                        <div className='text-[30px] font-semibold max-sm:text-[24px]'><span className='mr-3'><i class="fa-solid fa-binoculars fa-fade"></i></span>Vision Statement</div>
                        <div className=' text-[18px] max-sm:text-[16px] font-normal xl:w-[337px]'>Nation leading professional service provider by exploring and utilizing the unique ideas in the world of digital technologies.</div>
                    </div>

                    <div className='bg-red-500 text-white rounded-xl mt-2 xl:py-[47px] xl:px-[32px] xl:w-[541px] xl:h-[311px] lg:w-[362px] lg:h-[250px] lg:px-[13px] lg:py-[26px] md:w-[362px] md:h-[250px] md:px-[10px] md:py-[20px]  max-sm:px-3 max-sm:py-10'>
                        <div className='text-[30px] font-semibold'> <span className='mr-3'><i class="fa-solid fa-bullseye fa-fade"></i></span>Our Mission</div>
                        <div className='text-[18px] font-normal xl:w-[480px] leading-7 max-sm:text-[16px]'>To design and maintain the quality of knowledge based capacity building programs to empower with new job oriented technical courses and bring positive transformation on their business and professional growth.</div>
                    </div>
                </div>





                <div className=' max-sm:p-2'>
                    <img src={map} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Map
