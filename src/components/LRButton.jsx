import React from 'react'
import { FaLessThan,FaGreaterThan } from "react-icons/fa";

export const LRButton = ({side}) => {
  return (
    <button className={`w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute flex justify-center items-center ${
        side === 'left' ? 'left-0' : 'right-0'
      } top-1/2`}>
        <div className='w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply '>
            {side === "left" ? <FaLessThan className='text-gray-400 w-6 h-6 ' /> : <FaGreaterThan className='text-gray-400 w-6 h-6' />}
        </div>
    </button>
  )
}
