import React from 'react'
import banner2Img from "../assets/banner2.png"
import { motion } from 'framer-motion'

const Banner2 = () => {
  return (
    <section className='flex flex-col md:flex-row container gap-10 pt-20 pb-20 items-center'>
        <div>
            <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.5, delay: 0.5}} className='md:w-[600px]' src={banner2Img} alt="banner1" />
        </div>
        <div className='flex flex-col gap-4 md:w-[500px]'>
            <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.3}} className='font-bold font-playfair text-2xl text-center md:text-start md:text-4xl'>The Importants To Take Care Of Yourself</motion.h1>
            <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}} className='text-center md:text-start'>The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.</motion.p>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.7}} className='flex md:justify-start justify-center'>
                <button className='py-2 px-5 rounded-md font-medium bg-orange-400 text-white hover:scale-110 duration-300'>Explore More</button>
            </motion.div>
        </div>
    </section>
  )
}

export default Banner2