import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse, { domToReact } from 'html-react-parser';
import { Helmet } from 'react-helmet';
import Searchbar from '../../Components/Searchbar'
import { Blocks } from 'react-loader-spinner'

const AzadKashmir = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://www.pnytrainings.com/api/shortcourse/short-courses-in-azad-kashmir`);
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

  const styleNode = (node) => {
    if (node.type === 'tag') {
      switch (node.name) {
        case 'h2':
          return <h2 className='p-5 text-lg'>{domToReact(node.children)}</h2>;
        case 'p':
          return <p className='p-5 text-lg'>{domToReact(node.children)}</p>;
        case 'b':
          return <p className='p-5 text-lg'>{domToReact(node.children)}</p>;
        case 'h3':
          return <p className='p-5 text-lg'>{domToReact(node.children)}</p>;
        // Add more cases for other tags as needed
        default:
          return domToReact(node.children);
      }
    }
  };

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
    <div>
      <section>
        <Searchbar />
      </section>
      <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5'>
        <div className='text-[48px] max-sm:text-[24px] font-semibold'>Azad Kashmir</div>
        <div className='text-[20px] max-sm:text-[24px] font-semibold'>Short Courses</div>
        {/* <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div> */}
      </section>
      {courses.map((course, index) => (
        <>
          <Helmet>
            <title>{course.meta_title}</title>
            <meta name="description" content={course.meta_description} />
            {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
            {/* Add more meta tags as needed */}
            <link rel="canonical" href={`http://localhost:3000/short-courses-in-azad-kashmir`} />
          </Helmet>
          <div key={index} className='course-container'>
            <img src={course.post_image_thumb} alt={course.title} />
            <div>{parse(course.description, { replace: styleNode })}</div>
          </div>
        </>
      ))}
    </div>
  );
}

export default AzadKashmir;
