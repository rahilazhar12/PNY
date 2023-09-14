import React from 'react'
import Searchbar from '../Components/Searchbar'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import grouppicture from '../Assets/images/responsive.png'
import five from '../Assets/image/five.png'
import lady from '../Assets/image/lady with laptop.png'
import { aboutdata } from '../Components/Data';
import ladymobile from '../Assets/image/ladymobile.png'
import TypingAnimation from './Contact';




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
            <div className='lg:text-5xl max-sm:text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  font-bold max-sm:text-3xl md:text-center md:text-3xl'>About company</div>
            <div className='text-center'><TypingAnimation /></div>
          </div>

        </section>
        {/* Section-2 */}
        <section className='grid lg:grid-cols-12 lg:h-[400px] max-sm:h-auto md:mt-5 '>
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
        <section className='bg-[#F9FAFB] dark:bg-slate-800 ring-1 ring-slate-900/5 shadow-xl'>
          <div className="grid lg:grid-cols-12 md:grid-cols-12 max-sm:h-auto md:p-8">
            <div className='col-span-6'>
              <div className="lady p-4 flex">
                <img className='lg:w-[500px] lg:h-[560px] max-sm:hidden ' src={lady} alt="" />
              </div>
              <div className="lady lg:p-4">
                <img className='lg:w-[500px] lg:h-[560px] max-sm:hidden md:hidden lg:hidden' src={ladymobile} alt="" />
              </div>
            </div>
            <div className='lg:col-span-4 max-sm:col-span-4 md:col-span-6 lg:p-10 md:py-6'>
              <div className="ourworth max-sm:text-center max-sm:text-xl font-bold md:text-sm lg:text-sm lg:text-[#F10900]">Our Worth Our Achievements!</div>
              <div className="ourworth lg:text-4xl md:text-2xl font-bold  max-sm:hidden">We’re only just getting started on our journey</div>
              <div className='lg:mt-5 md:mt-5  max-sm:p-3'>
                <img src={five} alt="" />
              </div>
            </div>
          </div>
        </section>


        {/* Section-4 */}
        {/* <section className='p-[80px]'>
          <div className=" flex justify-center text-center text-[42px] font-bold">
            <p className='w-[1084px]'>Wahab Yunus, as the CEO of PNY Trainings, is unlocking the potential in youth to be victorious.</p>
          </div>
          <div className="grid grid-cols-12 lg:mt-28 md:mt-16 rounded-xl h-[500px]  space-y-20 bg-[#152438] text-white">
            <div className="col-span-6 lg:mt-12 space-y-3 lg:px-10 lg:ml-10">
              <div className='font-bold text-[36px]'>CEO Message</div>
              <div className='text-justify text-[18px]'>Diversity and inclusion of thought, skill, knowledge, and culture make PNY Trainings more competitive, more resilient, and better. Diversity strengthens us by promoting unique viewpoints and challenging each of us, every day, to think beyond our traditional frames of reference. We are committed to building a talented and diverse workforce, and to creating an environment in which every STUDENT has the opportunity to excel based on his or her performance. We believe the best way to learn is by putting your skills to use. I warmly welcome you to visit by contacting us, and discover firsthand what makes PNY Trainings special.</div>
              <div className='font-bold text-[22px]'>Wahab Yunus (CEO PNY Trainings)</div>
            </div>
            <div className="col-span-6  flex justify-end h-[350px]">
              <div className="flex items-center relative lg:left-[-100px] lg:top-[-50px] md:top-[-16px]">
                <img className='h-[590px]' src={wahab} alt="" />
              </div>
            </div>
          </div>
        </section> */}


        {/* section-5 */}
        <section className=' bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 shadow-xl lg:h-[600px] lg:p-5'>
          <div className="howwework font-bold text-center md:text-2xl lg:text-4xl max-sm:text-2xl" id='abc'>How we work at PNY Trainings</div>
          <div className="howwework text-center max-sm:p-2 lg:p-3">Our shared values keep us connected and guide us as one team.</div>


          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:p-3'>
            {
              aboutdata.map((data) => {
                return (
                  <>
                    <div class="stats shadow-xl hover:bg-blue-500 hover:text-white">
                      <div class="stat">
                        <div className="img flex justify-center">
                          <img className='h-16' src={data.imgSrc} alt="" />
                        </div>
                        <div class="text-center text-xl font-bold">{data.title}</div>
                        <div class="text-center">{data.description}</div>

                      </div>
                    </div>
                  </>
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
