import React from 'react'
import ImageNews from './ImageNews'

const Main = () => {
  return (
    <div className='w-full h-[65%] mt-4 flex'>
      <div className='w-[60%] h-full mr-1'>
               <ImageNews />
      </div>

      <div className='w-[40%] h-full'>
               <div className='w-full h-[49%] mb-1'>
                  <ImageNews side={true}/>
               </div>
               <div className='w-full h-[50%]'>
                  <ImageNews side={true} />
               </div>

      </div>
      
    </div>
  )
}

export default Main