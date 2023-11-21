import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Citywisedata = () => {

    const { name } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchdatacitywise = async () => {
            try {
                let response = await axios.get(`https://www.pnytrainings.com/api/city/${name}`)
                setData(response.data)
            } catch (error) {

            }
        }
        fetchdatacitywise()
    }, [name])

    console.log(data, 'data______')

    const renderItem = (item) => (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 col-span-2 w-[700px]">

            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 col-span-2">
                <a href="#!">
                    <img className="rounded-t-lg w-full h-[382px]" src={item.spage_image} alt />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {item.name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {item.description_short}
                    </p>

                    <Link to={`/specialpage/${item.url_slug}`}>
                        <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
                            Button
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className='grid grid-cols-3 gap-3 p-3'>
                {data.special_pages && data.special_pages.length > 0 ? (
                    data.special_pages.map((item) => {
                        // Skipping "Short Courses in Lahore"
                        if (item.name !== "Short Courses in Lahore") {
                            return renderItem(item);
                        }
                        return null; // Skip rendering this item in the main grid
                    })
                ) : (
                    <p>No data</p>
                )}
            </div>

            {/* Optionally render "Short Courses in Lahore" in a different location */}
            {/* {data.special_pages && data.special_pages.some(item => item.name === "Short Courses in Lahore") && (
            <div> */}
            {/* <h2>Short Courses in Lahore</h2> */}
            {/* Render the "Short Courses in Lahore" item separately */}
            {/* {data.special_pages.filter(item => item.name === "Short Courses in Lahore").map(renderItem)} */}
            {/* </div> */}
            {/* )} */}
        </>

    )
}

export default Citywisedata