import React from 'react'
import map from '../Assets/images/noun-pakistan-264183 1.png'

const Map = () => {
    return (
        <section className=' lg:mt-5'>
            <div className='lgh'>We Build Leaders For professional work</div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 lg:px-20 lg:py-10 md:px-3 md:py-10 max-sm:p-1 ">
                <div className='max-sm:order-1 '> 
                    <div className='bg-blue-500 rounded-xl text-white xl:w-[541px] xl:h-[239px] xl:py-[47px] xl:px-[32px]  lg:w-[362px] lg:h-[200px] lg:px-[13px] lg:py-[26px] md:w-[362px] md:h-[200px] md:px-[10px] md:py-[20px] max-sm:px-3 max-sm:py-10'>
                        <div className='text-[30px] font-semibold max-sm:text-[24px]'><span className='mr-3'><i class="fa-solid fa-binoculars fa-fade"></i></span>Our Vision </div>
                        <div className=' text-[18px] md:text-[16px] max-sm:text-[16px] leading-7 font-normal xl:w-[480px]'>Our vision is to build a world where every young individual has the skills and knowledge to thrive in the digital age. We aim to be a catalyst for global innovation and socio-economic development.</div>
                    </div>

                    <div className='bg-red-500 text-white rounded-xl mt-2 xl:py-[47px] xl:px-[32px] xl:w-[541px] xl:h-[311px] lg:w-[362px] lg:h-[250px] lg:px-[13px] lg:py-[26px] md:w-[362px] md:h-[250px] md:px-[10px] md:py-[20px]  max-sm:px-3 max-sm:py-10'>
                        <div className='text-[30px] font-semibold'> <span className='mr-3'><i class="fa-solid fa-bullseye fa-fade"></i></span>Our Mission</div>
                        <div className='text-[18px] font-normal xl:w-[480px] leading-7 max-sm:text-[16px]'>Our mission is to empower youth through accessible, high-quality digital training and courses. We strive to foster lifelong learning, inspire innovation, and create opportunities for personal and professional growth</div>
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
