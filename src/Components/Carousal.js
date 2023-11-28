import React from 'react'
import { Carousel } from 'flowbite-react';
import c1 from '../Assets/Collaboration/1.png'
import c2 from '../Assets/Collaboration/2.png'
import c3 from '../Assets/Collaboration/3.png'
import c4 from '../Assets/Collaboration/4.png'
import c5 from '../Assets/Collaboration/5.png'
import c6 from '../Assets/Collaboration/6.png'
import c7 from '../Assets/Collaboration/7.png'

import g1 from '../Assets/image/g1.png'
import g2 from '../Assets/image/g2.png'

const Carousal = () => {
  return (
    <div>
       <Carousel className='max-sm:h-56 p-1 md:h-64 lg:h-96 lg:mt-10 '>
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
       <Carousel className='max-sm:h-36  lg:h-80   md:h-56  '>
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
      <img
        alt="..."
        src={c4}
      />
      <img
        alt="..."
        src={c5}
      />
      <img
        alt="..."
        src={c6}
      />
      <img
        alt="..."
        src={c7}
      />
    </Carousel>
    </div>
  )
}
export const Carousalhome1 = () => {
  return (
    <div>
       <Carousel className='max-sm:h-20  lg:h-32  md:h-20  '>
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
