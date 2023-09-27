import React from 'react'
import instructor from '../Categories/data/Instructor'
import Searchbar from '../Components/Searchbar'
import Footer from '../Components/Footer'
const Categories = () => {
  return (
    <>
    <div>
      <section>
        <Searchbar/>
      </section>
    <div className='main'>
   <section className="text-gray-600 body-font bg-[#152438]">
  <div className="container  py-20 mx-auto">
    <div className="flex flex-col text-center w-full">
      <h1 className=" text-white sm:text-3xl text-4xl  mb-4 text-gray-900 font-bold">Marketing Trainings and Tutorials</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-white">Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic-based course curriculums, which lead to a bright future.</p>
    </div>
  </div>
</section>
    </div>
    
    <section className="text-gray-600 body-fon">
  <div className="container px-5 py-20 mx-auto">
  <h1 className=" text-black sm:text-3xl text-3xl font-bold text-gray-900 mb-3">Top Courses in Marketing</h1>
  <div className="flex flex-wrap -m-4">
  {/* Card 1 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4  flex-grow">
    <div className=" p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img src="/images/1 (4).png" alt="Image 1" className="h-40 object-cover rounded-xl h-40 object-cover rounded-xl mb-2" />
      <div class="flex justify-between w-50 mb-4">
      <div class="flex">
        <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
        <p>Design</p>
      </div>
      <div class="flex">
        <i class="fas fa-clock text-gray-400 mt-1 mx-1"></i>
        <p>6 Months</p>
      </div>
  </div>
      <div className="w-full">
      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">Certified Digital Media Marketing (CDMM) Expert
      Course (06 Months)</h2>
      <h3 className="text-red-500  mt-1">Ayesha Amjad</h3>
    </div>
    </div>
  </div>
  {/* Card 2 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
    <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img src="/images/2 (2).png" alt="Image 2" className="w-full rounded h-46 object-cover mb-4" />
      <div class="flex justify-between w-50 mb-4">
      <div class="flex">
      <i className="fa-solid fa-desktop mr-1 mt-1 text-blue-500"></i>
        <p className="text-blue-500">Development</p>
      </div>
      <div class="flex">
        <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
        <p >6 Months</p>
      </div>
  </div>
      <div className="w-full">
        <h2 className="title-font font-medium text-sm mb-4 text-gray-900">Become a Certified Web Designer & Developer
        </h2>
  
        <h3 className="text-red-500  mb-2 mt-7">Asim Manzoor</h3>
       
        
      </div>
    </div>
  </div>
  {/* Card 3 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
    <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img src="/images/3 (2).png" alt="Image 3" className="w-full rounded h-46 object-cover mb-4" />
     <div class="flex justify-between w-50 mb-4">
          <div class="flex">
          <i class="fa-solid fa-rectangle-ad mx-1 mt-1 text-blue-500"></i>
            <p className="text-blue-500">Marketing</p>
          </div>
          <div class="flex">
            <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
            <p >6 Months</p>
          </div>
    </div>
          <div className="w-full">
            <h2 className="title-font font-medium text-sm text-gray-900">Become a Certified Full Stack Web Developer</h2>
            <h3 className="text-red-500 mb-2 mt-7">Faisal Javeed</h3>
            
          </div>
    </div>
  </div>
  {/* Card 4 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow ">
    <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
      <img src="/images/1 (3).png" alt="Image 4" className="w-full rounded h-46 object-cover mb-4" />
      <div class="flex justify-between w-50 mb-4">
      <div class="flex">
        <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
        <p text-blue-500>Design</p>
      </div>
      <div class="flex">
        <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
        <p >6 Months</p>
      </div>
  </div>
      <div className="w-full">
      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">Certified Digital Media
      Marketing (CDMM) Expert
      Course (06 Months)
      </h2>
      <h3 className="text-red-500  mb-1 mt-0.5">Aqsa Razzaq</h3>
    </div>
    </div>
    
  </div>
  </div>
  </div>
</section>



<section className="text-gray-600 body-font shadow-md bg-gray-100 text-center pt-16">
<h1 className=" text-black sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 mb-5 font-bold">Most Popular Instructors in Marketing</h1>
  <div className="container px-5 py-2 mx-auto ml-15">
    <div className="flex flex-wrap -m-4">
   {instructor.map((x)=>{
    return(
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <a className="block relative h-40 rounded overflow-hidden">
        <img alt="ecommerce" className="mx-auto object-cover object-center w-32 block" src={x.image} />
      </a>
      <div className="">
        <h3 className="text-lg tracking-widest title-font text-black font-bold">{x.Name}</h3>
        <h2 className="title-font text-xs font-medium text-sm">{x.instructor}</h2>
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

export default Categories

