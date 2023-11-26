import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

const Navbar = () => {
    const activeLink = ({isActive})=>
    {
        
        return{
            borderBottom: isActive ? '3px solid green' : '',
            color: isActive? '#048929' : ''
        }
    }
  return (
    <div>
        <nav className='flex items-center justify-between px-5 lg:px-20 pt-3 border-b-2'>
            <ul>
                <img src="assets/BizHubLogo.png" alt="Bizhub" className='w-36 lg:w-44'/>
            </ul>
            <ul className='hidden md:flex items-center gap-10 md:text-sm lg:text-lg'>
                <NavLink to='/' style={activeLink} className='h-16 flex items-center' >Home</NavLink>
                <NavHashLink smooth to='/#feature' className='h-16 flex items-center'>Features</NavHashLink>
                <NavHashLink smooth to='/#pricing' className='h-16 flex items-center'>Pricing</NavHashLink>
                <NavHashLink smooth to='/#about' className='h-16 flex items-center'>About Us</NavHashLink>
            </ul>
            <ul className='hidden md:flex items-center gap-4 md:text-sm lg:text-lg font-inter'>
                <NavLink to='/signin'>Sign In</NavLink>
                <NavLink to='/signup' className='bg-veryGreen text-white hover:text-veryGreen hover:bg-lightGreen px-4 py-4 rounded-3xl'>Try Bizhub for free</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
