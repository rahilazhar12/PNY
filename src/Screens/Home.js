import React from 'react'
import PNYlogo from '../Assets/images/pny.png'
import mainimage from '../Assets/images/responsive.png'
import Carousal from '../Components/Carousal'
import logo1 from '../Assets/images/logo1.svg'


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
                        <div className='text-3xl font-Inter fon-medium max-sm:text-center'><span className='text-[#F10900] font-Inter fon-medium'>PNY</span> Trainings</div>
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
                    <p className='text-center font-bold lg:text-[42px] max-sm:text-2xl max-sm:p-2'>Accelerate Your Career with PNY Training Institute's</p>
                </div>
                <div className="subaccel lg:flex lg:justify-center">
                    <p className='text-center lg:text-[18.5px] lg:w-[992px] max-sm:text-base p-1'>PNY Trainings Pakistan is the leading IT training institute, offering 100+ courses through online and physical classes. We provide internship opportunities and have a dedicated job cell to help you jumpstart your career</p>
                </div>
            </section>
            {/* -------------------------------------------------------- */}
            <section className='grid grid-cols-12 max-sm:ml-12'>
                <div className='lg:col-span-12  md:space-y-2 md:col-span-6  max-sm:space-y-2 max-sm:col-span-6 p-4 lg:flex  justify-center'>
                <div class="mainbox">
                <div class="roundedboxblue  max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
                  <div class="icon">
                    <img src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center  lg:text-2xl lg:w-64">
                  <p>International Collaborations</p>
                </div>
              </div>
                <div class="mainbox">
                <div class="roundedboxblue max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20">
                  <div class="icon">
                    <img class="imges" src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center lg:text-2xl  max-sm:w-195 lg:w-64">
                  <p>Awarded by USA Education 2.0</p>
                </div>
              </div>
                <div class="mainbox">
                <div class="roundedboxblue max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20">
                  <div class="icon">
                    <img class="imges" src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center lg:text-2xl  max-sm:w-19 lg:w-64">
                  <p>Multiple Branches in Pakistan</p>
                </div>
              </div>
                <div class="mainbox">
                <div class="roundedboxblue max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20">
                  <div class="icon">
                    <img class="imges" src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center lg:text-2xl  max-sm:w-195 lg:w-64">
                  <p>Affiliated with Govt. (PSDA & PBTE)</p>
                </div>
              </div>
                </div>


                {/* Col-2 */}
                <div className='lg:col-span-12 md:space-y-2 md:col-span-6 max-sm:col-span-6 p-5 lg:flex lg:justify-center'>
                <div class="mainbox">
                <div class="roundedboxblue  max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
                  <div class="icon">
                    <img src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center max-sm:w-28 lg:text-2xl lg:w-64">
                  <p>75000+ Alumni</p>
                </div>
              </div>
                <div class="mainbox max-sm:mt-6">
                <div class="roundedboxblue max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
                  <div class="icon">
                    <img src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center  lg:text-2xl lg:w-64">
                  <p>100+ Professional Programs</p>
                </div>
              </div>
                <div class="mainbox max-sm:mt-4">
                <div class="roundedboxblue max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
                  <div class="icon">
                    <img src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center  lg:text-2xl lg:w-64">
                  <p>150+ Instructors</p>
                </div>
              </div>
                <div class="mainbox max-sm:mt-5">
                <div class="roundedboxblue max-sm:w-16 max-sm:h-16  lg:w-20 lg:h-20 p-5 rounded-3xl bg-blue-600 flex justify-center lg:ml-20 ">
                  <div class="icon">
                    <img src={logo1} />
                  </div>
                </div>
                <div class="max-sm:text-sm md:text-center lg:text-2xl lg:w-64">
                  <p>80+ Mou’s Sign</p>
                </div>
              </div>
                </div>
            </section>

            {/* Section-3 */}
        </main>
        </>
    )
}

export default Home
