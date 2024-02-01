import React, { useEffect, useState } from 'react';
import course from '../Categories/data/courses';
import instructor from '../Categories/data/Instructor';
import Searchbar from '../Components/Searchbar';
import Footer from '../Components/Footer';
import { frame } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllCourses = () => {
  const [pro, setPro] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [data, setData] = useState([]);

  const detadata = async () => {
    let res = await fetch('https://www.pnytrainings.com/api/get-courses');
    res = await res.json();
    setPro(res);
    setData(res);
    setSelectedCourse(res); // Initialize selectedCourse with all courses
  };

  useEffect(() => {
    detadata();
    window.scrollTo(0, 0);
  }, []);

  const handleCourseClick = (courseName) => {
    // If the "All" button is clicked, show all courses
    if (courseName === 'All') {
      setSelectedCourse([...pro]);
    } else {
      // Filter the courses based on the selected course name
      const update = pro.filter((courseData) => {
        return courseData.name === courseName;
      });
      setSelectedCourse(update);
    }
  };

  // Create a button for "All" courses
  const allCoursesButton = (
    <span key="All" className="text-white">
      <div className="col-span-6 md:col-span-3">
        <button
          onClick={() => handleCourseClick('All')}
          type="button"
          className={`text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2`}
        >
          All
        </button>
      </div>
    </span>
  );

  let courseNames = pro.map((courseData) => courseData.name);

  return (
    <>
      <div>
        <section>
          <Searchbar />
        </section>
        <section className="text-gray-400  body-font bg-[#152438]">
          <div className="container px-5 py-16 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bold  text-center text-white">Explore Skilled Courses</h1>
            <div className=' flex flex-wrap justify-evenly '>
              {allCoursesButton}
              {courseNames.map((courseName) => (
                <span key={courseName} className='text-white'>
                  <div className="">
                    <button onClick={() => handleCourseClick(courseName)} type="button" className={`text-white border border-gray-300 hover:bg-blue-800 px-3 py-1 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2`}>
                      {courseName}
                    </button>
                  </div>
                </span>
              ))}
            </div>
           
          </div>
        </section>
         

        <section className="text-gray-600 body-fon">
              <div className="container px-5 py-10 mx-auto">
                <div className="grid lg:grid-cols-1 p-3">
                  {selectedCourse.map((courseData) => {
                    return (
                      <div key={courseData.id}>
                        <h1 className=' text-2xl font-semibold px-6'>{courseData.name}</h1>
                        <h1 className='text-2xl text-white' onClick={() => handleCourseClick(courseData.name)}></h1>
                        <div className=' grid lg:grid-cols-4'>
                          {courseData.obj && courseData.obj.map((detail) => (
                            <div key={detail.id}>
                              <div className="w-full p-4">
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                  <Link to={`/${detail.url_slug}`}>
                                  <img src={detail.course_image} alt="Image 1" className="w-full rounded h-40 object-cover mb-4" />
                                  </Link>
                                  <div className="flex justify-between w-50 mb-4">
                                    <div className="flex">
                                      <i className="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
                                      <p className="text-blue-500">{detail.name}</p>
                                    </div>
                                    <div className="flex ">
                                      <i className="fas fa-clock text-gray-400 mt-1 mx-1"></i>
                                      <p>{detail.duration} Months</p>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">{detail.name}</h2>
                                    {/* <p>{detail.description_short}</p> */}
                                    <h3 className="text-red-500 font-bold mb-0.5 mt-1">{detail.teacher}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>



        <section className="text-gray-600 body-font shadow-md bg-gray-100 text-center pt-16">
          <h1 className=" text-black sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 mb-5 font-bold">Most Popular Instructors in Marketing</h1>
          <div className="container px-5 py-2 mx-auto ml-15">
            <div className="flex flex-wrap -m-4">
              {instructor.map((x) => {
                return (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                    <a className="block relative h-40 rounded overflow-hidden">
                      <img alt="ecommerce" className="mx-auto object-cover object-center w-32 block" src={x.image} />
                    </a>
                    <div className="">
                      <h3 className="text-lg tracking-widest title-font text-black font-bold">{x.Name}</h3>
                      <h2 className="title-font text-xs font-medium text-sm">{x.instructor}</h2>
                    </div>
                  </div>

                )
              }
              )}
            </div>
          </div>
        </section>



        <section className='lg:p-10'>
          <div className="grid justify-center">
            <div className=" lgh lg:p-2  dark:text-white">Our Affiliations</div>
            <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">Our collaboration with esteemed partners has strengthened our mission to empower youth through skills, making a lasting impact on their lives.</div>

            <div className="imageaffiliation flex justify-center max-sm:p-2 md:py-5">
              <img src="/images/Frame 624.png " alt="" />
            </div>

            <div className="flex justify-center p-5 gap-5 max-sm:hidden dark:text-white">
              <div className=' border-b-2 border-black'>Navtech certifications</div>
              <div className=' border-b-2 border-black'>Google scholarship programm</div>
              <div className=' border-b-2 border-black'>Free learning courses</div>
              <div className=' border-b-2 border-black'>Internship program</div>
            </div>
          </div>
        </section>




      </div>

    </>
  )
}

export default AllCourses