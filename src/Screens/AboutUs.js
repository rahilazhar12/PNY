import React from 'react'
import Searchbar from '../Components/Searchbar'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import grouppicture from '../Assets/images/responsive.png'
import five from '../Assets/image/five.png'
import lady from '../Assets/image/lady with laptop.png'
import wahab from '../Assets/image/Wahab-Yunuspng.png'
import { aboutdata } from '../Components/Data';
import ladymobile from '../Assets/image/ladymobile.png'
import TypingAnimation from './Contact';
import { Link } from 'react-scroll';



const AboutUs = () => {

  
  
  return (
    <Flowbite>
      <main className='bg-white dark:bg-slate-800   ring-1 ring-slate-900/5 shadow-xl'>
        <section>
          <Link to='abc' className=' cursor-pointer'>How we work at PNY Trainings</Link>
        </section>
        <section>
          <div>
            <Searchbar />
          </div>
        </section>


        {/* Section-1 */}
        <section className='bg-[#152438] max-sm:h-auto md:p-20 lg:p-32 text-white max-sm:py-10'>
          <div className="grid justify-center">
            <div className=' lg:text-5xl max-sm:text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  font-bold max-sm:text-3xl md:text-center md:text-3xl'>About company</div>
            <div className='text-center'><TypingAnimation/></div>
          </div>

        </section>
        {/* Section-2 */}
        <section className='grid lg:grid-cols-12  max-sm:h-auto md:mt-5 '>
          <div className='col-span-6 max-sm:order-1 lg:p-10 max-sm:p-2 max-sm:space-y-2'>
            <div className="who lg:text-4xl md:text-3xl max-sm:text-3xl md:text-center lg:text-st font-bold">Who we are?</div>
            <div className=" lg:text-2xl max-sm:text-2xl md:text-2xl md:text-center md:px-20 font-bold max-sm:text-[#F10900]">PNY Trainings: A renowned IT Training institute in Pakistan since 2014</div>
            <div className="text-base md:text-xl md:p-3 text-justify max-sm:text-center">Offering professional IT diplomas and short courses for students and professionals seeking career growth. As pioneers in comprehensive training, we have helped thousands of students secure lucrative jobs in the expanding IT industry. With top-level industry experienced instructors and multiple branches nationwide, we are committed to empowering individuals in their IT journey. Join us today and unlock your potential in the world of technology.</div>
          </div>
          <div className='col-span-6 lg:h-80  flex justify-end md:justify-center md:mt-3'>
            <img className='lg:w-[650px] lg:h-[350px]'src={grouppicture} alt="" />
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
        <section className='bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 shadow-xl lg:h-[600px] lg:p-5 md:p-5'>
          <div className="grid lg:p-5">
            <div className="wahab lg:text-4xl md:text-2xl font-bold lg:px-32 text-center">Wahab Yunus, as the CEO of PNY Trainings, is unlocking the potential in youth to be victorious.</div>
          </div>
          <div className="grid lg:rounded-xl md:rounded-xl lg:grid-cols-12 lg:p-8 text-white bg-[#152438]   md:mt-3">
            <div className='col-span-6 space-y-1 md:p-3'>
              <div className="ceo lg:text-4xl font-bold max-sm:text-center max-sm:text-3xl md:text-center md:text-2xl">CEO Message</div>
              <div className="ceo text-justify  max-sm:p-3">Diversity and inclusion of thought, skill, knowledge, and culture make PNY Trainings more competitive, more resilient, and better. Diversity strengthens us by promoting unique viewpoints and challenging each of us, every day, to think beyond our traditional frames of reference. We are committed to building a talented and diverse workforce, and to creating an environment in which every STUDENT has the opportunity to excel based on his or her performance. We believe the best way to learn is by putting your skills to use. I warmly welcome you to visit by contacting us, and discover firsthand what makes PNY Trainings special.</div>
              <div className="ceo lg:text-xl font-bold max-sm:text-center md:text-center md:text-xl">Wahab Yunus (CEO PNY Trainings)</div>
            </div>

            <div className='max-sm:block  lg:hidden md:hidden lg:col-span-6 max-sm:col-span-6 max-sm:mt-3'>
              <img  src={wahab} alt="" />
            </div>
          </div>
              {/* Desktop */}
          {/* <div className="img lg:block  max-sm:hidden md:hidden">
            <img src={wahab} alt="" />
          </div> */}
        </section>

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
