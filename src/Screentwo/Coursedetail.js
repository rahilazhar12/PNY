import React, { useState, useEffect } from 'react';
import Searchbar from '../Components/Searchbar';
import Footer from '../Components/Footer';
import instructor from '../Categories/data/Instructor';
import feature from '../Categories/data/Feature';
import Modal from './Modal';
import Modalb from './Modalb';
import { useParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
import { FaBookOpen, FaChalkboardTeacher, FaBriefcase, FaUserGraduate, FaUsers, FaVideo } from 'react-icons/fa';
import { IconContext } from "react-icons";




let modulesData = [
  {
    title: 'Module 1',
    keyFeatures: [
      'The key features of the digital marketing training in Lahore are as follows:',
      'Advanced proficiency skills can help students recover their abilities.',
      'This digital marketing course helps classify digital habits.',
      'The key features of the digital marketing training in Lahore are as follows.',
      'Advanced proficiency skills can help students recover their abilities.',
      'This digital marketing course helps classify digital habits..',
      ' The key features of the digital marketing training in Lahore are as follows',
      ' Advanced proficiency skills can help students recover their abilities.',
      ' This digital marketing course helps classify digital habits.',
      // Add more key features as needed
    ],
  },
  {
    title: 'Module 2',
    keyFeatures: [
      'Key Feature A',
      'Key Feature B',
      'Key Feature C',
      // Add more key features as needed
    ],
  },
  {
    title: 'Module 3',
    keyFeatures: [
      'Key Feature X',
      'Key Feature Y',
      'Key Feature Z',
      // Add more key features as needed
    ],
  },
  {
    title: 'Module 4',
    keyFeatures: [
      'Key Feature a',
      'Key Feature b',
      'Key Feature c',
      // Add more key features as needed
    ],
  },
  {
    title: 'Module 5',
    keyFeatures: [
      'Key Feature a',
      'Key Feature b',
      'Key Feature c',
      // Add more key features as needed
    ],
  },
];





const Coursedetail = () => {
  const handleModuleClick = (moduleIndex) => {
    setActiveModule(moduleIndex);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenb, setModalOpenb] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [error, setError] = useState(null);
  const [moduledata, setModuledata] = useState([])


  const { courseSlug } = useParams();

  console.log(courseSlug, ' courseslug')

  useEffect(() => {
    const fetchCourseData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.pnytrainings.com/api/course/${courseSlug}`);
        if (response.ok) {
          const data = await response.json();
          setCourseData(data.course);
          setInstructor(data.course_instructor);
        } else {
          console.error(`Failed to fetch course data for slug: ${courseSlug}`);
          setError(`Failed to fetch course data. Please try again later.`);
        }
      } catch (error) {
        console.error(`Error fetching course data for slug: ${courseSlug}:`, error);
        setError(`Failed to fetch course data. Please try again later.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
    window.scrollTo(0, 0);
  }, [courseSlug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </div>
    );
  }

  const parsedDescription = parse(courseData.description, {
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
        if (domNode.name === 'h2') {
          const props = { className: 'p-5' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        // if (domNode.name === 'a') {
        //   const props = { className: 'bg-[#0c7ec2] text-white hover:bg-red-500 p-3 w-80 cursor-pointer rounded mx-auto'};
        //   return <p {...props}>{domToReact(domNode.children)}</p>;
        // }
      }
    }
  });



  const module = modulesData[activeModule];


  return (
    <>
      <div>
        <section>
          <Searchbar />
        </section>

        <div className="bg-gray-800 text-white p-6 min-h-auto">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between items-center">
              {/* Text section */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4"> {courseData ? courseData.name : null}</h2>
                <p className="mb-4">{courseData ? courseData.description_short : null}</p>
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="mb-2 md:mb-0 md:mr-4">
                    <span className="font-bold">Course Fee:</span> Rs {courseData.monthly_tution_fee}
                  </div>
                  <div className="mb-2 md:mb-0 md:mr-4">
                    <span className="font-bold">Skill Level:</span> {courseData.skill_level}
                  </div>
                  <div className="mb-2 md:mb-0">
                    <span className="font-bold">Duration:</span> {courseData.duration} Months
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold">Schedule Dates</span>
                  <span className="mx-2">|</span>
                  <span>Lahore</span>
                  <span className="mx-2">|</span>
                  <span>Rawalpindi</span>
                  <span className="mx-2">|</span>
                  <span>Multan</span>
                </div>
                <div className="flex flex-wrap gap-4 max-sm:justify-center">
                  <button className="bg-[#152438] border border-white  text-white font-bold py-2 px-4 rounded">Download Course Brochure</button>
                  <button className="bg-[#308AFF] text-white font-bold py-2 px-4 rounded">Free Orientation Class</button>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Pay Now</button>
                </div>
              </div>

              {/* Video section */}
              <div className="w-full md:w-1/2 flex  justify-center items-center bg-gray-700 p-4 max-sm:mt-2">
                {/* Responsive iframe container */}
                <div className="w-full aspect-w-16 aspect-h-9">
                  {/* Iframe YouTube */}
                  <iframe className="w-full h-[300px] max-sm:h-[100px]" src={`https://www.youtube.com/embed/${courseData.video}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div>
          <div className="flex flex-col text-center lg:text-left lg:w-2/3 mx-auto mb-5 mt-5 justify-center">
            <h1 className="text-4xl  font-extrabold text-gray-900 dark:text-white mb-4 text-center">Course Module</h1>
            <p className="leading-relaxed  text-gray-900 dark:text-white text-center">Our course modules offer a well-rounded curriculum, combining theoretical foundations with hands-on training, ensuring students acquire industry-relevant skills and knowledge for future endeavors.</p>
          </div>

        </div>
        <section className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14'>
          <div className="grid grid-cols-1 md:grid-cols-4 border rounded-lg w-full mx-auto shadow-lg">

            {/* Module List */}
            <div className='border md:w-[172px] w-full'>
              {modulesData.map((module, index) => (
                <div
                  key={index}
                  className={`h-[auto] md:h-[113px] flex border border-black/25 shadow-lg justify-center items-center ${activeModule === index ? 'bg-blue-500 text-white' : ''
                    }`}
                  onClick={() => handleModuleClick(index)}
                >
                  {module.title} <span className='ml-3'><i className="fa-solid fa-arrow-right"></i></span>
                </div>
              ))}
            </div>

            {/* Module Details */}
            <div className='col-span-3 md:col-span-2'>
              <div className='p-5 text-sm md:text-base lg:text-lg xl:text-xl text-[#308AFF]'>
                {module.title}
              </div>
              <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-5 max-sm:mb-0 max-sm:text-center'>
                Key Features of this course
              </div>
              <ul className='list-disc space-y-2 md:space-y-4 lg:space-y-5 xl:space-y-6 max-sm:list-non max-sm:p-8'>
                {module.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <section >
          <div className="bg-blue-50 py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center text-black mb-6">Develop your Academic network through Diverse Environment</h2>
              <p className="text-center text-black w-[990px] mx-auto mb-10">We discover your personal and professional growth capitalize on opportunities through which you will get profound impact on various employment and career advancement.</p>
              <IconContext.Provider value={{ size: "2em", className: "text-blue-600" }}>
                <div className="grid grid-cols-6 gap-4 text-center max-sm:grid-cols-1">
                  <div className="flex flex-col items-center">
                    <FaBookOpen />
                    <p className="text-sm text-black font-semibold mt-2">Learning Management System Access</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaChalkboardTeacher />
                    <p className="text-sm text-black font-semibold mt-2">Instructor Support</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaBriefcase />
                    <p className="text-sm text-black font-semibold mt-2">Internship Opportunity</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaUserGraduate />
                    <p className="text-sm text-black font-semibold mt-2">Job Cell</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaUsers />
                    <p className="text-sm text-black font-semibold mt-2">PNY Community Member</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaVideo />
                    <p className="text-sm text-black font-semibold mt-2">Free Seminar Access</p>
                  </div>
                </div>
              </IconContext.Provider>
            </div>
          </div>

        </section>


        <section>
          <div className="bg-white p-6">
            <div className="border-b border-gray-200 mb-4">
              <h3 className="text-lg font-semibold">OVERVIEW</h3>
            </div>
            <div className="flex gap-6">
              {/* Author Image & Name */}
              <div className="flex flex-col items-center max-sm:hidden">
                <div className=" w-32 h-32 bg-blue-500 rounded-full flex  items-center justify-center">
                  {/* Centered Image */}
                  <img
                    className="rounded-full object-cover h-full w-full"
                    src={instructor.photo ? instructor.photo : "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"}
                    alt=""
                  />
                </div>
                <p className="mt-2 text-sm font-semibold">Instructor</p>
              </div>

              {/* Description */}

              <div className="flex-grow">
                <div className='flex  flex-col justify-center items-center 2xl:hidden lg:hidden md:hidden'>
                  <img src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="" />

                </div>
                <h4 className="text-xl font-semibold mb-2 max-sm:text-center">{instructor.name}</h4>
                <p className="text-gray-700 text-justify max-sm:text-center">
                  {instructor.other_info}
                </p>
              </div>
            </div>
          </div>




        </section>


        <section className='h-auto  mt-10'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Content Section */}
              <div className="md:col-span-2 bg-white p-6 shadow rounded max-h-[800px] relative">
                <div class="sticky bottom-0 flex justify-center">
                  <div class="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" id="mainIconPathAttribute" stroke-width="0" stroke="#ff0000" filter="url(#shadow)"></path> <filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg>
                  </div>
                </div>
                <div className="scroll-content overflow-y-auto max-h-[800px]">
                  <p className="text-gray-700 mb-4">{parsedDescription}</p>
                </div>
              </div>


              {/* Sidebar Section */}
              <div className="max-w-sm mx-auto">
                <div className="bg-blue-800 text-white text-xl font-semibold p-4">
                  COURSES WE OFFER
                </div>
                <div className="divide-y divide-gray-200">
                  {['The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D', 'The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D'].map((city) => (
                    <div className="p-4 bg-[#EEFFFB] hover:bg-blue-200 cursor-pointer">
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </section>






        <div className='container'>

          <section class="text-gray-600 body-font px-16">
            <div class="container py-8 mx-auto">
              <div class="lg:w-1/1 flex flex-col sm:flex-row sm:items-center items-center mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-bold text-black ">More Courses</h1>
                {/* <button class="flex-shrink-0 text-white border-0 py-2 px-2 focus:outline-none hover:bg-[#308AFF] rounded text-sm bg-[#308AFF] mt-4 sm:mt-0 sm:w-auto self-center">View All Courses</button> */}
              </div>
            </div>
          </section>


          <section className="text-gray-600 body-font ">
            <div className="container px-5 py-10 mx-auto ">

              <div className="flex flex-wrap -m-4">
                {/* Card 1 */}
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
                  <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img src="/images/1 (4).png" alt="Image 1" className="h-40 object-cover rounded-xl mb-2" />
                    <div className="flex justify-between mb-4">
                      <div className="flex">
                        <i className="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
                        <p>Design</p>
                      </div>
                      <div className="flex">
                        <i className="fas fa-clock text-gray-400 mt-1 mx-1"></i>
                        <p>6 Months</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">Certified Digital Media Marketing (CDMM) Expert Course (06 Months)</h2>
                      <h3 className="text-red-500 mb-1.5 mt-1">Ayesha Amjad</h3>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
                  <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img src="/images/2 (2).png" alt="Image 2" className="w-full rounded h-46 object-cover mb-4" />
                    <div class="flex justify-between w-50 mb-4">
                      <div class="flex">
                        <i className="fa-solid fa-desktop mr-1 mt-1 text-blue-500"></i>
                        <p className="text-blue-500">Development</p>
                      </div>
                      <div class="flex">
                        <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
                        <p >6 Months</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-sm mb-4 text-gray-900">Become a Certified Web Designer & Developer
                      </h2>

                      <h3 className="text-red-500  mb-2 mt-7">Asim Manzoor</h3>


                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
                  <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img src="/images/3 (2).png" alt="Image 3" className="w-full rounded h-46 object-cover mb-4" />
                    <div class="flex justify-between w-50 mb-4">
                      <div class="flex">
                        <i class="fa-solid fa-rectangle-ad mx-1 mt-1 text-blue-500"></i>
                        <p className="text-blue-500">Marketing</p>
                      </div>
                      <div class="flex">
                        <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
                        <p >6 Months</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-sm text-gray-900">Become a Certified Full Stack Web Developer</h2>
                      <h3 className="text-red-500 mb-2 mt-7">Faisal Javeed</h3>

                    </div>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
                  <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
                    <img src="/images/1 (3).png" alt="Image 4" className="w-full rounded h-46 object-cover mb-4" />
                    <div class="flex justify-between w-50 mb-4">
                      <div class="flex">
                        <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
                        <p text-blue-500>Design</p>
                      </div>
                      <div class="flex">
                        <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
                        <p >6 Months</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">Certified Digital Media
                        Marketing (CDMM) Expert
                        Course (06 Months)
                      </h2>
                      <h3 className="text-red-500  mb-1 mt-0.5">Aqsa Razzaq</h3>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>


        </div>


      </div>


    </>

  )
}

export default Coursedetail