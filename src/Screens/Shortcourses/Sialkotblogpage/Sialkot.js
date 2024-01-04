import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner'


const Sialkot = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://www.pnytrainings.com/api/shortcourse/short-course-in-sialkot`);
        if (response.data && response.data.courses) {
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);

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
  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content='' />
        {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
        {/* Add more meta tags as needed */}
        <link rel="canonical" href={`http://localhost:3000/blog/short-course-in-sialkot`} />
      </Helmet>




      <div className='grid grid-cols-4 gap-3 p-3'>
        {courses.map((course, index) => (
          <>
            <div key="{index}" classname="course-container">
              {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                  <img className="rounded-t-lg h-52 w-full" src={course.post_image_thumb} alt />
                </a>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {course.title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {course.description_short}
                  </p>
                  <Link to={`/blog/short-course-in-sialkot/${course.url_slug}`}>
                    <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>


          </>

        ))}
      </div >
    </>
  )
}

export default Sialkot
