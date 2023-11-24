
import React from 'react'
import { LiaGreaterThanSolid } from 'react-icons/lia'

export const Card = ({element,size}) => {
    const flag = size;
    return (
        <div className='w-full min-h-[15rem] relative cursor-pointer '> 
            <img src={element[2]} alt=""
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                  transition-all duration-200"></img> 
            
            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200 "
            >
            <path
                d="m 0 6 
                a 6 6 0 0 1 6 -6 
                h 250.32501220703125 
                a 16 16 0 0 1 11 5 
                l 77 77 
                a 16 16 0 0 1 5 11 
                v 126 
                a 6 6 0 0 1 -6 6 
                h -337.32501220703125 
                a 6 6 0 0 1 -6 -6 
                z"
                fill={(flag === 1) ? "#181C2E" : "#fff"}
            ></path>
            </svg>

            <div className=' w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 absolute z-50'>
                <div>
                    <h3 className={`font-mullish font-bold leading-[1.2] text-[1.375rem] opacity-100 ${flag === 1 ? "text-white" : "text-deepBlueHead" }`}>{element[0]}</h3>
                    <p className='font-mullish text-grayText mt-6'>{element[1]}</p>
                </div>

                <div className='flex md:items-center cursor-pointer group gap-1'>
                <a href='/' className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                <LiaGreaterThanSolid className="text-lightBlue500 max-w-[10px] font-extrabold group-hover:text-grayBlue transition-all duration-200"/>
                </div>
            </div>


        </div>
    )
}
