import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import parse, { domToReact } from 'html-react-parser';

const Specialpage = () => {

    const { url } = useParams()


    const [data, setData] = useState({})

    useEffect(() => {
        const fetchdatacitywise = async () => {
            try {
                let response = await axios.get(`https://www.pnytrainings.com/api/city/specialpage/${url}`)
                setData(response.data)
            } catch (error) {

            }
        }
        fetchdatacitywise()
    }, [url])

 

    const parsedDescription = data.special_page ? parse(data.special_page.description, {
        replace: domNode => {

            let isFirstH2 = true;

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
               if (domNode.name === 'h2' && isFirstH2) {
                const props = { className: 'text-[#013E6D] p-5 font-bold text-4xl' };
                isFirstH2 = false; // Update the flag after processing the first h2
                return <h2 {...props}>{domToReact(domNode.children)}</h2>;
            }
                // if (domNode.name === 'a') {
                //   const props = { className: 'bg-[#0c7ec2] text-white hover:bg-red-500 p-3 w-80 cursor-pointer rounded mx-auto'};
                //   return <p {...props}>{domToReact(domNode.children)}</p>;
                // }
            }
        }
    }) : null

    return (
        <>
        <div>
            <img className='h-[600px]' src={data.special_page ?.spage_image} alt="" />
        </div>
         {data.special_page ? parsedDescription : <p>Loading...</p>} {/* Or an error message */}
        </>
    )
}

export default Specialpage
