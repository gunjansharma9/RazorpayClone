import React from 'react'
import {TiTick} from "react-icons/ti"
import {LiaGreaterThanSolid} from "react-icons/lia"
import {AiOutlineArrowRight} from "react-icons/ai"
import ContentImg from "../images/payment-suite.png"

const Content = ["100+ Payment Methods","Industry Leading Success Rate","Superior Checkout Experience","Easy to Integrate","Instant Settlements from day 1","In-depth Reporting and Insights"];

export const ContentBox = () => {
  return (
    <div className='w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border'>
        <div className='flex flex-col justify-between w-full'>
            <h3 className='font-mullish text-[20px] leading-10 font-bold max-w-[500px]'>
                Supercharge your business with the all-powerful {" "}
                <span className='text-lightBlue'>Payment Gateway</span>
            </h3>

            <ul className='space-y-2'>
                {
                    Content.map((element,index) => {
                        return (
                            <div className='flex items-center gap-3' key={index}>
                                <div className='text-greenLight w-3 h-4'>
                                    <TiTick/>
                                </div>
                                <div className='font-mullish '>
                                    {element}
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </ul>

            <div className='flex flex-col-reverse md:flex-row items-center space-x-4 gap-4'>
                <button className='bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200 flex gap-1 items-center'>
                    Sign Up Now
                    <AiOutlineArrowRight className='text-white'/>
                </button>

                <div className='flex md:items-center cursor-pointer group gap-1'>
                    <a href='/' className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                    <LiaGreaterThanSolid className="text-lightBlue500 max-w-[10px] font-extrabold group-hover:text-grayBlue transition-all duration-200"/>
                </div>
            </div>

            <img src={ContentImg} alt=''
                className='max-w-[600px] absolute right-0 bottom-0 hidden md:max-w-[460px] lg:max-w-[600px] md:block lg:block'
            />
        </div>
    </div>
  )
}
