import React, { useEffect, useState } from 'react';
import Searchbar from '../Components/Searchbar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import instructornew from '../Categories/data/Instructor'
import { Blocks } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Categories = () => {
  const [category, setCategory] = useState(null);
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();




  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.pnytrainings.com/api/category/${slug}`);
        if (response.ok) {
          const { category, category_courses: courses, category_instructors: instructors } = await response.json();
          setCategory(category);
          setCourses(courses);
          setInstructors(instructors);
        } else {
          console.error(`Failed to fetch data for category slug: ${slug}`);
          setError(`Failed to fetch category data. Please try again later.`);
        }
      } catch (error) {
        console.error(`Error fetching data for category slug: ${slug}:`, error);
        setError(`Failed to fetch category data. Please try again later.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="loader-container text-center">
        <div className="loader"></div>
        {/* <p>Loading...</p> */}
      </div>
    );
  }

  console.log(category, 'cat')




  return (
    <>
      <Helmet>
        <title>Categories</title>
        <meta name="description123" content="Your page description" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <div>
        <section>
          <Searchbar />
        </section>
        {/*   
      <div className='main'>
          {categoryCourses.map((course, index) => (
            <div key={index}>
              <h1>{course.name}</h1>
            </div>
          ))}
        </div> */}

        <div className='main'>
          <section className="text-gray-600 body-font bg-[#152438]">
            <div className="container  py-20 mx-auto">
              <div className="flex flex-col text-center w-full">
                <h1 className=" text-white sm:text-3xl text-4xl  mb-4 text-gray-900 font-bold">{category.name} </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-white">{category.description_short}</p>
              </div>
            </div>
          </section>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 ml-5 dark:text-white"> Feature Courses of {category.name}</h1>
            <div className="flex flex-wrap -m-4 items-center justify-center">
              {courses.length > 0 && (courses.map((item, index) => (

                <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                  <div className="p-4 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <Link to={`/${item.url_slug}`}>
                      <img src={item.course_image} alt="Image 1" className="  cursor-pointer w-full object-cover rounded-xl mb-2" />
                    </Link>
                    <div className="flex justify-between w-50 mb-4">
                      <div className="flex">
                        {/* <i className="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i> */}
                        <p>{category.name}</p>
                      </div>
                      <div className="flex">
                        {/* <i className="fas fa-clock text-gray-400 mt-1 mx-1"></i> */}

                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">{item.name}</h2>
                      <h2 className='text-black'>Course Fee : {item.monthly_tution_fee}</h2>
                      <h3 className="text-red-500 mt-1 mb-1">{item.teacher}</h3>
                    </div>
                  </div>
                </div>
              )))}
            </div>
          </div>
        </section>




        <section className="text-gray-600 body-font shadow-md bg-gray-100 text-center pt-16">
          <h1 className=" text-black sm:text-3xl text-2xl text-center title-font text-gray-900 mb-5 font-bold">Most Popular Instructors in {category.name}</h1>
          <div className="container px-5 py-2 mx-auto ml-15">
            <div className="flex flex-wrap -m-4">
              {instructors.length > 0 && (instructors.map((x) => {
                return (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                    <a className="block relative h-40 rounded overflow-hidden">
                      <img alt="ecommerce" className="mx-auto object-cover object-center w-32 block" src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" />
                    </a>
                    <div className="">
                      <h3 className="text-lg tracking-widest title-font text-black font-bold">{x.name}</h3>
                      {/* For teacher Description */}
                      {/* <h2 className="title-font text-xs font-medium text-sm text-justify">{}</h2> */}
                    </div>
                  </div>

                )
              }
              ))}
            </div>
          </div>
        </section>



      </div>

    </>
  )
}

export default Categories;
