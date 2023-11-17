import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flyercomp from '../Components/Flyercomp';
import Flyermodal from '../Components/Flyermodal'
const Flyers = () => {
    const [data, setData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null); // New state for tracking selected category
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFlyer, setSelectedFlyer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.pnytrainings.com/api/flyers');
                setData(response.data);
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
    

   
    return (
        <div className='grid grid-cols-4 gap-3 p-3'>
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
    );
    
        
    
}

export default Flyers;
