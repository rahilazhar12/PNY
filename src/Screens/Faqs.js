import React, { useState, useEffect } from 'react';
import { faqs } from '../Components/Data';
import faq from '../Assets/Faqs Icons/logofaq.png'
import Searchbar from '../Components/Searchbar'
import axios from 'axios';


const Faqs = () => {
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [showSubDetails, setShowSubDetails] = useState({});
    const [data, setData] = useState([]);

    const titleHandler = (faq) => {
        setSelectedFaq(faq);
    }

    const ToggleSubDetails = (detailIndex) => {
        setShowSubDetails(prev => ({
            ...prev,
            [detailIndex]: !prev[detailIndex],
        }));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const fetchDataCityWise = async () => {
            try {
                const response = await axios.get(
                    'https://www.pnytrainings.com/api/faqs'
                );
                setData(response.data.faqs.category);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataCityWise();
    }, []);

    return (
        <main>
            <section>
                <Searchbar />
            </section>
            <section className='lg:h-[336px] max-sm:h-auto bg-[#152438] text-white'>
                <div className=" lg:p-[96px] max-sm:p-3 ">
                    <div className='lg:text-[48px] font-semibold text-center max-sm:text-[24px]'>FAQs</div>
                    <div className='text-[20px]'>
                        <p className='text-center lg:px-[290px] max-sm:text-[16px]'>Frequently asked question</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='grid grid-cols-4 max-sm:grid-cols-1 '>
                    <div className=' col-span-1'>
                        <div className=' bg-blue-500 h-full xl:w-[250px] max-sm:hidden  ml-[59px] max-sm:ml-0 flex justify-center items-center'>
                            <img className=' w-[236px] h-[122px]' src={faq} alt="" />
                        </div>
                    </div>
                    <div className='col-span-3 '>
                        <section>
                            <div className='grid grid-cols-3 max-sm:grid-cols-2 p-5 gap-5 '>
                                {data.map((faq, index) => (
                                    <div
                                        key={index}
                                        onClick={() => titleHandler(faq)}
                                        className="block w-full rounded-lg hover:bg-blue-500 text-[#308AFF] hover:text-white bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] active:bg-blue-500"
                                    >
                                        <div className='flex justify-center mt-10'>
                                            <img className=' max-sm:w-[57px] max-sm:h-[52px]' src={faq.category_image} alt="" />
                                        </div>
                                        <div className='p-6'>
                                            <p className="text-base text-center font-semibold dark:text-neutral-200">
                                                {faq.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section>
                <div className='text-center mb-4 text-[32px] font-semibold '>{selectedFaq?.name}</div>
                <div>
                    {selectedFaq?.faqs.map((detail, index) => (
                        <div key={index} className="block w-full rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-4  ">
                            <div className="p-6 max-sm:p-3">
                                <p className="text-base text-neutral-600 dark:text-neutral-200">
                                    {detail.question}
                                </p>
                                <div className='flex justify-end'>
                                    <button onClick={() => ToggleSubDetails(index)}>
                                        {showSubDetails[index] ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                                    </button>
                                </div>
                                {showSubDetails[index] && (
                                    <div dangerouslySetInnerHTML={{ __html: detail.answer }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Faqs;