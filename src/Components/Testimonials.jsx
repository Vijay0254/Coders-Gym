import { motion } from 'framer-motion'
import React from 'react'
import Slider from 'react-slick/lib/slider'

const Testimonials = () => {
    const items = [
        {
            id: 1,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/101/101",
            delay: 0.2,
        },
        {
            id: 2,
            name: "Steve Smith",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/102/102",
            delay: 0.5,
        },
        {
            id: 3,
            name: "Kristen",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/104/104",
            delay: 0.8,
        },
        {
            id: 5,
            name: "Ariana",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/103/103",
            delay: 1.1,
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <section className='container pb-20'>
        <h1 className='text-3xl py-10 md:w-[400px] font-bold'>What Are The Costumer Saying About Us</h1>
        <div>
            <Slider {...settings}>
                {
                    items.map((element) =>(
                        <div key={element.id} className='md:px-10 pb-7'>
                            <div className='flex flex-col gap-5 md:w-[350px] p-5 pb-10 shadow-xl'>
                                <div className='flex items-center gap-3'>
                                    <img className='rounded-full size-16' src={element.img} alt="profile pic" />
                                    <h1 className='font-bold text-xl'>{element.name}</h1>
                                </div>
                                <p className='font-light text-sm'>{element.text}</p>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </section>
  )
}

export default Testimonials