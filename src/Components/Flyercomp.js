import React from 'react'
// Initialization for ES Users
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });

const Flyercomp = ({courses}) => {
 
  return (
   <>
<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
    <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt />
    <a href="#!">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
    </a>
  </div>
  <div className="p-6">
    <h5 className="mb-2 text-xl text-center flex justify-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {courses}
    </h5>
   
   
  </div>
</div>

   </>
  )
}

export default Flyercomp