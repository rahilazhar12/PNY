import React, { useEffect, useState } from 'react'
import course from '../Categories/data/courses'
import instructor from '../Categories/data/Instructor';
import Searchbar from '../Components/Searchbar';
import Footer from '../Components/Footer';
import { frame } from 'framer-motion';

const AllCourses = () => {
const [pro, setPro] = useState([])


  const detadata = async () => {
  
    let res = await fetch('https://www.pnytrainings.com/api/get-courses');
    res = await res.json();
    setPro(res)
 
  }



  useEffect(()=>{
    detadata();
    window.scrollTo(0, 0);
  }, [])


    const [item, setItem]= useState(course);
    console.log(item)
    
    const Filter =(instruc)=>{
    const update =course.filter((catitem)=>{
        return catitem.instuctor == instruc
    })
    setItem(update)
    }
  return (
    <>
    <div>
      <section>
        <Searchbar/>
      </section>
    <section className="text-gray-400  body-font bg-[#152438]">
    <div className="container px-5 py-16 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-bold  text-center text-white">Explore Skilled Courses</h1>
    <div className="flex justify-center items-center mx-5 flex-wrap mx-auto my-4 lg:w-1/1 sm:w-full h-full">
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2" >Featured</button>
  </div>
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2" onClick={()=>Filter("Ayesha Amjad")}>Development</button>
  </div>
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Marketing</button>
  </div>
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Design</button>
  </div>
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Business</button>
  </div>
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Accounts</button>
  </div>
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Photography</button>
  </div>
  <div className="col-span-6 md:col-span-3">
    <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Multimedia</button>

  </div>
  <div className="col-span-6 md:col-span-3">
  <button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">IT Softwares</button>
</div>
<div className="col-span-6 md:col-span-3">
<button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Sewing</button>
</div>
<div className="col-span-6 md:col-span-3">
<button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">SEO</button>
</div>
<div className="col-span-6 md:col-span-3">
<button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">React JS</button>
</div>
<div className="col-span-6 md:col-span-3">
<button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Photography</button>
</div>
<div className="col-span-6 md:col-span-3">
<button type="button" className="text-white border border-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Acting</button>
</div>

</div>
<section className="text-gray-600 body-fon">
<div className="container px-5 py-10 mx-auto">


<div className="flex flex-wrap -m-4">
{pro.map((x)=>{
  // console.log(x.name)
  (x.obj.map((item)=>{
    console.log(item.name)
  }))
})}
{/* Card 1 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/1 (4).png" alt="Image 1" className="w-full rounded h-40 object-cover mb-4" />
    <div class="flex justify-between w-50 mb-4">
    <div class="flex">
      <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
      <p className="text-blue-500">Design</p>
    </div>
    <div class="flex">
      <i class="fas fa-clock text-gray-400 mt-1 mx-1"></i>
      <p>6 Months</p>
    </div>
</div>
    <div className="w-full">
    <h2 className="title-font font-medium text-lg text-gray-900">Certified Digital Media Marketing (CDMM) Expert
    Course (06 Months)</h2>
    <h3 className="text-red-500 font-bold mb-0.5 mt-1">Ayesha Amjad</h3>
  </div>
  </div>
</div>
{/* Card 2 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/2 (2).png" alt="Image 2" className="w-full rounded h-40 object-cover mb-4" />
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
      <h2 className="title-font font-medium text-lg mb-3 text-gray-900">Become a Certified Web Designer & Developer
      </h2>

      <h3 className="text-red-500 font-bold mb-4 mt-4">Asim Manzoor</h3>
     
      
    </div>
  </div>
</div>
{/* Card 3 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/3 (2).png" alt="Image 3" className="w-full rounded h-40 object-cover mb-4" />
   <div class="flex justify-between w-50 mb-4">
        <div class="flex">
        <i class="fa-solid fa-rectangle-ad mt-1 mx-1"></i>
          <p className="text-blue-500">Marketing</p>
        </div>
        <div class="flex">
          <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
          <p >6 Months</p>
        </div>
  </div>
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">Become a Certified Full Stack Web Developer</h2>
          <h3 className="text-red-500 font-bold mb-3 mt-5">Faisal Javeed</h3>
          
        </div>
  </div>
</div>
{/* Card 4 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/1 (3).png" alt="Image 4" className="w-full rounded h-40 object-cover mb-4" />
    <div class="flex justify-between w-50 mb-4">
    <div class="flex">
      <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
      <p clasName="text-blue-500">Design</p>
    </div>
    <div class="flex">
      <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
      <p >6 Months</p>
    </div>
</div>
    <div className="w-full">
    <h2 className="title-font font-medium text-lg text-gray-900">Certified Digital Media
    Marketing (CDMM) Expert
    Course (06 Months)
    </h2>
    <h3 className="text-red-500 font-bold mb-1 mt-0.5">Aqsa Razzaq</h3>
  </div>
  </div>
</div>
</div>
<div className="flex flex-wrap -m-4">
{/* Card 1 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/1 (4).png" alt="Image 1" className="w-full rounded h-40 object-cover mb-4" />
    <div class="flex justify-between w-50 mb-4">
    <div class="flex">
      <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
      <p className="text-blue-500">Design</p>
    </div>
    <div class="flex">
      <i class="fas fa-clock text-gray-400 mt-1 mx-1"></i>
      <p>6 Months</p>
    </div>
</div>
    <div className="w-full">
    <h2 className="title-font font-medium text-lg text-gray-900">Certified Digital Media Marketing (CDMM) Expert
    Course (06 Months)</h2>
    <h3 className="text-red-500 font-bold mb-0.5 mt-1">Ayesha Amjad</h3>
  </div>
  </div>
</div>
{/* Card 2 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/2 (2).png" alt="Image 2" className="w-full rounded h-40 object-cover mb-4" />
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
      <h2 className="title-font font-medium text-lg mb-3 text-gray-900">Become a Certified Web Designer & Developer
      </h2>

      <h3 className="text-red-500 font-bold mb-4 mt-4">Asim Manzoor</h3>
     
      
    </div>
  </div>
</div>
{/* Card 3 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/3 (2).png" alt="Image 3" className="w-full rounded h-40 object-cover mb-4" />
   <div class="flex justify-between w-50 mb-4">
        <div class="flex">
        <i class="fa-solid fa-rectangle-ad mt-1 mx-1"></i>
          <p className="text-blue-500">Marketing</p>
        </div>
        <div class="flex">
          <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
          <p >6 Months</p>
        </div>
  </div>
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">Become a Certified Full Stack Web Developer</h2>
          <h3 className="text-red-500 font-bold mb-3 mt-5">Faisal Javeed</h3>
          
        </div>
  </div>
</div>
{/* Card 4 */}
<div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/images/1 (3).png" alt="Image 4" className="w-full rounded h-40 object-cover mb-4" />
    <div class="flex justify-between w-50 mb-4">
    <div class="flex">
      <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
      <p className="text-blue-500">Design</p>
    </div>
    <div class="flex">
      <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
      <p >6 Months</p>
    </div>
</div>
    <div className="w-full">
    <h2 className="title-font font-medium text-lg text-gray-900">Certified Digital Media
    Marketing (CDMM) Expert
    Course (06 Months)
    </h2>
    <h3 className="text-red-500 font-bold mb-1 mt-0.5">Aqsa Razzaq</h3>
  </div>
  </div>
  
</div>
</div>
</div>
</section>
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
<section className='lg:p-10'>
            <div className="grid justify-center">
              <div className=" lgh lg:p-2  dark:text-white">Our Affiliations</div>
              <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">Our collaboration with esteemed partners has strengthened our mission to empower youth through skills, making a lasting impact on their lives.</div>

              <div className="imageaffiliation flex justify-center max-sm:p-2 md:py-5">
                <img src="/images/Frame 624.png " alt="" />
              </div>

              <div className="flex justify-center p-5 gap-5 max-sm:hidden dark:text-white">
                <div className=' border-b-2 border-black'>Navtech certifications</div>
                <div className=' border-b-2 border-black'>Google scholarship programm</div>
                <div className=' border-b-2 border-black'>Free learning courses</div>
                <div className=' border-b-2 border-black'>Internship program</div>
              </div>
            </div>
          </section>
    
    
    
    
    </div>
  
    </>
  )
}

export default AllCourses