import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import parse, { domToReact } from 'html-react-parser';
import { Blocks } from 'react-loader-spinner'
import Searchbar from '../Components/Searchbar'


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

    return (
        <>
            <section>
                <Searchbar />
            </section>


            <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5'>
                <div className='text-[48px] max-sm:text-[24px] font-semibold'>{url}</div>
                <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div>
            </section>



            <div className='container'>
                <div className=' grid grid-cols-3 max-sm:grid-cols-1'>
                    <div className=' col-span-2 overflow-y-auto max-h-[600px]'>
                        <img className='h-[400px] w-full' src={data.special_page?.spage_image} alt="" />

                        {data.special_page ? parsedDescription : <p>Loading...</p>} {/* Or an error message */}
                    </div>

                    <div>
                        <section>
                            <div className='p-5 '>
                                <div className=' bg-[#234E87]  rounded-t-xl lg:w-[390px]  h-[76px] flex justify-center items-center font-semibold text-3xl text-white'>Course we offer in Cities</div>
                                <div className=' gap-1 grid'>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Lahore</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Rawalpindi</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Karachi</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Multan</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Sialkot</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Faislabad</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Gujranwala</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Azad Kashmir</div>
                                    <div className='bg-[#EEFFFB] lg:w-[390px] font-semibold  h-[50px] flex justify-start items-center  p-2'>Islamabad</div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specialpage
