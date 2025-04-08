import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex-flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* -----left section---- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lifeline is a smart doctor appointment booking platform that connects patients with trusted healthcare professionals, offering quick, hassle-free scheduling and access to quality care anytime, anywhere.</p>
        </div>
        
        {/* -----center section---- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <NavLink onClick={()=>scrollTo(0,0)} to='/'>Home</NavLink>
                <NavLink onClick={()=>scrollTo(0,0)} to='/about'>About us</NavLink>
                <NavLink onClick={()=>scrollTo(0,0)} to='/contact'>Contact us</NavLink>
                <li>Privacy policy</li>
            </ul>
        </div>
        
        {/* -----right section---- */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+12-357-856-7878</li>
                <li>albela@gmail.com</li>
            </ul>
        </div>
      </div>

      {/* -------copyright--------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Lifeline - All Rights are reserved</p>
      </div>
    </div>
  )
}

export default Footer
