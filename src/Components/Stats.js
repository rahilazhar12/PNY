import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Stats = () => {
  const [ref, inview] = useInView({
    threshold: 0.5,
  })
  return (
    <section ref={ref} className='h-52 md:h-auto max-sm:h-auto text-center '>
      <div className='flex shadow-xl py-6 flex-col sm:flex-row justify-around max-sm:text-2xl  text-4xl md:text-3xl lg:text-4xl font-bold'>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={75000} duration={2} delay={0} /> : null} <span className='text-pink-600'> +Alumini</span></div>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={100} duration={2} delay={0} /> : null} <span className='text-pink-600'>+Professional Programs</span></div>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={150} duration={2} delay={0} /> : null} <span className='text-pink-600'>+Instructors</span></div>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={80} duration={2} delay={0} /> : null} <span className='text-pink-600'>+Mou's</span></div>
      </div>
    </section>

  )
}

export default Stats
