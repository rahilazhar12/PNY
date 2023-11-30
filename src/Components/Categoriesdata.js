import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

const Categoriesdata = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the provided URL
        fetch('https://www.pnytrainings.com/api/menu')
            .then((response) => response.json())
            .then((data) => {
                setData(data.categories_menu);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <section className=''>
                <div class="group inline-block">
                    <button class="outline-none focus:outline-none  border px-3 py-1 bg-blue-400 text-white h-[36px]  rounded-lg flex items-center w-52">
                        <span class="pr-1 font-semibold flex-1">Categories</span>
                        <span>
                            <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </span>
                    </button>
                    <ul class="bg-white border z-50 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                        <li className='ml-3'><Link to='/google-scholarship-certification-in-lahore-pakistan'>Google Certification</Link></li>
                        {data.map((item) => {
                            return (
                                <>
                                    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                        {/* Main Category Link */}
                                        <Link to={`/${item.url_slug}`} class="w-full text-left flex items-center outline-none focus:outline-none">
                                            <span class="pr-1 flex-1">{item.name}</span>
                                            <span class="mr-auto">
                                                <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                            
                                        </Link>
                                        <ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-[400px] cursor-pointer">
                                            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                                {/* <ul>
                                                    Sub-category Links
                                                    {item.obj.map((sub) => (
                                                        <li class="px-3 py-1 hover:bg-gray-100">
                                                            <Link to={`/${sub.url_slug}`}>{sub.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul> */}
                                            </div>
                                        </ul>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Categoriesdata