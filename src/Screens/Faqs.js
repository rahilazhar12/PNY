import React, { useState } from 'react';
import { faqs } from '../Components/Data';
import faq from '../Assets/Faqs Icons/logofaq.png'
import Searchbar from '../Components/Searchbar'

const Faqs = () => {
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [showSubDetails, setShowSubDetails] = useState({});

    const titleHandler = (faq) => {
        setSelectedFaq(faq);
    }

    const ToggleSubDetails = (detailIndex) => {
        setShowSubDetails(prev => ({
            ...prev,
            [detailIndex]: !prev[detailIndex],
        }));
    }

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
                        <div className=' bg-blue-500 h-full xl:w-[250px]  ml-[59px] max-sm:ml-0 flex justify-center items-center'>
                            <img className=' w-[236px] h-[122px]' src={faq} alt="" />
                        </div>
                    </div>
                    <div className='col-span-3 '>
                        <section>
                            <div className='grid grid-cols-3 max-sm:grid-cols-2 p-5 gap-5 '>
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        onClick={() => titleHandler(faq)}
                                        className="block w-full rounded-lg hover:bg-blue-500 text-[#308AFF] hover:text-white bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] active:bg-blue-500"
                                    >
                                        <div className='flex justify-center'>
                                            <img src={faq.image} alt="" />
                                        </div>
                                        <div className='p-6'>
                                            <p className="text-base text-center font-semibold dark:text-neutral-200">
                                                {faq.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section>
                            <div className='text-center mb-4 text-[32px] font-semibold '>{selectedFaq?.description}</div>
                            <div>
                                {selectedFaq?.details.map((detail, index) => (
                                    <div key={index} className="block w-full rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-4  ">
                                        <div className="p-6 max-sm:p-3">
                                            <p className="text-base text-neutral-600 dark:text-neutral-200">
                                                {detail.text}
                                            </p>
                                            <div className='flex justify-end'>
                                                <button onClick={() => ToggleSubDetails(index)}>
                                                    {showSubDetails[index] ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
                                                </button>
                                            </div>
                                            {showSubDetails[index] && (
                                                <ul>
                                                    {detail.subDetails.map((subDetail, idx) => (
                                                        <li key={idx} className="text-sm text-neutral-500">
                                                            {subDetail}
                                                        </li>
                                                    ))}
                                                </ul>
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
