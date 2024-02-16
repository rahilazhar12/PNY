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
    return (
      <div className="loader-container text-center">
        <div className="loader"></div>
        {/* <p>Loading...</p> */}
      </div>
    );
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
          <div class="bg-gray-800 text-white p-6 min-h-auto">
            <div class="container mx-auto">
              <div class="flex flex-wrap justify-around items-center">
                {/* <!-- Text section --> */}
                <div class="w-full lg:w-1/2 px-4">
                  <h2 class="text-3xl font-bold mb-4 text-center sm:text-left">{data.title}</h2>
                  <p class="mb-4 text-center sm:text-left">{data.description_short}</p>
                  <p class="text-center sm:text-left">Publish date: {data.published_date}</p>
                </div>

                {/* <!-- Image section --> */}
                <div class="w-full lg:w-1/2 flex justify-center items-center bg-gray-700 p-2 mt-4 lg:mt-0">
                  {/* <!-- Responsive image container --> */}
                  <div class="w-full">
                    <img class="w-full h-96" src={data.post_image_thumb} alt="" />
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
