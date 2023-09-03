import React from 'react'
import { Navbar } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
const Navbarnew = () => {
  return (
    <Flowbite>
    <Navbar
      fluid
      active
      className='bg-[#152438;]   py-4 w-full z-50 sticky top-0 font-Inter'
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="text-white max-sm:block lg:hidden md:hidden">
          <i class="fa-solid fa-phone"></i> 03041111774  <span className=''></span> <i class="fa-solid fa-envelope"></i> info@pnytrainings.com
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

        <Navbar.Link
          active
          href="#"
        >
          <p className='text-white text-base mt-2'>
            Amazon Services 
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" className="hover:bg-transparent hover:text-white text-white text-base mt-2 lg:w-full md:w-10">
          Kids Courses 
        </Navbar.Link>

        <Navbar.Link href="#" className="hover:bg-transparent hover:text-white text-white text-base mt-2 ">
          Female Courses 
        </Navbar.Link>
        <Navbar.Link href="#" className="hover:bg-transparent hover:text-white text-white text-base mt-2">
          Training Schedule 
        </Navbar.Link>
        <Navbar.Link href="#" className="hover:bg-transparent hover:text-white text-white text-base mt-2">
          Fee Strcture 
        </Navbar.Link>
        <Navbar.Link href="#" className="hover:bg-transparent hover:text-white text-white text-base mt-2">
          Admission 
        </Navbar.Link>

        <Button className='bg-red-600 max-sm:mt-2'>
          Login
        </Button>

        <Button className='bg-blue-600 max-sm:mt-2'>
          Pay Now
        </Button>
                         
      <DarkThemeToggle className='border bg-white'/>
      </Navbar.Collapse>
    </Navbar>
    </Flowbite>
  )
}

export default Navbarnew