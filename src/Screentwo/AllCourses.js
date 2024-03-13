import React, { useEffect, useState } from 'react';
// import instructor from '../Categories/data/Instructor';
import Searchbar from '../Components/Searchbar';
import { Link } from 'react-router-dom';
import gif from '../Assets/image/gif.gif'

const AllCourses = () => {
  const [pro, setPro] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  const [loading, setLoading] = useState('')

  const detadata = async () => {
    let res = await fetch('https://www.admin786.pnytrainings.com/api/get-courses');
    setLoading(true)
    res = await res.json();
    setPro(res);
    setSelectedCourse(res); // Initialize selectedCourse with all courses
    setLoading(false)

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



  if (loading) {
    return (
      <div className="loader-wrapper">
        {/* Semi-transparent background */}
        <div className="loader-overlay"></div>
        {/* Loader */}
        <div className="loaderContainer">
          {/* Use the gif as a loader */}
          <img className="w-52 h-52" src={gif} alt="Loading..." />
        </div>
      </div>
    );
  }


  return (
    <>
      <div>
        <section>
          <Searchbar />
        </section>
        <section className="text-gray-400 body-font bg-[#152438]">
          <div className="container px-5 py-16 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-center text-white">Explore Skilled Courses</h1>
            <div className='flex flex-wrap justify-center space-x-4'>
              {allCoursesButton}
              {courseNames.map((courseName) => (
                <div key={courseName} className="mb-4">
                  <button
                    onClick={() => handleCourseClick(courseName)}
                    type="button"
                    className={`text-white border border-gray-300 hover:bg-blue-800 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  >
                    {courseName}
                  </button>
                </div>
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


                              </div>
                              <Link to={`/${detail.url_slug}`} className='flex'>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded'>More Details</button>
                              </Link>

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



        {/* <section className="text-gray-600 body-font shadow-md bg-gray-100 text-center pt-16">
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
        </section> */}



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