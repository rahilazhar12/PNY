import React from "react";


function Modalb({ setOpenModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modalContainer bg-white p-4 rounded shadow-lg">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
           <p className="text-red-500"> Close</p>
          </button>
        </div>
        <div className="body">
        <div className="static left-0 top-0 z-[1055] block h-80 w-full overflow-y-auto overflow-x-hidden outline-none">
          <div className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
            <div className=""></div>
            <h1 className="text-2xl text-bold rounded text-center text-white bg-blue-500 h-10">Course Dates</h1>
          </div>
          <h3 className="text-blue-500 border-b border-blue-500 font-bold mt-3">Arfa Karim Tower</h3>
      
          <section className="md:flex md:justify-between">
          
          </section>
          <h3 className="text-blue-500 border-b border-blue-500 font-bold mt-3">Johar Town</h3>
      
          <section className="md:flex md:justify-between">
         
          </section>
          <h3 className="text-blue-500 border-b border-blue-500 font-bold mt-3">Allama Iqbal Town</h3>
      
          <section className="md:flex md:justify-between">
        
          </section>
        </div>
      </div>
      
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
           
     <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-5">Cancel</button>
          </button>
          <button type="button" class="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Choose plan
        
        </button>
        </div>
      </div>
    </div>
  );
}

export default Modalb;
