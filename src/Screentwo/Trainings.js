import React from 'react'
import Searchbar from '../Components/Searchbar'



const Trainings = () => {
  const parentTabContentSelector = "data-tabs-target"
  return (
    <div>
      <section>
        <Searchbar />
      </section>

      <header className="text-gray-600 body-font bg-gray-50">
        <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
            <span className="ml-3 text-sm text-gray-800">Home</span>
            <svg class="w-2 h-2 text-gray-800 dark:text-white mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
            <span className="ml-3 text-sm text-blue-900">Trainings</span>
          </a>
        </div>
      </header>
      <section class="">
        <div className="grid lg:grid-cols-4 p-10">
          <div className='col-span-2 text-[32px] font-semibold'>Training Schedule</div>
          <div className=' col-span-2 flex justify-end gap-5'>
            <div>
              <button className='px-[16px] py-[10px] max-sm:w-full border rounded-xl text-[14px] text-[#308AFF] font-medium border-[#308AFF]'>Enrol Now (Limited seats left)</button>
              </div>
            <div>
              <button className='px-[16px] py-[10px] max-sm:w-full rounded-xl bg-blue-500 text-white'>Training Schedule</button></div>
          </div>
        </div>
      </section>


      <div className='container px-10'>
        <div data-tabs-toggle={parentTabContentSelector}>
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li role="presentation">
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

      <header className="text-gray-600 body-font px-10">
        <div className="container mx-auto flex flex-col md:flex-row">
          <nav className="flex flex-wrap items-center text-base md:ml-auto me-auto w-full">
            <button type="button" class="text-white bg-[#308AFF] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2">Arfa Tower</button>
            <button type="button" class="text-dark-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Johar Town</button>
            <button type="button" class="text-dark-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Iqbal Town</button>


            <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-30">
              <svg class="w-4 h-4 text-gray-800 dark:text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>Search for the courses/seminars
            </button>
          </nav>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-2 md:mt-0">
              <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>Starting Date
            </button>
          </div>
        </div>
      </header>


      <div class=" container relative overflow-x-auto shadow-md sm:rounded-lg px-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Upcoming Courses / Seminars
              </th>
              <th scope="col" class="px-6 py-3">
                Starting Date
              </th>
              <th scope="col" class="px-6 py-3">
                Days & Timings
              </th>
              <th scope="col" class="px-6 py-3">
                Duration
              </th>

            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Certified MEAN & MERN Stack Web Developer
              </th>
              <td class="px-6 py-4">
                6th June, 2023
              </td>
              <td class="px-6 py-4">
                Monday 12 PM - 2 PM
                Tuesday 12 PM - 2 PM
                Wednesday 12 PM - 2 PM
              </td>
              <td class="px-6 py-4">
                12 months
              </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Full Stack JavaScript Developer
              </th>
              <td class="px-6 py-4">
                7th June, 2023
              </td>
              <td class="px-6 py-4">
                Monday 12 PM - 2 PM
                Tuesday 12 PM - 2 PM
                Wednesday 12 PM - 2 PM
              </td>
              <td class="px-6 py-4">
                06 months
              </td>

            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Full Stack Software Quality Assurance (Manual, Automation and Performance)
              </th>
              <td class="px-6 py-4">
                12th June, 2023
              </td>
              <td class="px-6 py-4">
                Wednesday 6 PM - 8 PM
                Thursday 6 PM - 8 PM
              </td>
              <td class="px-6 py-4">
                06 months
              </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Marketing AI Tools - Enhancing Your Digital Marketing Strategies(bootcamp)
              </th>
              <td class="px-6 py-4">
                16th June, 2023
              </td>
              <td class="px-6 py-4">
                Friday 8 PM - 10 PM
                Saturday 8 PM - 10 PM
                Sunday 8 PM - 10 PM
              </td>
              <td class="px-6 py-4">
                1.5 months
              </td>
            </tr>
            <tr>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1 Year Diploma in Graphic Design, Photography and Web Design (DGPWD)
              </th>
              <td class="px-6 py-4">
                21st June, 2023
              </td>
              <td class="px-6 py-4">
                Saturday 4 PM - 6 PM
                Sunday 4 PM - 6 PM
              </td>
              <td class="px-6 py-4">
                06 months
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Trainings