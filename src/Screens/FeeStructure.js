import React from 'react'


const FeeStructure = () => {
 const parentTabContentSelector = "data-tabs-target"
  return (
    <div>
    
   <header className="text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
    <span className="ml-3 text-sm text-gray-800">Home</span>
    <svg class="w-2 h-2 text-gray-800 dark:text-white mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
      <span className="ml-3 text-sm text-blue-900">Fee Structure</span>
    </a>
  </div>
</header>
<header className="text-gray-600 body-font bg-[#308AFE]">
<div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
<p class="text-sm text-white mx-auto leading-relaxed text-base">Note: Registration Fee For 1 Year Duration Diploma Program: 10,000/-Rs  |  Registration Fee For 6 Months Duration Courses: 5000/- Rs  |  Registration Fee For 1 Month to 3 Months Courses: 2000/- Rs</p>
</div>
</header>
<section class="text-gray-600 body-font">
<div class="container px-4 py-10 mx-auto">
  <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start w-100 mx-auto">
    <h1 class="flex-grow sm:pr-16 text-2xl  font-bold text-black">Fee Structure</h1>
    <button class="flex-shrink-0 text-blue-900 border-blue-500 border-solid border-2 py-2 px-2 focus:outline-none hover:bg-[#308AFF] rounded  mt-10 sm:mt-0 mx-3">Enrol Now (Limited seats left)</button>
    <button class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">Training Schedule</button>
  </div>
</div>
</section>


<div className='container'>
<div data-tabs-toggle={parentTabContentSelector}>
  <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
      <li  role="presentation">
        <button className="inline-block p-2 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Lahore</button>
      </li>
      <li className="mr-2" role="presentation">
        <button className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Rawalpindi</button>
      </li>
    </ul>
  </div>
  <div id="myTabContent">
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
     



    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
      <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
   
   
  </div>
</div>
  </div>

<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col md:flex-row">
    <nav className="flex flex-wrap items-center text-base md:ml-auto me-auto w-full">
    <button type="button" class="text-white bg-[#308AFF] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2">All</button>
    <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">2 months</button>
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">3 months</button>
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">1.5 months</button>
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">6 months</button>
        
    <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-30">
    <svg class="w-4 h-4 text-gray-800 dark:text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg>Search for the courses
</button>
    </nav>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-2 md:mt-0">
      <svg class="w-4 h-4 text-gray-800 dark:text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h14M1 6h14M1 11h7"/>
    </svg>Filter
      </button>
    </div>
  </div>
</header>
<div className=" container relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
    <th scope="col" className="p-6">
      Serial No
  </th>
  
      <th scope="col" className="px-6 py-3">
      Course Name
      </th>
      <th scope="col" className="px-6 py-3"> 
      Course Fee
      </th>
      <th scope="col" className="px-6 py-3">
      Registration Fee
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
       01
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Diploma in Advance Web Technology (DAWT)
      </th>
      <td className="px-6 py-4">
      PKR. 10,000 (Discounted fee)
PKR. 15,000
      </td>
      <td className="px-6 py-4">
      PKR. 10,000
      </td>
    
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        02
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Become a Tailwind CSS, Python and Ruby on Rails Developer
      </th>
      <td className="px-6 py-4">
      PKR. 70,000
      </td>
      <td className="px-6 py-4">
      PKR. 5,000
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
       03
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Digital marketing with Artificial Intelligence & Project Management
      </th>
      <td className="px-6 py-4">
      PKR. 23,000
      </td>
      <td className="px-6 py-4">
      PKR. 2,000
      </td>
   
     
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
      04
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Become Expert in Advance UiUx in figma, Digital Painting & Visual Merchandising
      </th>
      <td className="px-6 py-4">
      PKR. 55,000
      </td>
      <td className="px-6 py-4">
      PKR. 5,000
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
       05
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Digital Marketing & Artificial Intelligence (for technical analysis)
      </th>
      <td className="px-6 py-4">
      PKR. 100,000
      </td>
      <td className="px-6 py-4">
      PKR. 100,000
      </td>
    </tr>
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        06
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Diploma in Advance Web Technology (DAWT)
      </th>
      <td className="px-6 py-4">
      PKR. 23,000
      </td>
      <td className="px-6 py-4">
      PKR. 2,000
      </td>
    </tr>
  </tbody>
</table>
</div>


    </div>
  )
}

export default FeeStructure