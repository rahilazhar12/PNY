import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='max-sm:hidden md:hidden xl:block lg:block px-3 text-white  bg-[#152438] h-[50px]'>
          <ul className='flex space-x-4 lg:justify-center xl:justify-around'>
            <li><span className='mr-1'><i class="fa-solid fa-phone"></i></span>03041111774</li>
            <li><span className='mr-1'><i class="fa-solid fa-envelope"></i></span>info@pnytrainings.com</li>
            <li className='bg-[#FFBA4A] blinking-text rounded-md flex justify-center items-center lg:w-[350px] h-[21px] xl:w-[200px] text-black '>Fast Track Pro Bootcamps in 2023</li>
            <li>Amazon Services</li>
            <li>Kids Courses</li>
            <li>Female Courses</li>
            <li>Training Schedule</li>
            <li>Fee Strcture</li>
            <li>Admission</li>
            <li><button className='navbarbuttons bg-[#308AFF] rounded-md w-[57px] h-[25px]'>Login</button></li>
            <li><button className='navbarbuttons bg-[#F10900] rounded-md w-[57px] h-[25px]'>Paynow</button></li>

          </ul>
        </div>


       
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
              <li>Amazon Services</li>
              <li>Kids Courses</li>
              <li>Female Courses</li>
              <li>Training Schedule</li>
              <li>Fee Strcture</li>
              <li>Admission</li>
              <li className='bg-[#FFBA4A] blinking-text rounded-md flex justify-center items-center'>Fast Track Pro Bootcamps in 2023</li>
              <li><button className='navbarbuttons bg-[#308AFF] rounded-md w-[70px] h-[px]'>Login</button></li>
              <li><button className='navbarbuttons bg-[#F10900] rounded-md w-[90px] h-[px]'>Pay Now</button></li>
            </ul>
          </div>
         
          
       
      </nav>



    </>
  )
}

export default Navbar
