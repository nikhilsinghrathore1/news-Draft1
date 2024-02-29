import { motion } from 'framer-motion'
import React from 'react'

const Trending = () => {
               
  return (
    <div className='w-full rounded mt-1 px-2 mb-2  border-b-2 border-black'>
               <div className='flex items-center  '>
                              <h1 className='w-56 capitalize p-1 rounded  bg-black text-white font-bold'>Trending <span className='italic text-green-500 font-bold'>News :</span> </h1>
                              <div className='w-[80] overflow-hidden'>
                              <motion.div initial={{x: "0%"}} animate={{x: "-100%"}} transition={{ease:"linear", duration:25 , repeat:Infinity}} className='flex gap-10'>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                                             <p>news</p>
                              </motion.div>
                              </div>
               </div>
    </div>
  )
}

export default Trending