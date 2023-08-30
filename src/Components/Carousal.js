import React from 'react'
import { Carousel } from 'flowbite-react';

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

export default Carousal
