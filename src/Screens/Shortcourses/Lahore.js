import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import parse from 'html-react-parser';
import parse, { domToReact } from 'html-react-parser';

const Lahore = () => {
  const [courses, setCourses] = useState({ page_description: '' });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`https://www.pnytrainings.com/api/shortcourse/short-courses-in-lahore`);
        setCourses(response.data.course);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCourses();
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
  return (
    <>
      <div className='w-full'>
        <img className='w-full' src={courses.page_image} alt="" />
      </div>

      {courses.page_description && parsedDescription}
    </>
  )
}

export default Lahore
