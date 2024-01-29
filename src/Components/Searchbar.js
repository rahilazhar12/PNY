import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import PNYlogo from '../Assets/image/logohr.png'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { motion } from 'framer-motion';
import { BiCategory } from 'react-icons/bi'
import Categoriesdata from './Categoriesdata';
import Allcoursessearchbar from './Allcoursessearchbar';

const Searchbar = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the provided URL
        fetch('https://www.pnytrainings.com/api/header_menu')
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
    return (
        <Flowbite>
            <section className='p-4 shadow-md'>
                <div className="grid lg:grid-cols-12 md:grid-cols-8 max-sm:space-y-1">
                  <Link to='/'> <div className=' max-sm:flex max-sm:justify-center  lg:col-span-1 '>
                       <img className=' cursor-pointer lg:w-[75px] h-[55px]' src={PNYlogo} alt="" /> </div></Link> 

                    <div className=' lg:col-span-2 md:col-span-2'>
                        <div className=' max-sm:flex max-sm:justify-center'>
                          <Categoriesdata/>
                        </div>
                    </div>

                    {/* Searchbar */}
                    {/* <div className=' max-sm:flex max-sm:justify-center lg:col-span-6 xl:col-span-4 md:col-span-5'>
                        <input className='border max-sm:p-3 lg:w-80  md:w-80 md:ml-20 xl:ml-0 xl:w-full  lg:ml-20 h-9 rounded' placeholder='Search for the software or skills you want to learn' type="text" />
                    </div> */}

                    <Allcoursessearchbar/>

                    <div className=' lg:col-span-3 xl:col-span-5 md:col-span-12'>
                        <div className=' text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down lg:mt-2'>
                            <ul className='flex max-sm:justify-center gap-5  lg:justify-end'>
                                {/* <li className='font-bold hover:text-blue-400 mt-1 lg:hidden xl:block md:hidden max-sm:hidden'>
                                    <button className='btn btn-xs blinking-text btn-warning'>Fast Track Pro Bootcamps in 2023</button>
                                </li> */}
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/">Home</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/about">About</Link></li>
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/blog">Blog</Link></li>
                                {/* <li className='font-bold hover:text-blue-400 mt-1'><Link to="/contact">Design</Link></li> */}
                                <li className='font-bold hover:text-blue-400 mt-1'><Link to="/contactus">Contact</Link></li>
                                {/* <li className='font-bold hover:text-blue-400 mt-1 xl:hidden max-sm:hidden'>
                                    <button className='btn btn-xs blinking-text btn-warning'>Fast Track Pro Bootcamps in 2023</button>
                                </li> */}

                            </ul>
                        </div>
                        {/* sm */}
                        {/* <div className='text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down md:hidden lg:hidden'>
                            <ul className=' flex max-sm:justify-center mt-2'>
                                <button className='btn btn-xs blinking-text btn-warning'>Fast Track Pro Bootcamps in 2023</button>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>

        </Flowbite>
    )
}

export default Searchbar
