import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';

const Blogdetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.pnytrainings.com/api/featuredposts/${slug}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.post_detail); // Assuming post_detail is the correct structure
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      window.scrollTo(0,0)
  }, [slug]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const parsedDescription = parse(data.description, {
    replace: domNode => {
      if (domNode.type === 'tag') {
        if (domNode.name === 'p') {
          const props = { className: 'p-3' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h3') {
          const props = { className: 'p-3 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'ul') {
          const props = { className: 'p-3' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'li') {
          const props = { className: 'p-3' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
      }
    }
  });

  return (
    <>
      <main>
        <section className=' bg-[#152438] grid grid-cols-2 h-[430px] max-sm:grid-cols-1 max-sm:h-auto '>
          <div>
            <div className=' lg:text-[18px] lg:px-10 text-white lg:pt-5'>Publish : {data.published_date}</div>
            <div className='lg:text-[48px] lg:w-[654px] text-white lg:px-10'>{data.title}</div>
            <div className='lg:text-[18px] lg:w-[654px]  text-white px-10'>{data.description_short}</div>
          </div>
          <div>
            <img className=' lg:w-[664px] h-[390px] lg:p-4 max-sm:p-3 max-sm:text-justify' src={data.post_image_thumb} alt="" />
          </div>
        </section>
        {parsedDescription}
      </main>
    </>
  );
}

export default Blogdetails;
