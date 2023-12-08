import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
import Searchbar from '../Components/Searchbar'

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
    window.scrollTo(0, 0)
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
        <section>
          <Searchbar />
        </section>

        <section>
          <div className="bg-gray-800 text-white p-6 min-h-auto">
            <div className="container mx-auto">
              <div className="flex flex-wrap justify-around items-center">
                {/* Text section */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 max-sm:text-center">{data.title} </h2>
                  <p className="mb-4 max-sm:text-center w-[700px] max-sm:w-auto">{data.description_short}</p>               
                  <p className="mb-4 max-sm:text-center w-[700px] max-sm:w-auto">Publish data : {data.published_date}</p>         
                </div>

                {/* image section */}
                <div className="w-full md:w-1/2 flex  justify-center items-center bg-gray-700 p-2 max-sm:mt-2">
                  {/* Responsive iframe container */}
                  <div className="w-full aspect-w-16 ">
                   <img className='w-full h-[400px] max-sm:h-auto'  src={data.post_image_thumb} alt="" />
                   
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>
      
        {parsedDescription}
      </main>
    </>
  );
}

export default Blogdetails;
