import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';


const Blogdetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        // This fetch assumes you're fetching data from the same API 
        // as in the Blog component. Modify as needed.
        fetch('https://www.pnytrainings.com/api/featuredposts')
            .then((response) => response.json())
            .then((data) => setData(data) )
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;  // or any other loading indication
    }

       console.log(data.map((item)=>item.url_slug), 'data_________')

    const parsedDescription = parse(post.description, {
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
            // if (domNode.name === 'a') {
            //   const props = { className: 'bg-[#0c7ec2] text-white hover:bg-red-500 p-3 w-80 cursor-pointer rounded mx-auto'};
            //   return <p {...props}>{domToReact(domNode.children)}</p>;
            // }
          }
        }
      });

    return (
        <div>
         {parsedDescription}
          
        </div>
    );
}

export default Blogdetails;
