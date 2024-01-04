import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import parse from 'html-react-parser';
import parse, { domToReact } from 'html-react-parser';
import Searchbar from '../../Components/Searchbar'
import { Helmet } from 'react-helmet';
import { Blocks } from 'react-loader-spinner'


const Faisalabad = () => {
  const [courses, setCourses] = useState({ page_description: '' });
  const [meta, setMeta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://www.pnytrainings.com/api/shortcourse/short-courses-in-faisalabad`);
        setCourses(response.data.course);
        setMeta(response.data.metas);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);

  const parsedDescription = parse(courses.page_description, {
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
        if (domNode.name === 'h2') {
          const props = { className: 'p-5 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h1') {
          const props = { className: 'p-5 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'ul') {
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
      {
        meta.map((map) => {
          return (
            <>
              <Helmet>
                <title>{map.meta_title}</title>
                <meta name="description" content={map.meta_description} />
                {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
                {/* Add more meta tags as needed */}
                <link rel="canonical" href={`http://localhost:3000/short-courses-in-faisalabad`} />
              </Helmet>
            </>
          )
        })
      }

      <section>
        <Searchbar />
      </section>
      <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5'>
        <div className='text-[48px] max-sm:text-[24px] font-semibold'>Faisalabad</div>
        <div className='text-[20px] max-sm:text-[24px] font-semibold'>Short Courses</div>
        {/* <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div> */}
      </section>
      <div className='w-full'>
        <img className='w-full' src={courses.page_image} alt="" />
      </div>

      {courses.page_description && parsedDescription}
    </>
  )
}

export default Faisalabad
