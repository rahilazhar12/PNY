import React from 'react'
import Searchbar from '../Components/Searchbar'
import { Flowbite } from 'flowbite-react';
import grouppicture from '../Assets/images/responsive.png'
import five from '../Assets/image/five.png'
import { aboutdata } from '../Components/Data';
import ladymobile from '../Assets/image/ladymobile.png'
import TypingAnimation from './Typinganimation';
import wahab from '../Assets/image/Wahab-Yunuspng.png'


const AboutUs = () => {
  return (
    <Flowbite>
      <main className='bg-white dark:bg-slate-800   ring-1 ring-slate-900/5 shadow-xl'>
        <section>
          <div>
            <Searchbar />
          </div>
        </section>


        {/* Section-1 */}
        <section className='bg-[#152438] max-sm:h-auto md:p-20 lg:h-[300px]  text-white max-sm:py-10'>
          <div className="grid ">
            <div className='lg:text-5xl max-sm:text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  font-bold max-sm:text-3xl md:text-center md:text-3xl'>About Us</div>
            <div className='text-center'><TypingAnimation /></div>
            
           
          </div>
        </section>

        {/* Section-2 */}
        <section className='grid lg:grid-cols-12 lg:h-[400px] max-sm:h-auto md:mt-5 md:px-10 '>
          <div className='col-span-6 max-sm:order-1 lg:p-10 max-sm:p-2 max-sm:space-y-2 space-y-3'>
            <div className="lg:text-[42px] md:text-3xl max-sm:text-3xl font-bold">Who we are?</div>
            <div className=" lg:text-[26px] max-sm:text-2xl md:text-2xl  font-bold max-sm:text-[#F10900]">PNY Trainings: A renowned IT Training institute in Pakistan since 2014</div>
            <div className="text-base  text-[20px] text-justify max-sm:text-center"><p className='lg:w-[550px]'>Offering professional IT diplomas and short courses for students and professionals seeking career growth. As pioneers in comprehensive training, we have helped thousands of students secure lucrative jobs in the expanding IT industry. With top-level industry experienced instructors and multiple branches nationwide, we are committed to empowering individuals in their IT journey. Join us today and unlock your potential in the world of technology.</p></div>
          </div>
          <div className='col-span-6 lg:h-80  flex justify-end md:justify-center md:mt-3'>
            <img className='lg:w-[591px] lg:h-[375px]' src={grouppicture} alt="" />
          </div>
        </section>

        {/* section-3 */}
        <section className=' lg:mb-10 lg:mt-10 bg-[#F9FAFB] p-10'>
          <div className='grid lg:grid-cols-4'>
            <div className=' col-span-2  xl:ml-36 xl:mt-20 lg:ml-2 lg:justify-start lg:mt-20 md:justify-center xl:justify-start flex md:mt-10'>
              <img src={ladymobile} alt="" />
            </div>
            <div className='col-span-2 md:space-y-5'>
              <div className='text-[#F10900] font-semibold md:text-center lg:text-start xl:text-start max-sm:text-center'>Our Worth Our Achievements!</div>
              <div className='lg:text-[42px] xl:w-[700px] font-bold xl:text-start lg:text-start md:text-center max-sm:text-center'>Our Multiple branches advanced courses, impactful MOU’s and Thousands of Alumni</div>
              <div className=' md:flex md:justify-center xl:justify-start lg:justify-start'>
                <img src={five} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Section-4 */}
        <section className=' xl:h-auto lg:h-auto md:h-auto max-sm:h-auto p-5 max-sm:p-2'>
          <div className='flex justify-center'>
            <p className=' lg:text-[42px] max-sm:text-[18px]  md:text-[30px] md:font-bold text-center w-[1084px] font-bold'>Wahab Yunus, as the CEO of PNY Trainings, is unlocking the potential in youth to be victorious.</p>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 text-white rounded md:grid-cols-1 md:h-auto max-sm:grid-cols-1 xl:mt-20  bg-[#152438] max-sm:h-auto lg:h-[420px] xl:w-[1266px] mx-auto max-sm:mt-10 md:mt-10">
            <div className='p-10'>
              <div className='lg:text-[36px] font-semibold'>CEO Message</div>
              <div className='lg:w-[530px]  xl:w-[624px] mt-[24px]'>Diversity and inclusion of thought, skill, knowledge, and culture make PNY Trainings more competitive, more resilient, and better. Diversity strengthens us by promoting unique viewpoints and challenging each of us, every day, to think beyond our traditional frames of reference. We are committed to building a talented and diverse workforce, and to creating an environment in which every STUDENT has the opportunity to excel based on his or her performance. We believe the best way to learn is by putting your skills to use. I warmly welcome you to visit by contacting us, and discover firsthand what makes PNY Trainings special.</div>
              <div className='mt-[24px] text-[22px] font-bold'>Wahab Yunus (CEO PNY Trainings)</div>
            </div>
            <div className=' lg:relative bottom-20  xl:justify-center md:justify-center lg:justify-end flex '>
              <img className='w-[450px] h-[500px] max-sm:h-[350px]' src={wahab} alt="" />
            </div>
          </div>
        </section>

        {/* section-5 */}
        <section className=' bg-white dark:bg-slate-800 ring-1 ring-slate-900/5   lg:p-5 lg:mt-10'>
          <div className="howwework font-bold text-center md:text-2xl lg:text-4xl max-sm:text-2xl" id='abc'>We Connect, We Grow Together</div>
          <div className="howwework text-center max-sm:p-2 lg:p-3 lg:mb-10">We consider your part to empower, develop, and embrace the everyday chore.</div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:p-3 max-sm:p-3'>
            {
              aboutdata.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="stats shadow-xl hover:bg-blue-500 hover:text-white">
                      <div className="stat">
                        <div className="img flex justify-center">
                          <img className='h-16' src={data.imgSrc} alt="" />
                        </div>
                        <div className="text-center text-xl font-bold">{data.title}</div>
                        <div className="text-center">{data.description}</div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </div>
        </section>
      </main>
    </Flowbite>
  )
}

export default AboutUs
