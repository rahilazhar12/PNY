import React, { useState, useEffect } from 'react'
import Carousal from '../Components/Carousal'
import newgroup from '../Assets/images/newgroup.png'
import icon from '../Assets/images/Featured icon.svg'
import { Flowbite } from 'flowbite-react';
import contentimage from '../Assets/image/Why choose Us.png'
import { Carousalhome, Carousalhome1 } from '../Components/Carousal'
import frame from '../Assets/image/Frame 624.png'
import frame2 from '../Assets/image/Frame 61.png'
import vector from '../Assets/images/vecter.png'
import Searchbar from '../Components/Searchbar'
import { durationdata } from '../Components/Data'
import Map from '../Components/Map'
import Testimonial from '../Components/Testimonial'
import { Link } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
import { FaGlobeAmericas, FaAward, FaBuilding, FaUniversity, FaUsers, FaBook, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';
import off from '../Assets/image/10off.jpg'
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [data, setData] = useState([]);
  const [home, setHome] = useState([]);
  const [open, setOpen] = useState(false);
  const [id_address, setId_address] = useState('');
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setOpen(false);

  // ----------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = localStorage.getItem('hasSeenModal');

    if (!hasSeenModal) {
      // If not, show the modal and set the flag in localStorage
      setOpen(true);
      localStorage.setItem('hasSeenModal', 'true');
    } else {
      // If they have, don't show the modal
      setOpen(false);
    }

    // Fetch data from the provided URL
    fetch('https://www.pnytrainings.com/api/get-courses')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Function to clear localStorage on page unload
    const handleBeforeUnload = () => {
      localStorage.removeItem('hasSeenModal');
    };

    // Add an event listener to clear local storage on page refresh
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // ----------------------------------------------------------------------------------------------------------------------


  // -------------------------------Fetch Home Page Content-------------------------------------------------------------------
  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://www.pnytrainings.com/api/pages/home_page_content')
      .then((response) => response.json())
      .then((data) => {
        setHome(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  // ---------------------------------------------------------------------------------------------------------------------

  const parsedDescription = home.page ? parse(home.page.page_description || '', {
    replace: domNode => {
      if (domNode.type === 'tag') {
        // For example, add a class to all <p> elements
        if (domNode.name === 'p') {
          const props = { className: 'p-5' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h3') {
          const props = { className: 'p-5 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'ul') {
          const props = { className: 'p-5' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
      }
    }
  }) : null
  // ---------------------------------------------------------------------------------------------------------



  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto max-sm:p-3  w-full" id="my-modal">
        <div className="relative top-32 mx-auto  border max-sm:w-auto max-sm:h-auto w-[500px] h-[342px] shadow-lg  bg-white">
          <div className="text-center">
            <div className=' bg-blue-500  bg-gradient-to-t from-[#0b356b] to-[#2b7feb] p-3 text-white'>Subscribe PNY Trainings Official Newsletters</div>

            <div className='flex max-sm:flex-col'>
              <div className=' w-1/2 py-3 max-sm:w-auto max-sm:order-1'>
                <div>
                  <div className=' font-semibold px-3'>Refer a Friends & you will both receive 10% off on all course at PNY Trainings.</div>
                  <form>
                    <div className=' flex flex-col p-3 space-y-3'>
                      <input type="text" id='name' placeholder='Name' className='p-1 bg-[#f5f5f5] shadow-md rounded border-none  outline-none'
                      />
                      <input type="text" id='phone' placeholder='Contact' className='p-1 bg-[#f5f5f5] shadow-md rounded border-none  outline-none'
                      />
                      <input type="text" id='email' placeholder='Email' className='p-1 bg-[#f5f5f5] shadow-md rounded border-none  outline-none'
                      />
                      <button type='button' className=' bg-[#308aff] rounded py-1 px-3 text-white mt-5' onClick={SubmitData}>Subscribe</button>
                    </div>
                  </form>

                </div>

              </div>
              <div className=' w-1/2 p-3 justify-center flex max-sm:w-auto'>
                <img src={off} alt="" />
              </div>
            </div>

            <div className="items-center px-4 py-3">
              <button onClick={handleClose} className="px-4 py-2 bg-white text-blue-500 rounded-md focus:outline-none">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setId_address(data.ip))
      .catch(error => console.error('Error fetching IP address:', error));
  }, []);




  function SubmitData() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var formData = new FormData();

    // Append the data to the FormData object
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('id_address', id_address);
    // formData.append('comment', comment);

    // Use fetch to send the request
    fetch('https://www.pnytrainings.com/api/newsletter', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        toast.success(data.message, {
          duration: 5000
        })
        setOpen(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }



  return (
    <>
      <Flowbite>
        <main id='home' className='bg-white dark:bg-slate-800   ring-1 ring-slate-900/5 shadow-xl h-auto'>
          <Searchbar />

          {/* <section>
            <Bottomnavbar />
          </section> */}


          <div className="App">
            {/* Modal */}
            <Modal isOpen={open} />
          </div>


          {/* Section-2 */}
          <div className="container mx-auto p-4 flex md:flex-col flex-col lg:flex-row xl:flex-row 2xl:flex-row md:items-center">

            <div className=" flex-1 max-sm:order-1 px-2  max-sm:text-center md:text-center lg:text-center xl:text-start 2xl:text-start max-sm:p-3">
              <h1 className="text-xl dark:text-white text-center font-bold md:text-7xl max-sm:text-[36px]"> <span className='text-[#F10900]'>PNY</span> Trainings</h1>

              <p className="mt-2 dark:text-white md:text-[48px] w-[400px] text-[20px] md:w-auto max-sm:w-auto font-semibold text-center">
                Pakistan <span className='text-[#F10900]'>No.1</span> IT Training Institute
              </p>

              <p className="mt-1 dark:text-white text-center text-sm md:text-base md:w-auto w-[400px] max-sm:w-auto">
                Certified Courses with Money Making Skills! Empower Yourself with Practical Skills that Open Doors to Lucrative Opportunities
              </p>
            </div>



          </div>

          <div className="flex-1 w-full">
            <Carousal />
          </div>



          {/* Section-13 */}
          <section className='bg-blue-100' style={{ backgroundImage: `url(${vector})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="grid justify-center lg:p-28 md:p-20 max-sm:p-5 ">

              <div className='lg:text-5xl lg:w-[778px]  max-sm:p- font-bold text-center dark:text-black'>
                Admissions are open for the fresh
                batch. Let’s grow together!
              </div>
              <div className='text-center lg:p-5 max-sm:mt-2'>
                <Link to='https://lms.pnytraining.com/' target='_blank'>  <button className='bg-[#49B2DF] lg:w-48 lg:h-14 text-white rounded max-sm:w-36 max-sm:h-10 dark:text-white'>Join us now!</button> </Link>
              </div>
            </div>

          </section>

          {/* Section-3 */}
          <section>
            <div className="bg-white text-center p-8">
              <h2 className="text-2xl font-semibold mb-4 lgh dark:text-black">We Develop Your Inspiring Career with Standard</h2>
              <p className="mb-8 w-[990px] md:w-auto max-sm:w-auto mx-auto dark:text-black">PNY Trainings Pakistan is the leading IT training institute, offering 100+ courses through online and physical classes. We provide internship opportunities and have a dedicated job cell to help you jumpstart your career.</p>
              <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
                <div className="flex flex-col items-center">
                  <FaGlobeAmericas className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>International Collaborations</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaAward className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>Awarded by USA Education 2.0</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaBuilding className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>Multiple Branches in Pakistan</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaUniversity className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>Affiliated with Govt. (PSDA & PBTE)</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaUsers className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>75000+ Alumni</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaBook className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>100+ Professional Programs</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaChalkboardTeacher className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>150+ Instructors</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaHandshake className="text-4xl mb-2 text-blue-500" />
                  <span className=' font-semibold dark:text-black'>80+ MoU's Sign</span>
                </div>
              </div>
            </div>
          </section>

          {/* <section >
            <Stats />
          </section> */}

          {/* Section-3 */}
          <section className=' max-sm:mt-8 '>
            <div className="grid md:p-5 lg:space-y-5">
              <div className=" flex justify-center"  >
                <p id='journey' className='lgh  dark:text-white'>Our Journey to success</p>
              </div>

              <div className="PNYTrainingsPakistan  justify-center flex">
                <p className=' lgp max-sm:text-base  md:text-base md:px-3 dark:text-white'>
                  The journey shows the entrepreneurial growth of each individual student, with current goals to achieve victory. Through our success, we raise you up to be unstoppable in the world of opportunities.
                </p>
              </div>
              <div className="flex justify-center max-sm:mt-5 max-sm:mb-5">
                <img src={newgroup} className="img-fluid" alt="" />
              </div>
            </div>
          </section>

          {/* Section-4 */}
          <Map />

          {/* Section-5 */}
          <section id='duration' className='bg-blue-500 p-15 text-white md:p-5 lg:p-[80px]'>
            <div className="grid justify-center lg:space-y-5">
              <div className=' row-span-1  lgh   max-sm:py-5'>Professional Development Timeframe</div>
              <div className='lgp row-span-1  max-sm:px-5 max-sm:mb-5'>Unlock your potential with our comprehensive range of skill programs! Choose from 1-year diploma programs, 6-month certified courses, 3-2 month certified courses, and professional boot camps. Upgrade your skills today!</div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 space-x-1 lg:mt-4 space-y-1 p-2 ">
              {
                durationdata.map((data, index) => {
                  return (
                    <React.Fragment key={index}>

                      <div className="stats bg-blue-400 text-white" >
                        <div className="stat">
                          <div className="text-center text-xl font-bold">{data.title}</div>
                          <div className="text-center ">{data.description}</div>
                          {/* <div className='flex justify-center'>
                            <a href="" className='text-white blinking-text'>Read More</a>
                          </div> */}

                        </div>
                      </div>

                    </React.Fragment>
                  )
                })
              }
            </div>
          </section>

          {/* Section-6 */}
          <section >
            <div className="startlearning lg:mt-8  lgh  mb-6 max-sm:mt-7  md:mt-6 dark:text-white">
              <p>Course Categories </p>
            </div>

            <div className="grid lg:grid-cols-12 lg:px-20  max-sm:px-3.5 py-3 max-sm:py-2 max-sm:grid-cols-4 lg:gap-4 max-sm:space-y-2 md:grid-cols-12  md:p-3 gap-1">
              {
                data.slice(0, 6).map((item) => {
                  return (
                    <>
                      <div className='col-span-4'>
                        <div className="mainbox  lg:h-96 xl:h-80 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                          <div className="img"> <img src={icon} alt="" /> </div>
                          <div className="development lg:text-2xl font-semibold dark:text-black font-Inter">{item.name}</div>

                          {/* Display the short description from the first object in the item.obj array */}
                          <div className="paragraph dark:text-black">
                            {item.obj.length > 0 && item.obj[0].description_short}
                          </div>

                          <div><Link to={`/courses/${item.url_slug}`} target='_blank' className='text-blue-500 font-semibold'>View Course</Link></div>
                        </div>
                      </div>
                    </>
                  )
                })
              }



              {/* <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Marketing</div>
                  <div className="paragraph">Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic...</div>
                  <div><Link to="http://localhost:3000/marketing" target='_blank' className=' text-blue-500 font-semibold'>View Course</Link></div>
                </div>
              </div> */}

              {/* <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Art & Design</div>
                  <div className="paragraph">Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...</div>
                  <div><Link to="http://localhost:3000/designing" target='_blank' className=' text-blue-500 font-semibold'>View Course</Link></div>
                </div>
              </div> */}
            </div>

            {/* .................. */}
            {/* <div className="grid grid-cols-12 lg:px-20  max-sm:px-3.5  max-sm:grid-cols-4 lg:gap-4 max-sm:space-y-2 md:p-3 gap-1">
              <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">IT & Software</div>
                  <div className="paragraph">Learn how to handle realistic computer problems and run operating systems fruitfully in information technology and network management. </div>
                  <div><Link to="http://localhost:3000/it-and-software" className=' text-blue-500 font-semibold'>View Course</Link></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Business & Accounts</div>
                  <div className="paragraph">Learn the business library as a professional, which teaches you how to organize software and technology that leads acros...</div>
                  <div><Link to="http://localhost:3000/business" target='_blank' className=' text-blue-500 font-semibold'>View Course</Link></div>
                </div>
              </div>

              <div className='col-span-4 '>
                <div className="mainbox lg:h-80 xl:h-64 md:h-80 bg-[#F0F7FF] p-5 space-y-2 rounded">
                  <div className="img"> <img src={icon} alt="" /> </div>
                  <div className="developement lg:text-2xl font-semibold">Multimedia</div>
                  <div className="paragraph">Learn the advanced methods of taking pictures and build a portfolio that showcases your professional photography skills....</div>
                  <div><Link to="http://localhost:3000/multimedia" className=' text-blue-500 font-semibold'>View Course</Link></div>
                </div>
              </div>
            </div> */}
            <div className="viewmore flex justify-center p-5">
              <Link to='allcourses'> <button className='font-semibold text-base w-28 h-12 text-blue-600 bg-[#E5F1FF] rounded-lg'>View More</button></Link>
            </div>
          </section>



          {/* Section -6*/}
          <section className='bg-[#F9FAFB] md:p-5 '>
            <div className="grid grid-cols-12  max-sm:grid-cols-6">
              <div className='col-span-6 max-sm:p-5 lg:px-10 py-10 max-sm:order-1'>
                <div className="whychooseus text-4xl font-bold  max-sm:text-center dark:text-black  max-sm:text-2xl">Why Choose US?</div>

                <ul className='p-5 space-y-5 text-lg   max-sm:text-sm'>
                  <li className='dark:text-black'><i className="fa-sharp fa-regular fa-circle-check dark:text-black"></i> Money Making Skills</li>
                  <li className='dark:text-black'> <i className="fa-sharp fa-regular fa-circle-check dark:text-black"></i> Hands on Experience during Training</li>
                  <li className='dark:text-black'> <i className="fa-sharp fa-regular fa-circle-check dark:text-black"></i> Internship & Job Opportunities</li>
                  <li className='dark:text-black'> <i className="fa-sharp fa-regular fa-circle-check dark:text-black"></i> On-campus & Online Classes with Recorded Lectures</li>
                  <li className='dark:text-black'> <i className="fa-sharp fa-regular fa-circle-check dark:text-black"></i> Highly Experienced Instructors</li>
                  <li className='dark:text-black'> <i className="fa-sharp fa-regular fa-circle-check dark:text-black"></i> Professional Learning Environment</li>
                  <li className='dark:text-black'> <i className="fa-sharp fa-regular fa-circle-check dark:text-black"></i> Learning Management System</li>
                </ul>

                {/* <div className="buttons max-sm:flex lg:mt-5">
                  <button className='mx-5 bg-[#D0D5DD] p-3 rounded-lg'>Learn More</button>
                  <button className='bg-[#308AFF] text-white rounded-lg p-3'>Enroll Now</button>
                </div> */}
              </div>
              <div className='col-span-6'>
                <div className=' justify-center flex lg:p-6 lg:mt-20' >
                  <img className="image w-[596px] max-sm:h-52" src={contentimage} alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* Section-7 */}
          <Testimonial />
          {/* <section className='md:p-5 lg:p-[80px]'>
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
          </section> */}




          {/* Section-9 */}
          <section className='lg:p-10'>
            <div className="grid justify-center">
              <div className=" lgh lg:p-2 max-sm:mt-5  dark:text-white">Our Affiliations</div>
              <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">We proudly affiliate with Government organizations to bring high-quality digital skills that empower today's youth for tomorrow's opportunities.
              </div>

              <div className="imageaffiliation flex justify-center max-sm:p-2 md:py-5">
                <img src={frame} alt="" />
              </div>

              {/* <div className="flex justify-center p-5 gap-5 max-sm:hidden dark:text-white">
                <div className=' border-b-2 border-black'>Navtech certifications</div>
                <div className=' border-b-2 border-black'>Google scholarship programm</div>
                <div className=' border-b-2 border-black'>Free learning courses</div>
                <div className=' border-b-2 border-black'>Internship program</div>
              </div> */}
            </div>
          </section>

          {/* Section-8 */}
          <section className='bg-[#F9FAFB] h-auto'>
            <div className="grid justify-center lg:p-10">
              <div className=" lgh  dark:text-black max-sm:mt-10 ">Our Collaborations</div>
              <div className=" lgp max-sm:p-3 md:px-10 md:py-2 dark:text-black">Discover the strength of our network as we join hands with key partners to innovate and create impactful digital learning experiences for today's youth.</div>

              <div className="carousal md:px-5 max-sm:px-4">
                <Carousalhome />
              </div>
            </div>
          </section>


          {/* Section-11 */}
          <section>

            <div id='trainer' className="grid space-y-3 max-sm:p-6 lg:px-48 lg:py-10 bg-[#F9FAFB] text-justify md:p-5">
              <div className="grid">
                <div className="lgh dark:text-black">Our trainers certified from</div>
                <div className="imageaffiliation flex justify-center max-sm:p-2 lg:py-10 md:px-5 ">
                  <img src={frame2} alt="" />
                </div>
              </div>
              <div className='dark:text-black'>{parsedDescription}</div>
              {/* <div>PNY Trainings is the best IT institution in Lahore Pakistan that conducts different training programs aimed at helping young career seekers understand the basic information technology functioning of the sector and the job role they aspire to take on. Their insight and vision have assisted us to enhance the knowledge and skills of youngsters to take on modern-day corporate challenges. Getting a good start in a career is a cherished dream for every career candidate. However, this is easier said than done especially in today's challenging career range. To achieve this dream basic college education is rarely enough, especially in Pakistan. Today's highly competitive and demanding employment market is looking for only talented and skilled manpower with enough command of the information technology industry essentials. To make a mark you must have the necessary knowledge, skills, and capability to provide to the specific industry you aspire to enter into an increase. This is equally true across domains of Technology, Business, Development, and Designing, IT Software Development, Digital Marketing Courses, and many more.</div> */}
              {/* <div>One of the ways that you can gain an advantage over your contemporaries is to undergo courses offered by reputable training institutes in Lahore. There are so many seats available in Arfa tower short courses and all you have to do is to enroll yourself in your desired course. PNY Trainings offers different courses in Lahore, Islamabad, Rawalpindi, Karachi, and other major cities of Pakistan.</div> */}
              {/* <div>PNYTrainings is one of the promising and Best IT institutes in Lahore that comes up with amazing courses, training, and almost all short courses in Lahore. We are the introducers to numerous IT trends, courses, and certifications in Lahore. The motive of the PNY Arfa Tower short courses is to provide the best courses with guaranteed results for everyone.</div> */}
              {/* <div>with our weekend classes in Lahore, we are the only training institute that gives the opportunity to learn new skills in E-commerce to all professionals and students. The flexible timings let them be part of new industry trends and improve their skills to get better-paid jobs in our PNY Arfa Karim tower courses, For every single course we pay attention to the student ease and feasibility when it comes to classes schedule, timings, course duration, content, and teaching method.</div> */}
              {/* <div>PNYTrainings are one of the best online training institutes in Lahore Pakistan that are offering you the opportunity to learn new skills online. By accessing the online repository, you will be able to get the course and training from our qualified trainers and mentors. We have an organized system of teaching, coordination, follow-up, and course completion to let you have the ultimate outcomes.</div> */}
              {/* <div>When you are looking for an IT institute in Lahore that offers you, all the next-level skill-based training then we are here. From our courses to their content and even the training session, everything is designed precisely. We pay attention to market need, demand, and future scope of the skills while offering a course. Every single course is an addition to your skillset that will repay you in the coming future.</div> */}
            </div>
          </section>

          {/* Section-12 */}
          <section>
            <div className="grid justify-center lg:mt-10">
              <div className="lgh dark:text-white max-sm:mt-5">We Empower Professionals; see through Media Partner Networks</div>
              <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">PNY Trainings encourage the opinions of youth by developing them professionally, trusting their abilities as leaders, and getting them excited to explore the world around them.</div>

              <div className="carousal p-5 ">
                <Carousalhome1 />
              </div>
            </div>
          </section>

        </main>
        <Toaster />
      </Flowbite >
    </>
  )
}

export default Home
