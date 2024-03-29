import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flyercomp from '../Components/Flyercomp';
import Flyermodal from '../Components/Flyermodal'
import Searchbar from '../Components/Searchbar'
import gif from '../Assets/image/gif.gif'
const Flyers = () => {
    const [data, setData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null); // New state for tracking selected category
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFlyer, setSelectedFlyer] = useState(null);
    const [loading, setLoading] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get('https://www.admin786.pnytrainings.com/api/flyers');
                setData(response.data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    // const handleCategoryClick = (category) => {
    //     setSelectedCategory(category); // Update the selected category
    // };


    const handleFlyerClick = (flyer) => {
        const flyerData = data.flyers[flyer]; // Assuming 'flyer' is the key in your data structure
        setSelectedFlyer(flyerData);
        setModalOpen(true);
    };


    if (loading) {
        return (
            <div className="loader-wrapper">
                {/* Semi-transparent background */}
                <div className="loader-overlay"></div>
                {/* Loader */}
                <div className="loaderContainer">
                    {/* Use the gif as a loader */}
                    <img className="w-52 h-52" src={gif} alt="Loading..." />
                </div>
            </div>
        );
    }




    return (
        <>
            <section>
                <div>
                    <Searchbar />
                </div>
            </section>
            <section className="lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5">
                <div className="text-[48px] max-sm:text-[24px] font-semibold riseUp 1s ease-out forwards space-y-3">
                    <h1
                        className="text-white text-6xl font-bold -z-50 text-center"
                        style={{
                            animation: 'riseUp 2s ease-out forwards', // Change the duration and ease as needed
                        }}
                    >
                        E-Flyers

                    </h1>
                    <h4 className="text-center text-xl"></h4>
                </div>
                {/* <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div> */}
            </section>

            <div className='grid grid-cols-4 max-sm:grid-cols-1 gap-3 p-3'>
                {data.flyers && Object.keys(data.flyers).map((flyerKey, index) => {
                    const flyer = data.flyers[flyerKey];
                    // Check if 'obj' exists and is an array, otherwise fallback to an empty array
                    const flyerName = flyer.name; // Get the name of the flyer

                    return (
                        <div key={index}>
                            <h3 onClick={() => handleFlyerClick(flyerKey)} style={{ cursor: 'pointer' }}>
                                <Flyercomp courses={flyerName} />
                            </h3>
                            {selectedCategory === flyerKey.name && (
                                <div>
                                    {flyer.obj?.map((course, courseIndex) => (
                                        <div key={courseIndex}>
                                            <p>{course.class_name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}

                {selectedFlyer && (
                    <Flyermodal
                        open={modalOpen}
                        handleClose={() => setModalOpen(false)}
                        flyerData={selectedFlyer.obj} // Pass the flyer data to the modal
                        selectedFlyer={selectedFlyer}
                    />
                )}
            </div>
        </>
    );



}

export default Flyers;
