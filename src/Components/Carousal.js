import React, { useEffect, useState } from 'react'
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

  const [data , setData] = useState([])

  useEffect(()=>{
 const fetchcarousalimage =async() => {
  try {
    let response = await fetch('https://www.pnytrainings.com/api/slider')
    const data = await response.json()
    setData(data.sliders)
    
  } catch (error) {
    console.log(error)
  }
 }
 fetchcarousalimage()
  },[])
 
  return (
    <div>
    <Carousel className='max-sm:h-56 p-1 md:h-64 lg:h-96 '>
      {data.map(slider => (
        <div key={slider.id}>
          <img
            className="d-block w-100 h-[350px]"
            src={slider.image}
            alt={slider.title}
          />
        </div>
      ))}
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
