import React from 'react'
import { Greenline } from './Greenline'
import { BsArrowRight } from 'react-icons/bs'
import Img from "../images/comanies.png"
import "./styles.css"

export const JoinSection = () => {
  return (
    <div className='bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100]'>
        <div className='w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row'>
            
            {/* left section */}
            <div className='flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] sm:my-16'>
                <h2 className='font-mullish font-bold text-2xl text-deepBlueHead'>Join the 50,00,000+ businesses using Razorpay</h2>

                <div className=" mt-3 mb-3">
                    <Greenline/>
                </div>

                <p className='font-mullish opacity-80'>We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.</p>

                <p className='font-mullish mt-6 opacity-80'>Focus on your business while we handle the complexities of payments for you.</p>

                <button className='text-white font-bold flex items-center flex-row gap-2 font-mullish p-3 bg-lightBlue rounded-md mt-4 max-w-[140px] justify-center'>
                    Get Started
                    <BsArrowRight/>
                </button>
            </div>

            <div className='h-[500px] relative w-[500px] overflow-y-hidden mx-auto'> 
                <div style={{ background: 'linear-gradient(180deg, #f4f8ff, #fff0)' }} className='absolute w-full h-[150px] top-0 z-50'></div>

                <img src={Img} alt="" className= "object-cover absolute companiesList"/>

                            
                <div style={{ background: 'linear-gradient(0deg, #f4f8ff, #fff0)' }} className='absolute w-full h-[150px] bottom-0 z-50'></div>


            </div>
        </div>
    </div>
  )
}
