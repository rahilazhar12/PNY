import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Categoriesdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://www.admin786.pnytrainings.com/api/menu")
      .then((response) => response.json())
      .then((data) => {
        setData(data.categories_menu);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(data)

  return (
    <>
      <section className="mt-2">
        <div className="group inline-block">
          <button className="outline-none focus:outline-none  border px-3 py-1 bg-blue-400 text-white h-[36px]  rounded-lg flex items-center w-52">
            <span className="pr-1 font-semibold flex-1">Categories</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul className="bg-white border border-gray-200 z-50 rounded-lg shadow-lg transform scale-0 group-hover:scale-100 absolute transition duration-200 ease-in-out origin-top min-w-36">
            {data.map((item) => (
              <li className="rounded-lg relative px-4 py-2 hover:bg-blue-50" key={item.url_slug}>
                {/* Main Category Link */}
                <Link
                  to={item.url_slug === 'google-scholarship-certification-in-lahore-pakistan' || item.url_slug === 'fast-track-pro-bootcamps' ? `/${item.url_slug}` : `/courses/${item.url_slug}`}
                  className="w-full text-left flex items-center outline-none focus:outline-none text-gray-800 hover:text-blue-600"
                >
                  <span className="pr-2 flex-1 text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  );
};

export default Categoriesdata;
