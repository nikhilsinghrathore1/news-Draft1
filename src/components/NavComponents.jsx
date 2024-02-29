import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const NavComponents = ({data}) => {
  return (
    <div className='h-full w-28 text-sm font-semibold text-center uppercase text-white gap-2 flex items-center justify-center relative'>
               <h1>{data.text}</h1>
              {data.icon}
              {data.new && (
               <div className={`w-12 py-1 ${data.color=="purple" ? `bg-purple-700` : "bg-red-500"} absolute -top-[160%] text-white font-bold rounded-md`}>new</div>
              )}
    </div>
  )
}

export default NavComponents