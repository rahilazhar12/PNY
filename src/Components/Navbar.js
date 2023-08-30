import React from 'react'
import { Navbar } from 'flowbite-react'
import { Button } from 'flowbite-react'
const Navbarnew = () => {
  return (
    <Navbar
      fluid
      className='bg-[#152438;] px-4 py-4 w-full z-50 sticky top-0 font-Inter'
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="text-white max-sm:block lg:hidden md:hidden">
         PNY TRAININGS
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <p className='text-white text-base mt-2'>03041111774</p>
        <Navbar.Link
          active
          href="#"
        >
          <p className='text-white text-base mt-2'>
            Amazon Services
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white text-base mt-2'>
          Kids Courses
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white text-base mt-2'>
          Female Courses
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white text-base mt-2'>
          Training Schedule
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white text-base mt-2'>
          Fee Strcture
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white text-base mt-2'>
          Admission
        </Navbar.Link>

        <Button className='bg-red-600 max-sm:mt-2'>
          Login
        </Button>

        <Button className='bg-blue-600 max-sm:mt-2'>
          Pay Now
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbarnew