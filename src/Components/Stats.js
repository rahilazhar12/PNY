import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Stats = () => {
  const [ref, inview] = useInView({
    threshold: 0.5,
  })
  return (
    <section ref={ref} className=' lg:px-10 mt-3 bg-blue-100 lg:rounded-full  max-sm:h-auto text-center '>
      <div className='flex max-sm:py-6 lg:p-10  flex-col sm:flex-row justify-around max-sm:text-xl md:text-2xl lg:text-4xl font-bold'>
        <div> {inview ? <CountUp start={0} end={100} duration={2} delay={0} /> : null} <span className='text-pink-600'>+Professional Programs</span></div>
        <div> {inview ? <CountUp start={0} end={75000} duration={2} delay={0} /> : null} <span className='text-pink-600'> +Alumini</span></div>
        <div> {inview ? <CountUp start={0} end={150} duration={2} delay={0} /> : null} <span className='text-pink-600'>+Instructors</span></div>
        <div> {inview ? <CountUp start={0} end={80} duration={2} delay={0} /> : null} <span className='text-pink-600'>+Mou's</span></div>
      </div>
    </section>

  )
}

export default Stats
