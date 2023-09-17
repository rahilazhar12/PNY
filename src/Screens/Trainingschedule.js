import React, { useState } from 'react'
import Searchbar from '../Components/Searchbar'

const Trainingschedule = () => {

    const [activeCity, setActiveCity] = useState('');
    const [activebutton, setActivebutton] = useState('')

    const handleCityClick = (city) => {
        setActiveCity(city);
    };

    const handleactivebutton = (activebutton) => {
        setActivebutton(activebutton)
    }
    return (
        <>
            <section>
                <Searchbar />
            </section>

            <section>
                <div className="grid xl:grid-cols-3 p-5">
                    <div className='lg:col-span-2 max-sm:col-span-3 text-[32px]  max-sm:text-center font-semibold'>Training Schedule</div>
                    <div className='flex  gap-3 max-sm:flex-col   justify-end max-sm:col-span-3'>
                        <div><button className='px-[16px] py-[10px] max-sm:w-full border rounded-xl text-[14px] text-[#308AFF] font-medium border-[#308AFF]'>Enrol Now (Limited seats left)</button></div>
                        <div><button className='px-[16px] py-[10px] max-sm:w-full rounded-xl bg-blue-500 text-white'>Training Schedule</button></div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex gap-3 p-6 border-b text-lg font-semibold">
                    <div
                        className={`cursor-pointer ${activeCity === 'Lahore' ? 'text-blue-500 border-b border-blue-500' : ''}`}
                        onClick={() => handleCityClick('Lahore')}
                    >
                        Lahore
                    </div>
                    <div
                        className={`cursor-pointer ${activeCity === 'Rawalpindi' ? 'text-blue-500 border-b border-blue-500' : ''}`}
                        onClick={() => handleCityClick('Rawalpindi')}
                    >
                        Rawalpindi
                    </div>
                </div>
            </section>

            <section>
                <div className="grid lg:grid-cols-3 p-5">
                    <div className=' col-span-2 lg:flex max-sm:p-2 max-sm:space-y-2 lg:space-x-2'>
                        <div className={`cursor-pointer ${activebutton === 'Arfatower' ? 'bg-blue-500 border-b rounded-md border-blue-500 text-white' : ''}`}
                            onClick={() => handleactivebutton('Arfatower')}><button className='px-[16px] py-[10px] rounded-md max-sm:w-full  font-semibold border border-black/25'>Arfa Tower</button></div>

                        <div className={`cursor-pointer ${activebutton === 'Johar Town' ? 'bg-blue-500 border-b rounded-md border-blue-500 text-white' : ''}`}
                            onClick={() => handleactivebutton('Johar Town')}><button className='px-[16px] py-[10px] rounded-md max-sm:w-full  font-semibold border border-black/25'>Johar Town</button></div>

                        <div className={`cursor-pointer ${activebutton === 'Iqbal Town' ? 'bg-blue-500 border-b rounded-md border-blue-500 text-white' : ''}`}
                            onClick={() => handleactivebutton('Iqbal Town')}><button className='px-[16px] py-[10px] rounded-md max-sm:w-full  font-semibold border border-black/25'>Iqbal Town</button></div>


                        <div className='flex'>
                            <input className='border rounded-md lg:w-[500px] max-sm:h-[40px] max-sm:w-full' type="text" placeholder='Search for the courses/seminars' />
                        </div>  
                    </div>


                    <div className='flex lg:justify-end'>
                        <button className='border border-black/25 px-[16px] py-[10px] rounded-md'><span className='mr-3'><i class="fa-solid fa-calendar"></i></span>Starting Date</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trainingschedule
