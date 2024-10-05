import React, { useState } from 'react'
import tab1Img from "../assets/Tabs/tab1.png"
import tab2Img from "../assets/Tabs/tab2.png"
import tab3Img from "../assets/Tabs/tab3.png"
import tab4Img from "../assets/Tabs/tab4.png"
import { motion } from 'framer-motion'

const Tabs = () => {
    const items = [
        {
            id: 1,
            category: "Yoga",
            image: tab2Img,
            title: "Yoga",
        },
        {
            id: 2,
            category: "Fitness",
            image: tab4Img,
            title: "Dumbells",
        },
        {
            id: 3,
            category: "Yoga",
            image: tab1Img,
            title: "Yoga Mat",
        },
        {
            id: 4,
            category: "Fitness",
            image: tab3Img,
            title: "Yoga Mat",
        },
        {
            id: 5,
            category: "Muscles",
            image: tab1Img,
            title: "Yoga Mat",
          },
          {
            id: 6,
            category: "Muscles",
            image: tab3Img,
            title: "Yoga Mat",
        },
        {
            id: 7,
            category: "Yoga",
            image: tab2Img,
            title: "Yoga Mat",
        },
        
    ]
    const items2 = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Yoga"
        },
        {
            id: 3,
            name: "Fitness"
        },
        {
            id: 4,
            name: "Muscles"
        },
    ]
    const [data,setdata] = useState("All")
    const displayData = data==="All" ? items : items.filter((element) =>element.category === data)

  return (
    <section className='container pb-20'>
        <div className='flex gap-3 md:gap-5'>
            {
                items2.map((element) =>(
                    <button onClick={() =>setdata(element.name)} className={`px-5 py-2 duration-300 rounded-md ${data===element.name ? "bg-orange-400 text-white" : "bg-slate-300"}`} key={element.id}>{element.name}</button>
                ))
            }
        </div>
        <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.4}} className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-10'>
            {
                displayData.map((element) =>(
                    <div key={element.id} className='border-2 border-slate-200 p-4 flex flex-col gap-2 pb-5'>
                        <img className='' src={element.image} alt="tabs" />
                        <h1 className='font-bold text-xl'>{element.title}</h1>
                        <p className='text-slate-500'>{element.category}</p>
                    </div>
                ))
            }
        </motion.div>
    </section>
  )
}

export default Tabs