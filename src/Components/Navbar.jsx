import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { motion } from 'framer-motion';

const Navbar = () => {
    const items = [
        {
            id: 1,
            title: "Home",
            link: "/",
        },
        {
            id: 2,
            title: "Trainer",
            link: "#",
        },
        {
            id: 3,
            title: "Program",
            link: "#",
        },
        {
            id: 4,
            title: "Blogs",
            link: "#",
        },
        {
            id: 5,
            title: "Pricing",
            link: "#",
        },
    ]
  return (
    <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 0.5}} className='container py-7 flex justify-between'>
        <div className='flex gap-2 items-center'>
            <FaDumbbell className='font-bold text-2xl' />
            <h1 className='uppercase text-2xl font-bold'>coders <span className='text-orange-400'>gym</span></h1>
        </div>
        <ul className='hidden md:flex gap-10 items-center'>
            {
                items.map((element) =>(
                    <li className='text-lg hover:text-orange-400' key={element.id}><a href={element.title}>{element.title}</a></li>
                ))
            }
        </ul>
        <div className='flex gap-6 items-center'>
            <CiSearch className='text-2xl' />
            <PiShoppingCartThin className='text-2xl' />
            <div className='hidden md:block'>
                <button className='border-2 border-orange-400 hover:bg-orange-400 hover:text-white text-orange-400 duration-300 px-5 py-2 rounded-md text-lg'>Login</button>
            </div>
        </div>
    </motion.header>
  )
}

export default Navbar