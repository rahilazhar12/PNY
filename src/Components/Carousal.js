import React from 'react'
import { Carousel } from 'flowbite-react';
import c1 from '../Assets/image/c1.png'
import c2 from '../Assets/image/c2.png'
import c3 from '../Assets/image/c3.png'

import g1 from '../Assets/image/g1.png'
import g2 from '../Assets/image/g2.png'

const Carousal = () => {
  return (
    <div>
       <Carousel className='max-sm:h-56 p-1   md:h-96 '>
      <img
        alt="..."
        src="https://i.ytimg.com/vi/IbreMtdL1iQ/maxresdefault.jpg"
      />
      <img
        alt="..."
        src="https://i.ytimg.com/vi/8nTg5nk3s4o/maxresdefault.jpg"
      />
      <img
        alt="..."
        src="https://i.ytimg.com/vi/8nTg5nk3s4o/maxresdefault.jpg"
      />
      <img
        alt="..."
        src="https://tmcltd.com/wp-content/uploads/2019/04/PNY-Training-SAP-TallyBiafo-TallyMarks.webp"
      />
      <img
        alt="..."
        src="https://i.ytimg.com/vi/BvI04245sjg/maxresdefault.jpg"
      />
    </Carousel>
    </div>
  )
}
export const Carousalhome = () => {
  return (
    <div>
       <Carousel className='max-sm:h-36  lg:h-80   md:h-96 '>
      <img
        alt="..."
        src={c1}
      />
      <img
        alt="..."
        src={c2}
      />
      <img
        alt="..."
        src={c3}
      />
    </Carousel>
    </div>
  )
}
export const Carousalhome1 = () => {
  return (
    <div>
       <Carousel className='max-sm:h-20  lg:h-36   md:h-96 '>
      <img
        alt="..."
        src={g1}
      />
      <img
        alt="..."
        src={g2}
      />
    
    </Carousel>
    </div>
  )
}

export default Carousal
