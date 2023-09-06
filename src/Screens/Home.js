import React from 'react'

// import mainimage from '../Assets/images/responsive.png'
import Carousal from '../Components/Carousal'
import logo1 from '../Assets/images/logo1.svg'
import newgroup from '../Assets/images/newgroup.png'
import map from '../Assets/images/noun-pakistan-264183 1.png'
import icon from '../Assets/images/Featured icon.svg'
import { Flowbite } from 'flowbite-react'
import contentimage from '../Assets/image/Contents.png'
import wahab from '../Assets/image/wahab.png'
import suleman from '../Assets/image/sulman.png'
import { Carousalhome, Carousalhome1 } from '../Components/Carousal'
import frame from '../Assets/image/Frame 624.png'
import frame2 from '../Assets/image/Frame 61.png'
import vector from '../Assets/images/vecter.png'
import acce from '../Assets/image/acce.png'
import acce2 from '../Assets/image/acce2.png'
import Bottomnavbar from '../Components/Bottomnavbar'
import Searchbar from '../Components/Searchbar'
const Home = () => {
  return (
    <>
      <Flowbite>
        <main id='home' className='bg-white dark:bg-slate-800   ring-1 ring-slate-900/5 shadow-xl'>
          <Searchbar />
             

             <section>
              <Bottomnavbar/>
             </section>

          {/* Section-2 */}
          <section >
            <div className="grid grid-cols-12 lg:grid-cols-12 max-sm:grid-cols-6">
              <div className="column1 max-sm:order-1 p-10 lg:col-span-7 md:col-span-7  max-sm:col-span-6">
                <div className='text-3xl font-Inter fon-medium max-sm:text-center font-bold dark:text-white'><span className='text-[#F10900]'>PNY</span> Trainings</div>
                <div className='font-Inter lg:text-6xl lg:w-[535px] lg:font-bold max-sm:text-center max-sm:font-bold max-sm:text-3xl dark:text-white'>Pakistan <span className='text-[#F10900]'>No.1</span>  IT Training Institute</div>
                <div className='font-Inter lg:w-[520px] lg:text-xl lg:mt-6 max-sm:text-center dark:text-white'>Certified Courses with Money Making Skills!
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
          <section className='bg-[#F9FAFB]'>
            <div className="img flex justify-center max-sm:hidden">
              <img src={acce} alt="" />
            </div>
            <div className="imgmobile flex justify-center max-sm:block lg:hidden md:hidden">
              <img src={acce2} alt="" />
            </div>
          </section>

          {/* Section-3 */}
          <section className=''>
          <div class="grid md:p-5">
            <div class=" flex justify-center">
              <p id='journey' className='lg:text-4xl text-center font-bold max-sm:text-2xl md:text-2xl dark:text-white'>Our Journey to Success</p>
            </div>

            <div class="PNYTrainingsPakistan p-2 justify-center flex">
              <p className='font-normal lg:text-xl text-center lg:w-[880px] max-sm:text-base max-sm:px-5 md:text-base md:px-3 dark:text-white'>
                Our journey to success has been incredible. Starting from scratch, we've achieved numerous milestones, empowering youth through skill development and opening doors to new opportunities. There's no limit to what we can accomplish.
              </p>
            </div>
            <div class="flex justify-center">
              <img src={newgroup} class="img-fluid" alt="" />
            </div>
          </div>
          </section>

          {/* Section-4 */}
          <section className='mt-10 md:mt-0'>
            <div className="grid grid-rows-1">
              <div className="develop text-center text-4xl font-bold max-sm:text-2xl md:text-2xl dark:text-white">We Build Leaders For Professional Community</div>
            </div>
            <div className="grid grid-cols-12 lg:py-10 lg:px-20 max-sm:grid-cols-6">
              <div className="col-span-6 space-y-3 rounded-xl max-sm:order-1 p-3">
                <div className="mainboxvision rounded-xl bg-blue-600 lg:w-[510px] lg:h-[239px] lg:py-12  max-sm:p-5  lg:px-8 text-white md:p-3">
                  <div className="vision lg:text-3xl max-sm:text-2xl font-semibold mt-4 md:text-2xl">Vision Statement</div>
                  <div className="visionp lg:w-[350px] max-sm:text-base text-lg md:text-base">Nation leading professional service provider by exploring and utilizing the unique ideas in the world of digital technologies.</div>
                </div>

                <div className="mainboxvision rounded-xl bg-red-600 lg:w-[510px] lg:h-[239px] lg:py-12  max-sm:p-4  lg:px-8 text-white md:p-3">
                  <div className="vision lg:text-3xl max-sm:text-2xl font-semibold md:text-2xl">Our Mission Statement</div>
                  <div className="visionp lg:w-[420px]  max-sm:text-base   text-lg md:text-base">To design and maintain the quality of knowledge based capacity building programs to empower with new job oriented technical courses and bring positive transformation on their business and professional growth.</div>
                </div>
              </div>


              <div className="col-span-6 ">
                <img className='lg:w-[600px] lg:h-[500px] max-sm:w-[380px] h-[332px] p-4' src={map} alt="" />
              </div>
            </div>
          </section>

          {/* Section-5 */}
          <section id='duration' className='bg-blue-500 p-15 text-white md:p-5'>
            <div className="grid justify-center">
              <div className='lg:text-4xl row-span-1 font-bold text-center max-sm:text-2xl lg:py-4 max-sm:py-5 md:text-2xl'>Duration that Develop your Skills</div>
              <div className='lg:text-lg lg:w-[990px] row-span-1 p-2 text-center max-sm:text-base max-sm:px-5'>Unlock your potential with our comprehensive range of skill programs! Choose from 1-year diploma programs, 6-month certified courses, 3-2 month certified courses, and professional boot camps. Upgrade your skills today!</div>
            </div>

            <div className="grid lg:grid-cols-12 p-5 max-sm:grid-cols-4 lg:ml-10 ">
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
            <div className="startlearning lg:mt-8 flex justify-center lg:text-4xl font-bold max-sm:text-2xl mb-6 max-sm:mt-7 md:text-2xl md:mt-6 dark:text-white">
              <p>Start Learning</p>
            </div>

            <div className="grid lg:grid-cols-12 lg:px-20  max-sm:px-3.5 py-3 max-sm:py-2 max-sm:grid-cols-4 lg:gap-4 max-sm:space-y-2 md:grid-cols-12  md:p-3 gap-1">
              <div className='col-span-4'>
                <div className="mainbox lg:h-64 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold font-Inter">Development</div>
                  <div className="paragraph">By learning these advanced courses, you will understand the fundamentals of object-oriented programming and how to write...</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-64 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Marketing</div>
                  <div className="paragraph">Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic...</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-64 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Art & Design</div>
                  <div className="paragraph">Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>
            </div>

            {/* .................. */}
            <div className="grid grid-cols-12 lg:px-20  max-sm:px-3.5  max-sm:grid-cols-4 lg:gap-4 max-sm:space-y-2 md:p-3 gap-1">
              <div className='col-span-4 '>
                <div className="mainbox lg:h-64 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">IT & Software</div>
                  <div className="paragraph">Learn how to handle realistic computer problems and run operating systems fruitfully in information technology and network management. </div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-64 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Business & Accounts</div>
                  <div className="paragraph">Learn the business library as a professional, which teaches you how to organize software and technology that leads acros...</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-64 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Multimedia</div>
                  <div className="paragraph">Learn the advanced methods of taking pictures and build a portfolio that showcases your professional photography skills....</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>
            </div>
            <div className="viewmore flex justify-center p-5">
              <button className='font-semibold text-base w-28 h-12 text-blue-600 bg-[#E5F1FF] rounded-lg'>View More</button>
            </div>
          </section>



          {/* Section -6*/}
          <section className='bg-[#F9FAFB] md:p-5'>
            <div className="grid grid-cols-12  max-sm:grid-cols-6">
              <div className='col-span-6 max-sm:p-5 lg:p-20 max-sm:order-1'>
                <div className="whychooseus text-4xl font-bold  max-sm:text-center  max-sm:text-2xl">Why Choose US?</div>
                <div className="list p-3">
                  <ul>
                    <li className='m-2'><i class="fa-sharp fa-regular fa-circle-check"></i> Money making skills</li>
                    <li className='m-2'> <i class="fa-sharp fa-regular fa-circle-check"></i> Hands on Experience during Training</li>
                    <li className='m-2'> <i class="fa-sharp fa-regular fa-circle-check"></i> Internship & job Opportunities</li>
                    <li className='m-2'> <i class="fa-sharp fa-regular fa-circle-check"></i> On-campus + Online Classes with recorded lecture</li>
                    <li className='m-2'> <i class="fa-sharp fa-regular fa-circle-check"></i> Highly Experienced Instructors</li>
                    <li className='m-2'> <i class="fa-sharp fa-regular fa-circle-check"></i> Professional Learning Environment</li>
                  </ul>
                </div>
                <div className="buttons max-sm:flex">
                  <button className='mx-5 bg-green-400 p-3 rounded-lg'>Learn More</button>
                  <button className='bg-blue-500 rounded-lg p-3'>Enroll Now</button>
                </div>
              </div>
              <div className='col-span-6'>
                <div className=' justify-center flex lg:p-6' >
                  <img className="image w-[596px] max-sm:h-52" src={contentimage} alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* Section-7 */}
          <section className='md:p-5'>
            <div className="grid justify-center max-sm:grid-cols-6 ">
              <div className="leaders col-span-12 text-center lg:text-4xl font-bold lg:p-3 max-sm:text-2xl md:text-2xl dark:text-white">Leaders Who Vision Your Future</div>
              <div className="leaderssub col-span-12 text-center lg:w-[990px] max-sm:p-3 dark:text-white">PNY Trainings CEO and Director are inspiring leaders for the youth and have embarked on a transformative journey towards shared goals and prophecy for a promising future.</div>
              <div className='col-span-6 p-5 '>
                <div className="wahab">
                  <img className='rounded-lg' src={wahab} alt="" />
                  <div className="name text-2xl max-sm:text-xl font-semibold dark:text-white">Wahab Yunus
                    <span><i class="fa-brands fa-twitter lg:p-2 lg:ml-48 max-sm:ml-10 md:ml-20" style={{ color: "#0d63f8" }}></i></span>

                    <span><i class="fa-brands fa-linkedin ml-5" style={{ color: "#2c66c9" }}></i></span>
                  </div>
                  <div className="name text-lg font-medium text-blue-500  max-sm:text-base">Founder & CEO</div>


                </div>
              </div>
              <div className='col-span-6 p-5 max-sm:col-span-8'>
                <div className="suleman">
                  <img className='rounded-lg' src={suleman} alt="" />
                  <div className="name text-2xl max-sm:text-xl font-semibold dark:text-white">Suleman Ikram
                    <span><i class="fa-brands fa-twitter lg:p-2 lg:ml-48 max-sm:ml-10 md:ml-20" style={{ color: "#0d63f8" }}></i></span>

                    <span><i class="fa-brands fa-linkedin ml-5" style={{ color: "#2c66c9" }}></i></span>
                  </div>
                  <div className="name text-lg font-medium text-blue-500 max-sm:text-base">Co-Founder & Director</div>


                </div>
              </div>
            </div>
          </section>

          {/* Section-8 */}
          <section>
            <div className="grid justify-center">
              <div className="collaboration text-center lg:text-4xl font-bold max-sm:text-2xl md:text-2xl dark:text-white">Our Collaboration and Partners</div>
              <div className="collaboration text-center lg:w-[990px] max-sm:p-3 md:px-10 md:py-2 dark:text-white">Our collaboration with esteemed partners has strengthened our mission to empower youth through skills, making a lasting impact on their lives.</div>

              <div className="carousal md:px-5 max-sm:px-4">
                <Carousalhome />
              </div>
            </div>
          </section>


          {/* Section-9 */}
          <section className='lg:p-10'>
            <div className="grid justify-center">
              <div className="collaboration text-center lg:text-4xl font-bold max-sm:text-2xl  lg:p-2 md:text-2xl dark:text-white">Our Affiliations</div>
              <div className="collaboration text-center lg:w-[990px] max-sm:p-3 md:px-10 md:py-2 dark:text-white">Our collaboration with esteemed partners has strengthened our mission to empower youth through skills, making a lasting impact on their lives.</div>

              <div className="imageaffiliation flex justify-center max-sm:p-2 md:py-5">
                <img src={frame} alt="" />
              </div>

              <div className="flex justify-center p-5 gap-5 max-sm:hidden dark:text-white">
                <div className=' border-b-2 border-black'>Navtech certifications</div>
                <div className=' border-b-2 border-black'>Google scholarship programm</div>
                <div className=' border-b-2 border-black'>Free learning courses</div>
                <div className=' border-b-2 border-black'>Internship program</div>
              </div>
            </div>
          </section>

          {/* Section-10 */}
          <section id='trainer' className='lg:p-10 max-sm:p-5 md:mt-10'>
            <div className="grid">
              <div className="collaboration text-center lg:text-4xl font-bold max-sm:text-2xl md:text-2xl dark:text-white">Our trainers certified from</div>
              <div className="imageaffiliation flex justify-center max-sm:p-2 lg:py-10 md:px-5 ">
                <img src={frame2} alt="" />
              </div>
            </div>
          </section>

          {/* Section-11 */}
          <section>
            <div className="grid space-y-3 max-sm:p-6 lg:px-48 lg:py-10 bg-[#F9FAFB] text-justify md:p-5">
              <div>PNY Trainings is the best IT institution in Lahore Pakistan that conducts different training programs aimed at helping young career seekers understand the basic information technology functioning of the sector and the job role they aspire to take on. Their insight and vision have assisted us to enhance the knowledge and skills of youngsters to take on modern-day corporate challenges. Getting a good start in a career is a cherished dream for every career candidate. However, this is easier said than done especially in today's challenging career range. To achieve this dream basic college education is rarely enough, especially in Pakistan. Today's highly competitive and demanding employment market is looking for only talented and skilled manpower with enough command of the information technology industry essentials. To make a mark you must have the necessary knowledge, skills, and capability to provide to the specific industry you aspire to enter into an increase. This is equally true across domains of Technology, Business, Development, and Designing, IT Software Development, Digital Marketing Courses, and many more.</div>
              <div>One of the ways that you can gain an advantage over your contemporaries is to undergo courses offered by reputable training institutes in Lahore. There are so many seats available in Arfa tower short courses and all you have to do is to enroll yourself in your desired course. PNY Trainings offers different courses in Lahore, Islamabad, Rawalpindi, Karachi, and other major cities of Pakistan.</div>
              <div>PNYTrainings is one of the promising and Best IT institutes in Lahore that comes up with amazing courses, training, and almost all short courses in Lahore. We are the introducers to numerous IT trends, courses, and certifications in Lahore. The motive of the PNY Arfa Tower short courses is to provide the best courses with guaranteed results for everyone.</div>
              <div>with our weekend classes in Lahore, we are the only training institute that gives the opportunity to learn new skills in E-commerce to all professionals and students. The flexible timings let them be part of new industry trends and improve their skills to get better-paid jobs in our PNY Arfa Karim tower courses, For every single course we pay attention to the student ease and feasibility when it comes to classes schedule, timings, course duration, content, and teaching method.</div>
              <div>PNYTrainings are one of the best online training institutes in Lahore Pakistan that are offering you the opportunity to learn new skills online. By accessing the online repository, you will be able to get the course and training from our qualified trainers and mentors. We have an organized system of teaching, coordination, follow-up, and course completion to let you have the ultimate outcomes.</div>
              <div>When you are looking for an IT institute in Lahore that offers you, all the next-level skill-based training then we are here. From our courses to their content and even the training session, everything is designed precisely. We pay attention to market need, demand, and future scope of the skills while offering a course. Every single course is an addition to your skillset that will repay you in the coming future.</div>
            </div>
          </section>

          {/* Section-12 */}
          <section>
            <div className="grid justify-center">
              <div className="collaboration text-center lg:text-4xl font-bold max-sm:text-2xl md:text-2xl dark:text-white">We Empower Professionals; see through Media Partner Networks</div>
              <div className="collaboration text-center lg:w-[990px] max-sm:p-3 md:px-10 md:py-2 dark:text-white">PNY Trainings encourage the opinions of youth by developing them professionally, trusting their abilities as leaders, and getting them excited to explore the world around them.</div>

              <div className="carousal p-5 ">
                <Carousalhome1 />
              </div>
            </div>
          </section>
          {/* Section-13 */}
          <section style={{ backgroundImage: `url(${vector})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="grid justify-center lg:p-28 md:p-20  max-sm: ">

              <div className='lg:text-5xl lg:w-[778px]  max-sm:p-5 font-bold text-center dark:text-white'>
                Admissions are open for the fresh
                batch. Let’s grow together!
              </div>
              <div className='text-center lg:p-5 max-sm:p-4'>
                <button className='bg-[#49B2DF] lg:w-48 lg:h-14 rounded max-sm:w-36 max-sm:h-10 dark:text-white'>Join us now!</button>
              </div>
            </div>

          </section>
        </main>
      </Flowbite>
    </>
  )
}

export default Home
