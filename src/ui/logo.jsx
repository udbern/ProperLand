import React from 'react'
import Logo from '../assets/images/logo/Logo.svg'

function logo() {
  return (
    <>
            <div className='flex items-center '>
                <img src={Logo} alt="logo.svg"  className='object-cover object-center h-5  md:h-10 ' />
                
            </div>
    </>
  )
}

export default logo