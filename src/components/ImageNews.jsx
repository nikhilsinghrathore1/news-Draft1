import React from 'react'
import { BiChart } from "react-icons/bi";


const ImageNews = ({side}) => {
  const imageStyle = {
    backgroundImage:"url('https://cdn.pixabay.com/photo/2023/08/18/10/00/sea-8198149_640.jpg')",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
  }
  return (
    <div style={imageStyle} className='h-full  w-full bg-cover shadow-md shadow-black/20 relative overflow-hidden'>



      <div className={`w-fit px-1 py-1 ${side ?"text-xs bg-red-500 " :"bg-blue-500"} rounded-md absolute top-5 left-5 flex items-center justify-center text-white font-bold uppercase`}>
        category
      </div>

      <div className={`text-white leading-none absolute ${side ? "bottom-0 py-3  " :" py-6  bottom-0 "} bg-black/30 w-full px-4 `}>
        <p className={`${side ? "text-xs flex gap-1 items-center mb-1 " :"text-xl flex gap-1 items-center mb-1"} text-yellow-200`}><BiChart className={`${side ? "text-xl" :"text-3xl"}`} />May 2, 2023</p>

        <h1 className={`${side ? "text-lg mb-1 leading-none capitalize font-semibold" :"text-2xl mb-1 leading-none capitalize  font-semibold"} hover:text-sky
        -300 hover:underline`}>the new tablet from the world fastest computer manufacturerer</h1>

        <p className={`${side ? "text-xs":"text-sm"} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta!</p>
      </div>

    </div>
  )
}

export default ImageNews 