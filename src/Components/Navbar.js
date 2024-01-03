import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='max-sm:hidden md:hidden xl:block lg:block px-3 text-white  bg-[#152438] h-[50px]'>
          <ul className='flex  lg:justify-center  xl:justify-center space-x-4'>
            <li><span className='mr-1'>UAN -</span>03041111774</li>
            <li><span className='mr-1'><i class="fa-solid fa-envelope"></i></span>info@pnytrainings.com</li>
            <li className='bg-[#FFBA4A] blinking-text rounded-md cursor-pointer flex justify-center items-center lg:w-[350px] h-[21px] xl:w-[200px] text-black '><Link to="/fast-track-pro-bootcamps">Fast Track Pro Bootcamps in 2023</Link></li>
            <li><Link to='https://eraflip.com/' target='_blank'>Amazon Services</Link></li>
            <li><Link to='https://www.pnygenius.com/' target='_blank'>Kids Courses</Link></li>
            <li><Link to='https://www.joinpnypink.com/' target='_blank'>Female Courses</Link></li>
            <li><Link to="/trainingschedule" target='_blank'>Training Schedule</Link></li>
            <li> <Link to="/Feestruchure" target='_blank'>Fee Structure</Link></li>
            <li><button className='navbarbuttons bg-[#308AFF] rounded-md px-[10px] py-[6px]'>Login</button></li>
            <li><button className='navbarbuttons bg-[#F10900] rounded-md px-[10px] py-[6px]'>Enroll Now</button></li>

          </ul>
        </div>


        <div class="dropdown lg:hidden">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
          <li><Link to='https://eraflip.com/' target='_blank'>Amazon Services</Link></li>
            <li><Link to='https://www.pnygenius.com/' target='_blank'>Kids Courses</Link></li>
            <li><Link to='https://www.joinpnypink.com/' target='_blank'>Female Courses</Link></li>
            <li><Link to="/trainingschedule" target='_blank'>Training Schedule</Link></li>
            <li> <Link to="/Feestruchure" target='_blank'>Fee Structure</Link></li>
            <li className='bg-[#FFBA4A] blinking-text rounded-md flex cursor-pointer justify-center items-center'><Link to="/fast-track-pro-bootcamps">Fast Track Pro Bootcamps in 2023</Link></li>
            <li><button className='navbarbuttons bg-[#308AFF] rounded-md w-[70px] h-[px]'>Login</button></li>
            <li><button className='navbarbuttons bg-[#F10900] rounded-md w-[90px] h-[px]'>Enroll Now</button></li>
          </ul>
        </div>
      </nav>




    </>
  )
}

export default Navbar
