import React from 'react'
import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <div className='w-full py-2 flex justify-between items-center'>
               <img className='h-[100px]' src={logo} alt="not showing" />

               <div className='w-[60%] h-20 bg-red-50'>

               </div>
    </div>
  )
}

export default Logo