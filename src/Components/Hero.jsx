import React from 'react'
import heroImg from "../assets/hero.png"
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='container flex flex-col md:flex-row items-center py-20 md:py-32 justify-between'>
        <div className='flex flex-col gap-y-10 md:w-[500px] md:pb-0 pb-16'>
            <motion.h1 initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.3}} className='font-playfair text-5xl md:text-start text-center md:text-6xl font-bold'>Gym Gives you the perfect <span className='text-orange-400'>Health</span></motion.h1>
            <motion.p initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.5}} className='text-gray-500 md:text-start text-center'>It is a long established fact that a reader will be by readable content of a page when are the best product.</motion.p>
            <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.7}} className='flex md:justify-start justify-center gap-10 items-center'>
                <button className='py-2 px-5 rounded-md font-medium bg-orange-400 text-white hover:scale-110 duration-300'>Order Now</button>
                <div className='flex  items-center gap-2 cursor-pointer'>
                    <FaPlay />
                    <p>Watch Now</p>
                </div>
            </motion.div>
        </div>
        <motion.div initial={{opacity: 0, x: 300, rotate: 90}} animate={{opacity: 1, x: 0, rotate: 0}} transition={{duration: 1, delay: 0.7}} >
            <img src={heroImg} alt="hero" className='drop-shadow-2xl' />
        </motion.div>
    </section>
  )
}

export default Hero