import React from 'react'
// import mainimage from '../Assets/images/responsive.png'
import Carousal from '../Components/Carousal'
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
import Bottomnavbar from '../Components/Bottomnavbar'
import Searchbar from '../Components/Searchbar'
import { TypeAnimation } from 'react-type-animation'
import { homedata } from '../Components/Data'
import Stats from '../Components/Stats'
import { motion } from 'framer-motion'
import varient, { fadeIn } from '../Components/variants'
import { durationdata } from '../Components/Data'
import vission from '../Assets/images/Group 327 (1).png'
import mission from '../Assets/images/Group 328 (1).png'
import image1 from '../Assets/image/4 logos.png'


const Home = () => {


  return (
    <>
      <Flowbite>
        <main id='home' className='bg-white dark:bg-slate-800   ring-1 ring-slate-900/5 shadow-xl'>
          <Searchbar />



          <section>
            <Bottomnavbar />
          </section>


          {/* Section-2 */}
          <motion.section variants={fadeIn("up", 0.1)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0 }}>
            <div className="grid grid-cols-12 lg:grid-cols-12 max-sm:grid-cols-6">
              <div className="column1 max-sm:order-1 p-10 lg:col-span-7 md:col-span-7  max-sm:col-span-6">
                <div className='text-3xl font-Inter fon-medium max-sm:text-center font-bold dark:text-white'><span className='text-[#F10900]'>PNY</span> Trainings</div>
                <div className='font-Inter lg:text-6xl lg:w-[535px] lg:font-bold max-sm:text-center max-sm:font-bold max-sm:text-3xl dark:text-white'>Pakistan <span className='text-[#F10900]'>No.1</span>  IT Training Institute</div>
                <div className='font-Inter lg:w-[520px] lg:text-xl lg:mt-6 max-sm:text-center dark:text-white'>Certified Courses with Money Making Skills!
                  Empower Yourself with Practical Skills that Open Doors
                  to Lucrative Opportunities</div>


                <div className="admissionbutton max-sm:flex justify-center" >
                  <button className=' p-[8px] bg-[#308AFF] rounded-lg w-[132px] text-white text-base font-Inter font-bold mt-3'>Admission !</button>
                </div>

                <div className='flex space-x-10 mt-3 max-sm:hidden'>
                  <img src={image1} />

                </div>

                {/* <div className="icons lg:hidden max-sm:hidden"> <TypeAnimation
                  sequence={[
                   
                    'We offer courses for Social Media',
                    1000, 
                    'We offer courses for Web Developement',
                    1000,
                    'We offer courses for Amazon ',
                    1000,
                    'We offer courses for Graphic Designing ',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500 font-bold'
                  style={{ fontSize: '', display: 'inline-block' }}
                  repeat={Infinity}
                /></div> */}
              </div>



              {/* Col-2 */}
              <div className="column2 lg:order-1 lg:col-span-5 md:col-span-5  max-sm:col-span-6">

                <div>
                  <Carousal />

                </div>

              </div>
            </div>
          </motion.section>

          {/* Section-3 */}
          <section className='bg-[#F9FAFB]  lg:p-[80px] space-y-2'>
            <div className='lgh max-sm:px-3'>We Develop Your Inspiring Career with Standard</div>
            <div className='flex justify-center'>
              <p className='lgp  max-sm:px-3'>PNY Trainings Pakistan is the leading IT training institute, offering 100+ courses through online and physical classes. We provide internship opportunities and have a dedicated job cell to help you jumpstart your career</p>
            </div>
            <div className='grid max-sm:p-3 lg:grid-cols-4 md:grid-cols-3 gap-4  md:p-3'>
              {
                homedata.map((data) => {
                  return (
                    <>
                      <motion.div whileHover={{ marginTop: "20px" }} class="stats  shadow-xl hover:bg-blue-500 hover:text-white">
                        <div class="stat">
                          <div className="img flex justify-center">
                            <img className='h-16' src={data.imgSrc} alt="" />
                          </div>
                          <div class="text-center text-xl font-bold">{data.title}</div>
                          <div class="text-center">{data.description}</div>
                        </div>
                      </motion.div>
                    </>
                  )
                })
              }
            </div>
          </section>

          {/* <section >
            <Stats />
          </section> */}

          {/* Section-3 */}
          <section className=' lg:p-[80px]'>
            <div class="grid md:p-5 space-y-2">
              <div class=" flex justify-center" data-aos="fade-up" data-aos-delay="300" >
                <p id='journey' className='lgh  dark:text-white'>Our Journey to Success</p>
              </div>

              <div class="PNYTrainingsPakistan  justify-center flex" data-aos="fade-up" data-aos-delay="300">
                <p className=' lgp max-sm:text-base  md:text-base md:px-3 dark:text-white'>
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
            <div className="grid grid-rows-1" data-aos="fade-up">
              <div className="develop lgh max-sm:p-2 dark:text-white">We Build Leaders For Professional Community</div>
            </div>
            <div className="grid grid-cols-12 lg:py-10  max-sm:grid-cols-6" data-aos="fade-up" >
              <div className="col-span-7 space-y-3 rounded-xl max-sm:order-1 p-3">

                <div className="mainboxvision  lg:py-16 lg:ml-10  rounded-xl bg-blue-600 lg:w-[510px] lg:h-[239px]   max-sm:p-6 lg:px-8 text-white md:p-3">
                  <div className="vision lg:text-3xl max-sm:text-2xl font-semibold  md:text-2xl"><i class="fa-solid fa-binoculars fa-fade"></i> Vision Statement</div>
                  <div className="visionp lg:w-[350px] max-sm:text-base text-lg md:text-base">Nation leading professional service provider by exploring and utilizing the unique ideas in the world of digital technologies.</div>
                </div>

                <div className="mainboxvision lg:ml-10 rounded-xl bg-red-600 lg:w-[510px] lg:h-[270px] lg:py-12  max-sm:p-4  lg:px-8 text-white md:p-3">

                  <div className="vision lg:text-3xl max-sm:text-2xl font-semibold md:text-2xl"><span className='px-1'><i class="fa-solid fa-bullseye fa-fade"></i></span> Our Mission Statement</div>
                  <div className="visionp lg:w-[420px]  max-sm:text-base   text-lg md:text-base">To design and maintain the quality of knowledge based capacity building programs to empower with new job oriented technical courses and bring positive transformation on their business and professional growth.</div>
                </div>
              </div>


              <div className="col-span-5 ">
                <img className='lg:w-[700px] lg:h-[500px] max-sm:w-[380px] h-[332px] p-4' src={map} alt="" />
              </div>
            </div>
          </section>

          {/* Section-5 */}
          <section id='duration' className='bg-blue-500 p-15 text-white md:p-5 lg:p-[80px]'>
            <div className="grid justify-center">
              <div className=' row-span-1  lgh   max-sm:py-5'>Duration that Develop your Skills</div>
              <div className='lgp row-span-1  max-sm:px-5'>Unlock your potential with our comprehensive range of skill programs! Choose from 1-year diploma programs, 6-month certified courses, 3-2 month certified courses, and professional boot camps. Upgrade your skills today!</div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 space-x-1 space-y-1 p-2 ">
              {
                durationdata.map((data) => {
                  return (
                    <>
                      <div class="stats bg-blue-400 text-white">
                        <div class="stat">
                          <div class="text-center text-xl font-bold">{data.title}</div>
                          <div class="text-center ">{data.description}</div>
                          <div className='flex justify-center'>
                            <a href="" className='text-white blinking-text'>Read More</a>
                          </div>

                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </section>

          {/* Section-6 */}
          <section >
            <div className="startlearning lg:mt-8  lgh  mb-6 max-sm:mt-7  md:mt-6 dark:text-white">
              <p>Start Learning</p>
            </div>

            <div className="grid lg:grid-cols-12 lg:px-20  max-sm:px-3.5 py-3 max-sm:py-2 max-sm:grid-cols-4 lg:gap-4 max-sm:space-y-2 md:grid-cols-12  md:p-3 gap-1">
              <div className='col-span-4'>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold font-Inter">Development</div>
                  <div className="paragraph">By learning these advanced courses, you will understand the fundamentals of object-oriented programming and how to write...</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Marketing</div>
                  <div className="paragraph">Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic...</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
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
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">IT & Software</div>
                  <div className="paragraph">Learn how to handle realistic computer problems and run operating systems fruitfully in information technology and network management. </div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Business & Accounts</div>
                  <div className="paragraph">Learn the business library as a professional, which teaches you how to organize software and technology that leads acros...</div>
                  <div><a href="" className=' text-blue-500 font-semibold'>View Course</a></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
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
          <section className='bg-[#F9FAFB] md:p-5 lg:p-[80px]'>
            <div className="grid grid-cols-12  max-sm:grid-cols-6">
              <div className='col-span-6 max-sm:p-5 lg:p-20 max-sm:order-1'>
                <div className="whychooseus text-4xl font-bold  max-sm:text-center  max-sm:text-2xl">Why Choose US?</div>
                <div className="list">
                  <ul className='p-3'>
                    <li className='text-lg'><i class="fa-sharp fa-regular fa-circle-check"></i> Money making skills</li>
                    <li className='text-lg'> <i class="fa-sharp fa-regular fa-circle-check"></i> Hands on Experience during Training</li>
                    <li className='text-lg'> <i class="fa-sharp fa-regular fa-circle-check"></i> Internship & job Opportunities</li>
                    <li className='text-lg'> <i class="fa-sharp fa-regular fa-circle-check"></i> On-campus + Online Classes with recorded lecture</li>
                    <li className='text-lg'> <i class="fa-sharp fa-regular fa-circle-check"></i> Highly Experienced Instructors</li>
                    <li className='text-lg'> <i class="fa-sharp fa-regular fa-circle-check"></i> Professional Learning Environment</li>
                  </ul>
                </div>
                <div className="buttons max-sm:flex">
                  <button className='mx-5 bg-[#D0D5DD] p-3 rounded-lg'>Learn More</button>
                  <button className='bg-[#308AFF] text-white rounded-lg p-3'>Enroll Now</button>
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
          <section className='md:p-5 lg:p-[80px]'>
            <div className="grid justify-center max-sm:grid-cols-6 ">
              <div className=" col-span-12 lgh lg:p-3  dark:text-white">Leaders Who Vision Your Future</div>
              <div className=" col-span-12 lgp max-sm:p-3 dark:text-white">PNY Trainings CEO and Director are inspiring leaders for the youth and have embarked on a transformative journey towards shared goals and prophecy for a promising future.</div>
              <div className='col-span-6 p-5 '>
                <div className="wahab">
                  <img className='rounded-lg' src={wahab} alt="" />
                  <div className="name text-2xl max-sm:text-xl font-semibold dark:text-white">Wahab Yunus
                    <span><i class="fa-brands fa-twitter lg:p-2 lg:ml-48 max-sm:ml-10 md:ml-20" style={{ color: "#0d63f8" }}></i></span>

                    <span><i class="fa-brands fa-linkedin" style={{ color: "#2c66c9" }}></i></span>
                  </div>
                  <div className="name text-lg font-medium text-blue-500  max-sm:text-base">Founder & CEO</div>


                </div>
              </div>
              <div className='col-span-6 p-5 max-sm:col-span-8'>
                <div className="suleman">
                  <img className='rounded-lg' src={suleman} alt="" />
                  <div className="name text-2xl max-sm:text-xl font-semibold dark:text-white">Suleman Ikram
                    <span><i class="fa-brands fa-twitter lg:p-2 lg:ml-48 max-sm:ml-10 md:ml-20" style={{ color: "#0d63f8" }}></i></span>

                    <span><i class="fa-brands fa-linkedin" style={{ color: "#2c66c9" }}></i></span>
                  </div>
                  <div className="name text-lg font-medium text-blue-500 max-sm:text-base">Co-Founder & Director</div>


                </div>
              </div>
            </div>
          </section>

          {/* Section-8 */}
          <section>
            <div className="grid justify-center">
              <div className=" lgh dark:text-white">Our Collaboration and Partners</div>
              <div className=" lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">Our collaboration with esteemed partners has strengthened our mission to empower youth through skills, making a lasting impact on their lives.</div>

              <div className="carousal md:px-5 max-sm:px-4">
                <Carousalhome />
              </div>
            </div>
          </section>


          {/* Section-9 */}
          <section className='lg:p-10'>
            <div className="grid justify-center">
              <div className=" lgh lg:p-2  dark:text-white">Our Affiliations</div>
              <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">Our collaboration with esteemed partners has strengthened our mission to empower youth through skills, making a lasting impact on their lives.</div>

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


          {/* Section-11 */}
          <section>

            <div id='trainer' className="grid space-y-3 max-sm:p-6 lg:px-48 lg:py-10 bg-[#F9FAFB] text-justify md:p-5">
              <div className="grid">
                <div className="lgh dark:text-white">Our trainers certified from</div>
                <div className="imageaffiliation flex justify-center max-sm:p-2 lg:py-10 md:px-5 ">
                  <img src={frame2} alt="" />
                </div>
              </div>
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
            <div className="grid justify-center lg:mt-10">
              <div className="lgh dark:text-white">We Empower Professionals; see through Media Partner Networks</div>
              <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">PNY Trainings encourage the opinions of youth by developing them professionally, trusting their abilities as leaders, and getting them excited to explore the world around them.</div>

              <div className="carousal p-5 ">
                <Carousalhome1 />
              </div>
            </div>
          </section>
          {/* Section-13 */}
          <section className='bg-blue-100' style={{ backgroundImage: `url(${vector})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
