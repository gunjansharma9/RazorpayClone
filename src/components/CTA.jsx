import React from 'react'
import Img from "../images/CTABg.svg"
import { Greenline } from './Greenline'
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "./styles.css"
import rightimg from "../images/ctaImg.svg"

const data = ["Quick Onboarding","Access to entire product suite","API access","24x7 support"]
export const CTA = () => {
  return (
    <div style={{ backgroundImage: `url(${Img})` }} className='w-full h-full relative bg-cover bg-no-repeat ctaSection min-h-[510px]'>
        <div className='w-11/12 max-w-[1080px] relative items-center mx-auto space-x-20 pt-16 justify-between flex flex-row'>
            <div className='flex flex-col gap-5 mt-12 max-w-[800px] '>
                <h2 className='font-mullish font-bold text-2xl text-white'>Supercharge your business with Razorpay</h2>

                <Greenline/>

                <p className='font-mullish text-white'>Sign Up Now to experience the future of payments and offer <br/> your customers the best checkout experience.</p>

                <ul className='flex flex-row flex-wrap gap-x-4 text-white gap-y-3 w-full items-center'>
                    {
                        data.map((element,index)=>{
                            return (
                                <div className='flex flex-row gap-3 items-center'>
                                    <FaCheck className='text-greenLight' />
                                    {element}
                                </div>
                            )
                        })
                    }
                </ul>

                <button className='flex flex-row gap-2 text-lightBlue300 font-mullish rounded-sm bg-white items-center text-sm font-bold border px-4 py-3 max-w-[150px] hover:text-lightBlue500 transition-all duration-200'>
                    Sign Up Now
                    <FaArrowRight />
                </button>
            </div>

            <div>
                <img src={rightimg} alt=""
                    width="240px" height="282px"
                    className='mt-16 pt-3 hidden lg:block'
                 />
            </div>
        </div>
    </div>
  )
}
