import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import parse, { domToReact } from 'html-react-parser';
import { Blocks } from 'react-loader-spinner'
import Searchbar from '../Components/Searchbar'
import { Helmet } from 'react-helmet';


const Specialpage = () => {

    const { url } = useParams()


    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchdatacitywise = async () => {
            setIsLoading(true)
            try {
                let response = await axios.get(`https://www.pnytrainings.com/api/city/specialpage/${url}`)
                setData(response.data)
                setIsLoading(false)
            } catch (error) {

            }
        }
        fetchdatacitywise()

        window.scrollTo(0, 0)
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


    console.log(data.special_page.meta_title
        , 'radata')

    return (
        <>
            <Helmet>
                <title>{data.special_page.meta_title}</title>
                <meta name="description" content={data.special_page.meta_description} />
                {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
                {/* Add more meta tags as needed */}
                <link rel="canonical" href="http://example.com/path-to-your-page" />
            </Helmet>


            <section>
                <Searchbar />
            </section>


            <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5'>
                <div className='text-[48px] max-sm:text-[24px] max-sm:text-center font-semibold'>{data.special_page.name}</div>
                {/* <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>
              </div> */}
            </section>


            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto max-h-[600px]">
                    {/* Left side: Image and Content */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <img src={data.special_page?.spage_image} alt="Content" className="w-full" />
                        <div className="mt-4">
                            {data.special_page ? parsedDescription : <p>Loading...</p>} {/* Or an error message */}
                        </div>
                    </div>

                    {/* Right side: Table of Cities */}
                    <div className="md:col-span-1 lg:col-span-1 bg-gray-100 p-4 bg-green-50">
                        <h3 className="font-bold text-lg mb-2 bg-blue-900 text-white p-3 rounded">COURSES WE OFFER IN CITIES</h3>
                        <ul className='flex space-y-10 flex-col'>
                            {/* List out the cities */}
                            <li className=''>Lahore</li>
                            <li>Rawalpindi</li>
                            <li>Karachi</li>
                            <li>Multan</li>
                            <li>Sialkot</li>
                            <li>Faislabad</li>
                            <li>Gujranwala</li>
                            <li>Azad Kashmir</li>
                            <li>Islamabad</li>
                            {/* ... more cities */}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Specialpage
