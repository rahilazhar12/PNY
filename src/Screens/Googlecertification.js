import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from '../Components/Searchbar';
import parse, { domToReact } from 'html-react-parser';
import { Blocks } from 'react-loader-spinner'

const GoogleCertification = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
      try {
        const response = await axios.get('https://www.pnytrainings.com/api/pages/google-scholarship-certification-in-lahore-pakistan');
        setData(response.data);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
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


  const parsedDescription = parse(data.page.page_description, {
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
        if (domNode.name === 'a') {
          const props = { className: 'bg-[#0c7ec2] text-white hover:bg-red-500 p-3 w-80 cursor-pointer rounded mx-auto' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
      }
    }
  });

  return (
    <main>
      <div className='container  '>
        <section>
          <Searchbar />
        </section>

        <section>
          <div className='grid grid-cols-1'>
            <img className='w-full' src={data.page_banner} alt={data.page.page_title} />
          </div>
        </section>

        <section className='p-5'>
          <h1 className='text-xl p-5  font-semibold'>{data.page.page_title}</h1>
          {parsedDescription}
        </section>
      </div>
    </main>
  );
};

export default GoogleCertification;
