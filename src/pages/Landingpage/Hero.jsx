import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import play from '../../assets/Play.png'

const Hero = () => {
  return (
    <div className='bg-paleGreeen'>
      <Navbar/>
      <main className='py-12 md:py-32 px-5 lg:px-20 flex justify-between flex-wrap lg:flex-nowrap'>
        <div className='md:w-[85%]'>
          <h2 className='text-2xl md:text-5xl pb-3 font-semibold h2'>
          Your all-in-one payment management solution for small businesses
          </h2>
          <img src='assets/yellowLine.png' alt="" />
          <p className='text-black text-lg md:text-xl font-normal py-4 text-start'>
          Streamline your operations with ease by creating clients profiles, tracking transactions, and receiving real-time alerts for unpaid invoices. Stay in control of your finances and focus on what matters growing your business.
          </p>
          <div className='py-4 flex items-center gap-2 md:gap-5 text-xs'>
          <NavLink to='/signup' className='bg-veryGreen text-white px-4 py-3 md:text-sm lg:text-base rounded-2xl button'>Get Started for free</NavLink>
          <NavLink className='flex items-center'>
            <img src={play} alt="Biz Hub Demo" />
            View Demo
          </NavLink>
          </div>
        </div>
        <div className='flex lg:pl-10'>
          <img src='assets/biglaptop.png' alt="" />
        </div>
      </main>
    </div>
  )
}

export default Hero
