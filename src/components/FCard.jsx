import React from 'react'
import { LiaGreaterThanSolid } from 'react-icons/lia'

export const FCard = ({element}) => {
  return (
    <div className='relative flex flex-col justify-start gap-3 border rounded-2xl border-opacity-0 hover:scale-105 transition-all duration-200 cursor-pointer hover:shadow-sm max-h-[300px] h-full' >
        <img src={element[2]} alt="" 
          className='absolute z-50 rounded-2xl'
        />

        <div className='p-4 flex flex-col justify-evenly'>
          <img src={element[3]} alt=""
            className=' z-50 bg-lightBlue500 w-10 h-10 rounded-full'
          />

          <h3 className='font-mullish text-lg font-bold pt-10'>{element[0]}</h3>

          <p className='font-mullish py-3 text-grayText leading-normal'>{element[1]}</p>

          <div className='flex md:items-center cursor-pointer group gap-1'>
                <a href='/' className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                <LiaGreaterThanSolid className="text-lightBlue500 max-w-[10px] font-extrabold group-hover:text-grayBlue transition-all duration-200"/>
          </div>
        </div>
    </div>
  )
}
