import React from 'react'
import { Link } from 'react-scroll'

const Bottomnavbar = () => {
  return (
    <div>
      <Link to='about' className='bg-yellow-500 cursor-pointer'>About </Link>
      <Link to='contact'  className='bg-green-500 cursor-pointer'>Conatct</Link>
    </div>
  )
}

export default Bottomnavbar
