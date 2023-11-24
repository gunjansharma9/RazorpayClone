import React from 'react'
import Img from "../images/testimonial.jpg"
import Quotes from "../images/quotes.svg"
import Logo from "../images/fake-company-logo.png"
import { Link } from "react-router-dom";

export const SliderBox = () => {
  return (
    <>


    <div className='flex flex-col xl:flex-row max-w-[960px] items-center mx-auto my-20 space-x-[10rem]'>
        <img src={Img} alt="" height="320px" width="320px" className='rounded-xl' />

        <div className='max-w-[400px] flex flex-col gap-2'>
            <img src={Quotes} alt="" width="35px" height="40px" className='-mb-2 xl:order-1' />

            <p className='font-mullish text-3xl font-extralight xl:order-1'>Readymade Closed Wallet Solution For Quick Refunds</p>

            <Link className='text-grayText italic underline xl:order-1' to="/">Learn More</Link>
            <p className='font-mullish font-extrabold text-2xl -order-1 xl:order-1'>Saurav Goyal</p>
            <p className='font-mullish font-medium xl:order-1'>CEO,XYZ Engineering Company</p>
            <img src={Logo} alt="" 
                width="80px" height="40px"
                className='xl:order-1'
            />
        </div>
    </div>

    <div class="w-full flex flex-row mx-auto space-x-2 justify-center">
     
    <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

    <div class="h-[10px] w-[10px] bg-lightBlue300 rounded-full"></div>

    <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

    <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

    <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

    <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
    </div>

    </>
  )
}
