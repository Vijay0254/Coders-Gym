import React from 'react'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import Equipment from './Components/Equipment'
import Banner1 from './Components/Banner1'
import Tabs from './Components/Tabs'
import Banner2 from './Components/Banner2'
import Testimonials from './Components/Testimonials'
import Banner3 from './Components/Banner3'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Equipment />
      <Banner1 />
      <Tabs />
      <Banner2 />
      <Testimonials />
      <Banner3 />
      <Footer />
    </main>
  )
}

export default App