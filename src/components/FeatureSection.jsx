import React from 'react'
import Dot1 from "../images/feature-section1-dottedrows.png"
import { Greenline } from './Greenline'
import { ContentBox } from './ContentBox'

export const FeatureSection = () => {
  return (
    <div className='relative mt-[190px] '>
        <img
            src={Dot1}
            loading='lazy'
            width={233}
            height={167}
            className='absolute -top-[8rem] left-[10rem] inline-block -z-10'
            alt=''
        />
        <img
            src={Dot1}
            width={233}
            height={167}
            className='absolute top-[3rem] right-0 inline-block rotate-180'
            alt=''
        />

        <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
            <h2 className='font-mullish text-center text-2xl font-extrabold hidden md:block'>Accept Payments with Razorpay Payment Suite</h2>

            <h2 className='font-mullish text-center text-5xl font-extrabold md:hidden'>Explore Razorpay Payment Suite</h2>
            
            <div className="mx-auto mt-4 mb-6 flex justify-center">
                <Greenline/>
            </div>

            <ContentBox/>
        </div>
    </div>
  )
}
