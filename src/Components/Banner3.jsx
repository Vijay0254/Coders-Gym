import { motion } from 'framer-motion'
import React from 'react'

const Banner3 = () => {
  return (
    <section className='text-center py-24 flex flex-col items-center justify-center gap-y-7'>
        <motion.h1 initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.3}} className='text-3xl md:px-0 px-4 md:text-5xl uppercase font-bold md:w-[850px]'>Get 20% Discount On Your First Order, Are You Ready To Buy</motion.h1>
        <motion.p initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.5}}>We will make sure you get the right and the best quality products for your workout</motion.p>
        <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.7}} className='flex gap-10'>
            <button className='py-2 px-5 rounded-md font-medium bg-orange-400 text-white hover:scale-110 duration-300'>Learn More</button>
            <button className='border-2 border-orange-400 hover:bg-orange-400 hover:text-white text-orange-400 duration-300 px-5 py-2 rounded-md text-lg'>Stay in Touch</button>
        </motion.div>
    </section>
  )
}

export default Banner3