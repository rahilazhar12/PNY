import React, { useState, useEffect } from 'react'
import Searchbar from '../Components/Searchbar'
import axios from 'axios'



const Trainings = () => {
  const parentTabContentSelector = "data-tabs-target"

  const [batches, setBatches] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);


  

  useEffect(() => {
    axios.get('https://lms.pnytraining.com/api/trainingSchedules?type=month&duration=2')
      .then(response => {
        setBatches(response.data.Batches);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setSelectedDivision(null); // Reset division selection when a new city is selected
  };

  const handleDivisionClick = (division) => {
    setSelectedDivision(division);
  };

  const getDivisions = (cityBatches) => {
    const divisions = new Set();
    cityBatches.forEach(batch => {
      if (batch.branch && batch.branch.DivisionName) {
        divisions.add(batch.branch.DivisionName);
      }
    });
    return Array.from(divisions);
  };

  const formatSessionTimings = (days) => {
    // Check if 'days' is an array and has elements
    if (Array.isArray(days) && days.length > 0) {
      // Map each day to a formatted string and join them with a comma
      return days.map(day => `${day.day}: ${day.start_time} - ${day.end_time}`).join(', ');
    } else {
      // Return a default message if 'days' is not an array or is empty
      return 'No schedule available';
    }
  };

  const calculateDurationInMonths = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const yearsDifference = end.getFullYear() - start.getFullYear();
    const monthsDifference = end.getMonth() - start.getMonth();
    const totalMonths = (yearsDifference * 12) + monthsDifference;
  
    return `${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
  };
  
  
  


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


              {/* <h2>Select a City</h2> */}
              <div>
                {Object.keys(batches).map(city => (
                  <button key={city} onClick={() => handleCityClick(city)}>
                    <li role="presentation">
                      <button className="inline-block p-2 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{city}</button>
                    </li>
                  </button>
                ))}
              </div>



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
            {selectedCity && batches[selectedCity] && (
              <>
                {/* <h3>{selectedCity}</h3> */}
                {/* <h4>Select a Division</h4> */}
              
                <div>
                  {getDivisions(batches[selectedCity]).map(division => (
                    <button key={division} onClick={() => handleDivisionClick(division)}>
                      <button type="button" class="text-white bg-[#308AFF] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2">{division}</button>
                    </button>
                  ))}

                </div>
              </>
            )}





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


      <div class=" container relative overflow-x-auto px-5  ml-5 mt-5">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Session Timings</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
            </tr>
          </thead>
          <tbody>
            {selectedCity && batches[selectedCity].filter(batch => batch && (!selectedDivision || (batch.branch && batch.branch.DivisionName === selectedDivision))).map(batch => (
              <tr key={batch.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {batch.courseName}
                </td>
                <td className="px-6 py-4">
                  {batch.start_date}
                </td>
                <td className="px-6 py-4">
                {formatSessionTimings(batch.days)}
                </td>
                <td className="px-6 py-4">
                {calculateDurationInMonths(batch.start_date, batch.end_date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Trainings