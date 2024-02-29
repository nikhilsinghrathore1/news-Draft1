import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import NavComponents from './NavComponents';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  const [navComp, setnavComp] = useState([
    {text:"home",icon:<IoIosArrowDown /> , new:true , color:"purple"},
    {text:"politics",icon:<IoIosArrowDown /> ,  new:false },
    {text:"business",icon:<IoIosArrowDown /> ,  new:false},
    {text:"culture",icon:<IoIosArrowDown /> ,new:true , color:"rose"},
    {text:"society",icon:<IoIosArrowDown /> , new:false },
    {text:"feature",icon:<IoIosArrowDown /> ,  new:false},
    {text:"shop",icon:<IoIosArrowDown /> ,  new:false}
  ])

  return (
   <div className='w-full rounded-md h-12 bg-black flex items-center justify-between'>
    <div className='flex w-fit'>

           {navComp.map((e,i)=> <NavComponents data={e} />)}
    </div>

    <div className='pr-10'>
      <FaSearch className='text-white text-xl '/>
    </div>
   </div>
  )
}

export default Navbar