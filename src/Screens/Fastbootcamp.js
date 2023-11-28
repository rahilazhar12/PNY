import React, { useState, useEffect } from 'react';
import Searchbar from '../Components/Searchbar';
import { Blocks } from 'react-loader-spinner'

const Fastbootcamp = () => {
    const [data, setData] = useState({ page: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://www.pnytrainings.com/api/pages/fast-track-pro-bootcamps');
                const fetchedData = await response.json();
                setData(fetchedData);
                setIsLoading(false);
                console.log(fetchedData.page, 'fetched data');
            } catch (error) {
                console.log("Error fetching", error);
            }
        };

        fetchData();
    }, []);

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
        <main className=''>
            <div className=''>
                <section>
                    <Searchbar/>
                </section>

                <section>
                    <div className=''>
                       
                            <img className='w-full' src={data.page_banner} alt="Boot Camp" />
                       
                    </div>
                </section>

                <section>
                    {data.page.map((item) => (
                        <div key={item.id}>
                            <h2 className='p-10 text-xl font-bold'>Top Courses in {item.name}</h2>



                            <div className='grid grid-cols-4 max-sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4'>
                                {item.obj.map((course) => (
                                  
                                        <div key={course.id} className="p-4  w-full">
                                            <div className="p-4 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                                                <img src={course.course_image} alt="Image 1" className="" />
                                                <div className="flex justify-between w-50 mb-4">
                                                   
                                                  
                                                </div>
                                                <div className="w-full">
                                                    <h2 className="title-font font-medium text-sm text-gray-900 mb-3">{course.name}</h2>
                                                    <h2 className='text-black'>Course Fee : {course.monthly_tution_fee}</h2>
                                                    <h3 className="text-red-500 mt-1 mb-1">{course.teacher}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}

export default Fastbootcamp;
