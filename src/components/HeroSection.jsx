import React from 'react'
import HeroImg from "../images/hero-illustration.jpg"
import BlueBackgroundImg from "../images/hero-shape.svg"
import { Greenline } from './Greenline'

export const HeroSection = () => {
  return (
    <div className='relative bg-deepBlue'>
                <div className='w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto'>
            <div className='max-w-[45%] space-y-8'>
                <h1 className='font-mullish font-bold text-[40px] leading-[1.2] text-white'>Power your finance,grow your business</h1>

                <Greenline/>

                <p className='font-mullish text-[18px] leading-7 text-white opacity-70'>Accept payments from customers.Automate payouts to vendors & employees.Never run out of working capital.</p>

                <button className='bg-lightBlue text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 '>Sign Up Now</button>
            </div>

            {/* right part */}
            <img
                src={HeroImg}
                alt=''
                className='w-full max-w-[680px] '
            />
        </div>

        <div className='w-full '></div>

        <div className='w-[103%] absolute left-0 right-0'>
            <img src={BlueBackgroundImg} alt="" 
                className='w-full object-fill'
            />
        </div>
    </div>
  )
}
