import { transform } from 'framer-motion'
import React from 'react'

const Second = () => {

  const style2 = {
    opacity:0.7,
    textTransform:"uppercase",
    fontSize:"17px"
    // pagging is the mechanism to retieve storage from sec to main memory the primary concept of paging is to break down the process into multiple pages in sec memory and these pages are loaded into primary memory that is the ram in frames there is a conditon in paging that the page size in the sec memory / virtual memory is always equal to the frame size in the primary memory  logical address - it is the address that is alocated to a page in the sec memory by cpu with the consultation from / with os . physical address - it is the address alocated to the process page in the ram in the form of frames this address is alocated by mmuthe pages has two components -- page no./ offset same with frames where pages no. contains the exact page no. and offset will always contain some additional information about that page  
  }

  return (
    <div className='w-full h-screen flex py-2  gap-2 '>
      
              {/* left section  */}
{/* // bhai ye toh comments hai mai kya bas comment hi karta rehta hu kya kyu karta hu mai ye sab chutiye hu kya bhai but maine to kuch galat kiya bhi nahi fir kyu ho raha hai ye mere sath nahi bro sach bata maine kuch galat kiya kya , kya meri koi galti hai if yes toh kya galti ki maine if not then why i am feeling this low kyu ye sab feel kar raha hu mai itna kya hua ki mera ab kuch karna ka bhi mann ni kar rha mai itna bura hu kya mujhe pata hai ki sab theek hojaega bas patiens [ni aati spelling] rakhna hai but fir mai ab kya karu    */}
               <div className='w-[59.5%] h- rounded border-t-[6px] border-red-400'>

                <div className='border-b-2 border-black/50 pt-4 pb-2 flex items-end '>


                <div className='mr-20'>
                  <h1 className='text-3xl  capitalize font-semibold'>editor's pick</h1>

                </div>

                  <div className='flex gap-3'>

                    <p style={style2}>culture</p>
                    <p style={style2}>luxury</p>
                    <p style={style2}>politics</p>
                    <p style={style2}>lifestyle</p>
                  </div>
                   

                </div>

               </div>

              {/* right section */}

               <div className='w-[40%] h-full bg-green-500 rounded'></div>
    </div>
  )
}

export default Second