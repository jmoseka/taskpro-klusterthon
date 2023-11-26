import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-paleGreeen'>
      <Navbar/>
      <main className='py-12 md:py-32 pl-5 lg:px-20 flex flex-wrap lg:flex-nowrap'>
        <div className='w-[85%]'>
          <h2 className='text-4xl md:text-5xl text-start font-semibold'>
          Your all-in-one payment management solution for small businesses
          </h2>
          <img src='assets/yellowLine.png' alt="" />
          <p className='text-black text-lg md:text-xl font-normal py-4 text-start'>
          Streamline your operations with ease by creating clients profiles, tracking transactions, and receiving real-time alerts for unpaid invoices. Stay in control of your finances and focus on what matters growing your business.
          </p>
          <div className='py-4 flex items-center gap-2 md:gap-5 text-xs'>
          <NavLink to='/signup' className='bg-veryGreen text-white hover:text-veryGreen hover:bg-lightGreen px-4 py-4 rounded-3xl'>Get Started for free</NavLink>
          <NavLink className='flex items-center'>
            <img src="assets/play.png" alt="Biz Hub Demo" />
            View Demo
          </NavLink>
          </div>
        </div>
        <div className='flex'>
          <img src='assets/biglaptop.png' alt="" />
        </div>
      </main>
    </div>
  )
}

export default Hero
