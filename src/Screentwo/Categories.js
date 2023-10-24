import React, { useEffect, useState } from 'react';
import Searchbar from '../Components/Searchbar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import instructornew from '../Categories/data/Instructor'

const Categories = () => {
  // Define an array of API endpoints
  const apiEndpoints = [
    "https://www.pnytrainings.com/api/category/diploma",
    "https://www.pnytrainings.com/api/category/development",
    "https://www.pnytrainings.com/api/category/Multimedia",
    "https://www.pnytrainings.com/api/category/designing",
    "https://www.pnytrainings.com/api/category/language",
    "https://www.pnytrainings.com/api/category/amazon-courses",
    "https://www.pnytrainings.com/api/category/business",
    "https://www.pnytrainings.com/api/category/marketing"
    // Add more API endpoints here
  ];

  const [categoryCourses, setCategoryCourses] = useState([]);
  const [newdata, setNewdata] = useState([])
  const [newdata1 , setNewdata1] = useState([])
  const [instructor , setInstructor] = useState([])
  
  const { slug } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      const apiDataArray = [];
      for (const endpoint of apiEndpoints) {
        try {
          const response = await fetch(endpoint);
          if (response.ok) {
            const fetchedData = await response.json();
            if (fetchedData.category.url_slug === slug) {
              apiDataArray.push(fetchedData);
            }
          } else {
            console.error(`Failed to fetch data from ${endpoint}`);
          }
        } catch (error) {
          console.error(`Error fetching data from ${endpoint}:`, error);
        }
      }
  
      if (apiDataArray.length > 0) {
        const currentCategory = apiDataArray[0].category;
        const courses = apiDataArray[0].category_courses;
        const Instructors = apiDataArray[0].category_instructors;
  
        setCategoryCourses(currentCategory);
        setNewdata1(courses);
        setInstructor(Instructors)
        console.log(courses , 'courses')
      }
    };
  
    fetchData();
  }, [slug, apiEndpoints]);
  
  useEffect(() => {
    setNewdata(categoryCourses);
  }, [categoryCourses]);
  


  return (
    <>
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
                <h1 className=" text-white sm:text-3xl text-4xl  mb-4 text-gray-900 font-bold">{newdata.name} </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-white">{newdata.description_short}</p>
              </div>
            </div>
          </section>
        </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-3 ml-5">Add Courses in {newdata.name}</h1>
    <div className="flex flex-wrap -m-4 items-center justify-center">
      {newdata1.map((item, index) => (
        <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="p-4 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <img src={item.course_image} alt="Image 1" className="h-40 w-full object-cover rounded-xl mb-2" />
            <div className="flex justify-between w-50 mb-4">
              <div className="flex">
                <i className="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
                <p>Design</p>
              </div>
              <div className="flex">
                <i className="fas fa-clock text-gray-400 mt-1 mx-1"></i>
                <p>6 Months</p>
              </div>
            </div>
            <div className="w-full">
              <h2 className="title-font font-medium text-sm text-gray-900 mb-3">{item.name}</h2>
              <h3 className="text-red-500 mt-1 mb-1">{item.teacher}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




        <section className="text-gray-600 body-font shadow-md bg-gray-100 text-center pt-16">
          <h1 className=" text-black sm:text-3xl text-2xl text-center title-font text-gray-900 mb-5 font-bold">Most Popular Instructors in {newdata.name}</h1>
          <div className="container px-5 py-2 mx-auto ml-15">
            <div className="flex flex-wrap -m-4">
              {instructor.map((x) => {
                return (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                    <a className="block relative h-40 rounded overflow-hidden">
                      <img alt="ecommerce" className="mx-auto object-cover object-center w-32 block" src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" />
                    </a>
                    <div className="">
                      <h3 className="text-lg tracking-widest title-font text-black font-bold">{x.name}</h3>
                      <h2 className="title-font text-xs font-medium text-sm text-justify">{x.other_info}</h2>
                    </div>
                  </div>

                )
              }
              )}
            </div>
          </div>
        </section>



      </div>

    </>
  )
}

export default Categories;
