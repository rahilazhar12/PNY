import React from "react";
import { Link } from "react-router-dom";
import PNYlogo from "../Assets/image/PNY Trainings logo.png";
import PNYdark from "../Assets/image/pny logo dark.jpg.png";
import { Flowbite } from "flowbite-react";
import Categoriesdata from "./Categoriesdata";
import Allcoursessearchbar from "./Allcoursessearchbar";

const Searchbar = () => {
    return (
        <Flowbite>
            <section className="p-4 shadow-md sticky top-12 z-50 bg-white">
                <div className="grid lg:grid-cols-12 md:grid-cols-8 max-sm:space-y-1">
                    <Link to="/">
                        <div className="max-sm:flex max-sm:justify-center lg:col-span-1">
                            <img
                                className="cursor-pointer lg:w-[85px] h-[75px] dark:block hidden"
                                src={PNYdark}
                                alt=""
                            />
                            {/* Show this image only in light mode */}
                            <img
                                className="cursor-pointer lg:w-[85px] h-[75px] block dark:hidden"
                                src={PNYlogo}
                                alt=""
                            />
                        </div>
                    </Link>

                    <div className=" lg:col-span-2 md:col-span-2">
                        <div className=" max-sm:flex max-sm:justify-center">
                            <Categoriesdata />
                        </div>
                    </div>

                    <Allcoursessearchbar />

                    <div className=" lg:col-span-3 xl:col-span-5 md:col-span-12">
                        <div className=' text-slate-900 dark:text-white  text-base font-medium tracking-tight">Writes Upside-Down lg:mt-2'>
                            <ul className="flex max-sm:justify-center gap-5  lg:justify-end">
                                <li className="font-bold hover:text-blue-400 mt-1">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="font-bold hover:text-blue-400 mt-1">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="font-bold hover:text-blue-400 mt-1">
                                    <Link to="/blog">Blog</Link>
                                </li>

                                <li className="font-bold hover:text-blue-400 mt-1">
                                    <Link to="/contactus">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Flowbite>
    );
};

export default Searchbar;
