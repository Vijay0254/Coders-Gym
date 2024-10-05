import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";


const Equipment = () => {
    const items = [
        {
            id: 1,
            title: "Yoga Equipments",
            desc: "It is a long established fact that a reader readable.",
            icon: <GrYoga />,
            delay: 0.3,
        },
        {
            id: 2,
            title: "Muscles Equipments",
            desc: "It is a long established fact that a reader readable.",
            icon: <FaDumbbell />,
            delay: 0.6,
        },
        {
            id: 3,
            title: "Fitness Equipments",
            desc: "It is a long established fact that a reader readable.",
            icon: <GiGymBag />,
            delay: 0.9,
        },
    ]
  return (
    <section className='md:container px-10 flex md:flex-row flex-col justify-between pb-32 pt-20'>
        <div className='md:w-[250px] flex flex-col gap-4 md:pb-0 pb-16'>
            <h1 className='md:text-4xl text-3xl font-playfair font-bold'>What we offer for you</h1>
            <p className='text-slate-500'>It is a long established fact that a reader readable.</p>
        </div>
        <div className='flex md:flex-row flex-col gap-16 md:gap-28'>
            {
                items.map((element) =>(
                    <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: element.delay}} key={element.id} className='md:w-[250px] flex flex-col gap-4'>
                        <span className='text-4xl'>{element.icon}</span>
                        <h1 className='text-2xl font-playfair font-bold'>{element.title}</h1>
                        <p className='text-slate-500'>{element.desc}</p>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default Equipment