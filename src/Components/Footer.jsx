import React from 'react'
import { FaDumbbell } from 'react-icons/fa'
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const items = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About"
        },
        {
            id: 3,
            name: "Services"
        },
        {
            id: 4,
            name: "Login"
        }
    ]
    const items2 = [
        {
            id: 1,
            name: "Our Services"
        },
        {
            id: 2,
            name: "Contact"
        },
        {
            id: 3,
            name: "Privacy Policy"
        }
    ]
  return (
    <footer className='container pt-20 bg-gradient-to-r text-white from-gray-900 to-gray-950 rounded-t-3xl'>
        <section className='flex md:gap-y-0 gap-y-12 md:flex-row flex-col container md:items-center justify-between'>
            <div className='w-[300px] flex flex-col gap-5'>
                <div className='flex gap-2 items-center'>
                    <FaDumbbell className='font-bold text-2xl' />
                    <h1 className='uppercase text-2xl font-bold'>coders <span className='text-orange-400'>gym</span></h1>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.</p>
                <div className='flex gap- cursor-pointer gap-4 text-3xl'>
                    <MdLocationOn />
                    <FaInstagram />
                    <FaFacebook />
                    <FaLinkedin />
                </div>
            </div>
            <div className='flex gap-10 md:gap-32'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl md:text-2xl font-bold'>Important Links</h1>
                    <ul className='flex flex-col gap-4'>
                        {
                            items.map((element) =>(
                                <li className='font-medium' key={element.id}><a href="#">{element.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl md:text-2xl font-bold'>Company Links</h1>
                    <ul className='flex flex-col gap-4'>
                        {
                            items2.map((element) =>(
                                <li className='font-medium' key={element.id}><a href="#">{element.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-xl md:text-2xl font-bold'>Resources</h1>
                <ul className='flex flex-col gap-4'>
                    {
                        items.map((element) =>(
                            <li className='font-medium' key={element.id}><a href="#">{element.name}</a></li>
                        ))
                    }
                </ul>
            </div>
        </section>
        <p className='text-center border-t-[1px] py-7 text-slate-400 border-slate-600 mt-20'>&copy;copyright 2024 Coders Gym</p>
    </footer>
  )
}

export default Footer