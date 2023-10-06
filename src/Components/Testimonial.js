import React from 'react'
import { ownersdata } from './Data'

const Testimonial = () => {
    return (
<div className='flex justify-center p-10 max-sm:p-4'>
  <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4'>
    {ownersdata.map((items ,  index) => (
      <div key={index} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img className="rounded-lg w-full p-1"  src={items.image} alt="" />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {items.name}
          </h5>
          <p className="mb-4 text-base text-blue-500 dark:text-neutral-200">
           {items.designation}
          </p>
          <p className="mb-4 text-base text-blue-500 dark:text-neutral-200">
          {items.twitter} <span className='ml-5'>{items.linkdin}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    )
}

export default Testimonial