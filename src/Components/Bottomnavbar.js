import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {GiJourney , GiDuration} from 'react-icons/gi'
import {SiTrainerroad} from 'react-icons/si'
import { Link } from 'react-scroll'

const Bottomnavbar = () => {
  return (
    <nav className=' fixed bottom-2 w-full overflow-hidden z-50'>
    <div className=' container mx-auto px-6'>
      
      <div className='w-full bg-black/20 h-[52px]  backdrop-blur-2xl rounded-full max-w-[460px] mx-auto 
      px-5 flex justify-between text-2xl items-center text-white'>
      <Link to='journey' activeClass='active' smooth={true} spy={true} offset={-450} className='w-[60px] h-[60px] flex items-center justify-center'>
      <GiJourney/></Link>
      <Link to='duration' activeClass='active' smooth={true} spy={true} offset={-450} className='w-[60px] h-[60px] flex items-center justify-center'>
      <GiDuration/></Link>
      <Link to='trainer' activeClass='active' smooth={true} spy={true} offset={-450} className='w-[60px] h-[60px] flex items-center justify-center'>
      <SiTrainerroad/></Link>
      <Link to='home' activeClass='active' smooth={true} spy={true} offset={-450} className='w-[60px] h-[60px] flex items-center justify-center'>
      <AiOutlineHome/></Link>
      </div>
    </div>
    </nav>
  )
}

export default Bottomnavbar
