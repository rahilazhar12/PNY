import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Searchbar from "../Components/Searchbar";
import { Flowbite } from "flowbite-react";
import gif from '../Assets/image/gif.gif'

const Blog = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.admin786.pnytrainings.com/api/featuredposts/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.featured_posts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [filter, setFilter] = useState("All");

  const handlefilter = (filtercriteria) => {
    setFilter(filtercriteria);
  };

  const filterData = data.filter((item) => {
    return filter === "All" || item.title.includes(filter);
  });

  // const getFirstTwentyWords = (text) => {
  //     return text.split(' ').slice(0, 20).join(' ');
  // };

  if (isLoading) {
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
    <Flowbite>
      <main className="bg-gray-100 dark:bg-slate-800    ring-1 ring-slate-900/5 shadow-xl">
        {/* Section-1 */}
        <Searchbar />

        {/* Section-2 */}
        <section className="bg-gray-800 lg:h-[500px] h-auto sm:h-96 max-sm:p-2">
          <div className="main grid text-white justify-center">
            <div className="blog text-3xl font-semibold px-6 mt-8 sm:text-5xl sm:px-20 sm:mt-20 text-center">
              Blogs and insights
            </div>
            <div className=" text-[20px] text-center mt-3 sm:mt-6">
              Get knowledge with the latest blog insights.
            </div>
          </div>

          <div className="list text-white">
            <ul className="flex flex-wrap justify-center mt-6 sm:mt-10">
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("All")}
              >
                All
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Technology")}
              >
                Technology
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Marketing")}
              >
                {" "}
                Marketing
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Software")}
              >
                Software
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Education")}
              >
                Education
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Short Courses in Islamabad")}
              >
                Short Courses in Islamabad
              </li>
            </ul>
            <ul className="flex flex-wrap justify-center mt-3 sm:mt-6">
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Short courses in Faisalabad")}
              >
                Short courses in Faisalabad
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("IT Softwares")}
              >
                IT Softwares
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("SEO")}
              >
                SEO
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Design")}
              >
                Design
              </li>
              <li
                className="border border-gray-500 rounded-xl p-2 text-center mx-2 my-1 hover:bg-blue-600 cursor-pointer"
                onClick={() => handlefilter("Photography")}
              >
                Photography
              </li>
            </ul>
          </div>
        </section>

        {/* Section-3 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:p-20 max-sm:p-2">
          {filterData.map((item, index) => (
            <Card key={index}>
              <img
                className="rounded-2xl max-sm:h-52 lg:w-[462px] lg:h-[240px]"
                src={item.post_image_thumb}
                alt=""
              />

              <h5
                className="text-2xl text-[#F10900] font-bold tracking-tight  dark:text-white"
                data-aos="fade-up-right"
              >
                {item.title}
              </h5>
              {/* <h5 className="text-xl tracking-tight text-gray-900 dark:text-white" data-aos="fade-up-left">
                                {item.description1}
                            </h5> */}
              <p
                className="font-normal text-gray-700 dark:text-gray-400"
                data-aos="fade-up-right"
              >
                {item.description_short}
              </p>
              <Link to={`/blog/marketing/${item.url_slug}`}>
                <Button>Read more</Button>
              </Link>
            </Card>
          ))}
        </section>
      </main>
    </Flowbite>
  );
};

export default Blog;
