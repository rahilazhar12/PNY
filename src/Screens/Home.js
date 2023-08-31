import React from 'react'
import PNYlogo from '../Assets/images/pny.png'
import mainimage from '../Assets/images/responsive.png'
import Carousal from '../Components/Carousal'
import logo1 from '../Assets/images/logo1.svg'
import newgroup from '../Assets/images/newgroup.png'
import map from '../Assets/images/noun-pakistan-264183 1.png'
import icon from '../Assets/images/Featured icon.svg'

const Home = () => {
  return (
    <><main>
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
              <li className='subpixel-antialiased'>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section-2 */}
      <section>
        <div className="grid grid-cols-12 lg:grid-cols-12 max-sm:grid-cols-6">
          <div className="column1 max-sm:order-1 p-10 lg:col-span-7 md:col-span-7  max-sm:col-span-6">
            <div className='text-3xl font-Inter fon-medium max-sm:text-center font-bold'><span className='text-[#F10900]'>PNY</span> Trainings</div>
            <div className='font-Inter lg:text-6xl lg:w-[535px] lg:font-bold max-sm:text-center max-sm:font-bold max-sm:text-3xl'>Pakistan <span className='text-[#F10900]'>No.1</span>  IT Training Institute</div>
            <div className='font-Inter lg:w-[520px] lg:text-xl lg:mt-6 max-sm:text-center'>Certified Courses with Money Making Skills!
              Empower Yourself with Practical Skills that Open Doors
              to Lucrative Opportunities</div>


            <div className="admissionbutton max-sm:flex justify-center">
              <button className=' p-[8px] bg-[#308AFF] rounded-lg w-[132px] text-white text-base font-Inter font-bold mt-3'>Admission !</button>
            </div>
          </div>



          {/* Col-2 */}
          <div className="column2 lg:order-1 lg:col-span-5 md:col-span-5  max-sm:col-span-6">

            <div>
              <Carousal />

            </div>

          </div>
        </div>
      </section>

      {/* Section-3 */}
      <section>
        <div className="accelerate">
          <p className='text-center font-bold lg:text-4xl max-sm:text-2xl max-sm:px-5'>Accelerate Your Career with PNY Training Institute's</p>
        </div>
        <div className="subaccel lg:flex lg:justify-center">
          <p className='text-center text-xl lg:w-[992px] max-sm:text-base max-sm:px-5'>PNY Trainings Pakistan is the leading IT training institute, offering 100+ courses through online and physical classes. We provide internship opportunities and have a dedicated job cell to help you jumpstart your career</p>
        </div>
      </section>
      {/* -------------------------------------------------------- */}
      <section className='grid grid-cols-12'>
        <div className='lg:col-span-12  md:space-y-2 md:col-span-6  max-sm:space-y-2 max-sm:col-span-6 p-4 lg:flex  justify-center'>
          <div class="mainbox">
            <div class="roundedboxblue max-sm:ml-10  max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
              <div class="icon">
                <img src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center max-sm:text-center  lg:text-2xl lg:w-64">
              <p>International Collaborations</p>
            </div>
          </div>
          <div class="mainbox">
            <div class="roundedboxblue max-sm:ml-10 max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20">
              <div class="icon">
                <img class="imges" src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center lg:text-2xl max-sm:text-center  max-sm:w-195 lg:w-64">
              <p>Awarded by USA Education 2.0</p>
            </div>
          </div>
          <div class="mainbox">
            <div class="roundedboxblue max-sm:ml-10 max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20">
              <div class="icon">
                <img class="imges" src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center lg:text-2xl max-sm:text-center max-sm:w-19 lg:w-64">
              <p>Multiple Branches in Pakistan</p>
            </div>
          </div>
          <div class="mainbox">
            <div class="roundedboxblue max-sm:ml-10 max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20">
              <div class="icon">
                <img class="imges" src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center lg:text-2xl max-sm:text-center max-sm:w-195 lg:w-64">
              <p>Affiliated with Govt. (PSDA & PBTE)</p>
            </div>
          </div>
        </div>


        {/* Col-2 */}
        <div className='lg:col-span-12 md:space-y-2 md:col-span-6 max-sm:col-span-6 p-5 lg:flex lg:justify-center'>
          <div class="mainbox">
            <div class="roundedboxblue max-sm:ml-10  max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
              <div class="icon">
                <img src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center max-sm:w-28 max-sm:text-center lg:text-2x max-sm:ml-5">
              <p>75000+ Alumni</p>
            </div>
          </div>
          <div class="mainbox max-sm:mt-6">
            <div class="roundedboxblue max-sm:ml-10 max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
              <div class="icon">
                <img src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center max-sm:text-center  lg:text-2xl lg:w-64">
              <p>100+ Professional Programs</p>
            </div>
          </div>
          <div class="mainbox max-sm:mt-4">
            <div class="roundedboxblue max-sm:ml-10 max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
              <div class="icon">
                <img src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center max-sm:text-center lg:text-2xl lg:w-64">
              <p>150+ Instructors</p>
            </div>
          </div>
          <div class="mainbox max-sm:mt-5">
            <div class="roundedboxblue max-sm:ml-10 max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
              <div class="icon">
                <img src={logo1} />
              </div>
            </div>
            <div class="max-sm:text-sm md:text-center max-sm:text-center lg:text-2xl lg:w-64">
              <p>80+ Mou’s Sign</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section-3 */}
      <div class="grid">
        <div class=" flex justify-center">
          <p className='text-4xl text-center font-bold max-sm:text-2xl'>Our Journey to Success</p>
        </div>

        <div class="PNYTrainingsPakistan p-2 justify-center flex">
          <p className='font-normal text-xl text-center lg:w-[880px] max-sm:text-base max-sm:px-5'>
            Our journey to success has been incredible. Starting from scratch, we've achieved numerous milestones, empowering youth through skill development and opening doors to new opportunities. There's no limit to what we can accomplish.
          </p>
        </div>
        <div class="flex justify-center">
          <img src={newgroup} class="img-fluid" alt="" />
        </div>
      </div>

      {/* Section-4 */}
      <section className='mt-10'>
        <div className="grid grid-rows-1">
          <div className="develop text-center text-4xl font-bold max-sm:text-2xl">We Build Leaders For Professional Community</div>
        </div>
        <div className="grid grid-cols-12 lg:py-10 lg:px-20 max-sm:grid-cols-6">
          <div className="col-span-6 space-y-3 rounded-xl max-sm:order-1 p-3">
            <div className="mainboxvision rounded-xl bg-blue-600 lg:w-[510px] lg:h-[239px] lg:py-12  max-sm:p-5  lg:px-8 text-white">
              <div className="vision text-3xl max-sm:text-2xl font-semibold mt-4">Vision Statement</div>
              <div className="visionp lg:w-[350px] max-sm:text-base text-lg ">Nation leading professional service provider by exploring and utilizing the unique ideas in the world of digital technologies.</div>
            </div>

            <div className="mainboxvision rounded-xl bg-red-600 lg:w-[510px] lg:h-[239px] lg:py-12  max-sm:p-4  lg:px-8 text-white">
              <div className="vision text-3xl max-sm:text-2xl font-semibold">Our Mission Statement</div>
              <div className="visionp lg:w-[420px]  max-sm:text-base   text-lg ">To design and maintain the quality of knowledge based capacity building programs to empower with new job oriented technical courses and bring positive transformation on their business and professional growth.</div>
            </div>
          </div>
          <div className="col-span-6 ">
            <img className='lg:w-[600px] lg:h-[500px] max-sm:w-[380px] h-[332px] p-4' src={map} alt="" />
          </div>
        </div>
      </section>

      {/* Section-5 */}
      <section className='bg-blue-500 p-15 text-white'>
        <div className="grid justify-center">
          <div className='lg:text-4xl row-span-1 font-bold text-center max-sm:text-2xl lg:py-4 max-sm:py-5'>Duration that Develop your Skills</div>
          <div className='lg:text-lg lg:w-[990px] row-span-1 p-2 text-center max-sm:text-base max-sm:px-5'>Unlock your potential with our comprehensive range of skill programs! Choose from 1-year diploma programs, 6-month certified courses, 3-2 month certified courses, and professional boot camps. Upgrade your skills today!</div>
        </div>

        <div className="grid grid-cols-12 p-5 max-sm:grid-cols-4 lg:ml-10">
          <div className=' col-span-3 max-sm:col-span-4 space-y-3'>
            <div className="1yeardeploma text-2xl font-semibold">1 Year Professional Diplomas Programs</div>
            <div className="Immerse">Immerse yourself in our 1-year Professional Diploma programs, unlocking unlimited potential for career growth and success</div>
            <div>  <a href="">Read More</a></div>
            <div className=' max-sm:border-b-2 max-sm:w-52  max-sm:ml-20'></div>
          </div>


          <div className=' col-span-3 max-sm:col-span-4 space-y-3 max-sm:mt-3'>
            <div className="1yeardeploma text-2xl font-semibold lg:w-52">6 Months Certified Courses</div>
            <div className="Immerse lg:w-80">Accelerate your career with our comprehensive 6-month certified Courses. Gain specialized expertise and excel in your career.</div>
            <div>  <a href="">Read More</a></div>
            <div className=' max-sm:border-b-2 max-sm:w-52  max-sm:ml-20'></div>
          </div>


          <div className=' col-span-3 max-sm:col-span-4 space-y-3'>
            <div className="1yeardeploma text-2xl font-semibold lg:w-52 max-sm:mt-3">3-2 Months Certified Courses</div>
            <div className="Immerse lg:w-80">Elevate your expertise from 3 to 2 months with our Professional Certification Courses. Unlock new career opportunities.</div>
            <div>  <a href="">Read More</a></div>
            <div className=' max-sm:border-b-2 max-sm:w-52  max-sm:ml-20'></div>
          </div>


          <div className=' col-span-3 max-sm:col-span-4 space-y-3'>
            <div className="1yeardeploma text-2xl font-semibold lg:w-52 max-sm:mt-3">Professional BootCamp</div>
            <div className="Immerse lg:w-80">Join our Professional Bootcamp and gain valuable insights to advance your career. Don't miss out.</div>
            <div>  <a href="">Read More</a></div>
          </div>
        </div>
      </section>

      {/* Section-6 */}
      <section>
        <div className="startlearning lg:mt-8 flex justify-center lg:text-4xl font-bold max-sm:text-2xl mb-6 max-sm:mt-7">
          <p>Start Learning</p>
        </div>

        <div className="grid grid-cols-12 lg:px-20  max-sm:px-3.5 py-5 max-sm:py-2 max-sm:grid-cols-4 lg:space-x-10 max-sm:space-y-2">
          <div className='col-span-4 '>
            <div className="mainbox bg-[#F0F7FF] p-5 space-y-2 rounded">
              <div className="img"> <img src={icon} alt="" /> </div>
              <div className="developement text-2xl font-semibold font-Inter">Development</div>
              <div className="paragraph">By learning these advanced courses, you will understand the fundamentals of object-oriented programming and how to write...</div>
              <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
            </div>
          </div>

          <div className='col-span-4 '>
            <div className="mainbox  bg-[#F0F7FF] p-5 space-y-2 rounded">
              <div className="img"> <img src={icon} alt="" /> </div>
              <div className="developement text-2xl font-semibold">Marketing</div>
              <div className="paragraph">Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic...</div>
              <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
            </div>
          </div>

          <div className='col-span-4 '>
            <div className="mainbox  bg-[#F0F7FF] p-5 space-y-2 rounded">
              <div className="img"> <img src={icon} alt="" /> </div>
              <div className="developement text-2xl font-semibold">Art & Design</div>
              <div className="paragraph">Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...</div>
              <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
            </div>
          </div>
        </div>

        {/* .................. */}
        <div className="grid grid-cols-12 lg:px-20  max-sm:px-3.5  max-sm:grid-cols-4 lg:space-x-10 max-sm:space-y-2">
          <div className='col-span-4 '>
            <div className="mainbox  bg-[#F0F7FF] p-5 space-y-2 rounded">
              <div className="img"> <img src={icon} alt="" /> </div>
              <div className="developement text-2xl font-semibold">IT & Software</div>
              <div className="paragraph w-80">Learn how to handle realistic computer problems and run operating systems fruitfully in information technology and...</div>
              <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
            </div>
          </div>

          <div className='col-span-4 '>
            <div className="mainbox  bg-[#F0F7FF] p-5 space-y-2 rounded">
              <div className="img"> <img src={icon} alt="" /> </div>
              <div className="developement text-2xl font-semibold">Business & Accounts</div>
              <div className="paragraph">Learn the business library as a professional, which teaches you how to organize software and technology that leads acros...</div>
              <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
            </div>
          </div>

          <div className='col-span-4 '>
            <div className="mainbox  bg-[#F0F7FF] p-5 space-y-2 rounded">
              <div className="img"> <img src={icon} alt="" /> </div>
              <div className="developement text-2xl font-semibold">Multimedia</div>
              <div className="paragraph">Learn the advanced methods of taking pictures and build a portfolio that showcases your professional photography skills....</div>
              <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  )
}

export default Home
