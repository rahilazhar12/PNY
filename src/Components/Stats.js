import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Stats = () => {
  const [ref, inview] = useInView({
    threshold: 0.5,
  })
  return (
    <section ref={ref} className='h-52 md:h-auto max-sm:h-auto text-center lg:h-52'>
      <div className='flex flex-col sm:flex-row justify-around max-sm:text-2xl  text-4xl md:text-3xl lg:text-4xl font-bold px-10 bg-transparent'>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={75000} duration={2} delay={0} /> : null} +Alumini</div>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={100} duration={2} delay={0} /> : null} +Professional Programs</div>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={150} duration={2} delay={0} /> : null} +Instructors</div>
        <div className='mt-5 md:mt-10 lg:mt-20'> {inview ? <CountUp start={0} end={80} duration={2} delay={0} /> : null} +Mou's</div>
      </div>
    </section>

  )
}

export default Stats
