import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div class="navbar   bg-[]">
        <div class="navbar-start lg:hidden">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Amazon Services</a></li>
              <li><a>Kids Courses</a></li>
              <li><a>Female Courses</a></li>
              <li><a>Training Schedule</a></li>
              <li><a>Fee Strcture</a></li>
              <li><a>Admission</a></li>

            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a><i class="fa-solid fa-phone"></i>03041111774</a></li>
            <li><a><i class="fa-solid fa-envelope"></i>info@pnytrainings.com</a></li>
          </ul>
        </div>

        <div class="lg:hidden">
          <ul class="menu">
            <li><a> <i class="fa-solid fa-phone"></i>03041111774</a></li>
            <li><a><i class="fa-solid fa-envelope"></i>info@pnytrainings.com</a></li>
          </ul>
        </div>
        <div  class="ml-10 hidden lg:flex">
          <ul class="menu menu-horizontal px-1 " >
            <li className='hover:text-red-700'><a>Amazon Services</a></li>
            <li><a>Kids Courses</a></li>
            <li><a>Female Courses</a></li>
            <li><a>Training Schedule</a></li>
            <li><a>Fee Strcture</a></li>
            <li><a>Admission</a></li>
          </ul>
        </div>
        <div className='gap-2 flex lg:w-64 justify-end max-sm:hidden'>
          <div class="">
            <a class="btn btn-sm btn-outline btn-info rounded-lg text-white hover:text-black">Login</a>
          </div>
          <div class="">
          <a class="btn btn-sm btn-outline btn-error rounded-lg text-white hover:text-black">Pay Now</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
