import React from 'react'
import { Navbar } from 'flowbite-react'
import { Button } from 'flowbite-react'

const Navbarnew = () => {
  return (
    <Navbar
    fluid
    className='bg-red-500 fixed w-full z-50'
  >
    <Navbar.Brand href="https://flowbite-react.com">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>
        Get started
      </Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        active
        href="#"
      >
        <p>
          Home
        </p>
      </Navbar.Link>
      <Navbar.Link href="#">
        About
      </Navbar.Link>
      <Navbar.Link href="#">
        Services
      </Navbar.Link>
      <Navbar.Link href="#">
        Pricing
      </Navbar.Link>
      <Navbar.Link href="#">
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Navbarnew