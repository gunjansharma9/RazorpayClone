import React from 'react'
import dot from "../images/feature-section1-dottedrows.png"
import { Greenline } from './Greenline'
import { LRButton } from './LRButton'
import { SliderBox } from './SliderBox'

export const Testimonail = () => {
  return (
    <div className='relative'>
        <div className='w-11/12 max-w-[1300px] mx-auto relative py-20'>
            <img src={dot} alt="" 
                className='absolute w-[200px] top-[8rem] left-[2rem] -z-10'
            />

            <h2 className='font-mullish font-extrabold text-2xl text-deepBlueHead text-center'>An Experience <br/> People Love to Talk About</h2>
            <div className='flex justify-center my-4'>
                <Greenline/>
            </div>

            <LRButton side="left"/>
            <LRButton side="right"/>

            <SliderBox/>
        </div>
    </div>
  )
}
