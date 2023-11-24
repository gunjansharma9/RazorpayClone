import React from 'react'
import Corner1 from "../images/x-flame-1.png"
import Corner2 from "../images/x-flame-2.png"
import {TiTick} from "react-icons/ti"
import { LiaGreaterThanSolid } from 'react-icons/lia'

export const ContentBox2 = ({image,points,headImg,heading}) => {
  return (
    <div className='w-full min-h[440px] flex flex-col relative'>
         <img src={Corner1} alt="" 
            loading='lazy'
            className='absolute -top-[142px] -left-[140px] w-[200px]'
         />
         <img src={Corner2} alt=""
            loading='lazy'
            className='absolute top-[150px] -right-[180px] w-[200px]'
          />

          <div className='relative w-full bg-[#181c2e] p-10 py-12 border border-slate-700 z-20 rounded-md'>
            {/* left part */}
            <div className='flex flex-col justify-between items-start h-full w-full gap-12 z-20'>
                <h3 className='font-mullish text-[28px] text-white font-bold leading-10 max-w-[500px]'>
                    {heading}
                    {" "}
                    <img src={headImg} alt="" 
                        className='w-[168px] h-[32px] inline text-white font-mullish'
                    />
                </h3>

                <ul className='space-y-2'>
                {
                    points.map((element,index) => {
                        return (
                            <div className='flex items-center gap-3' key={index}>
                                <div className='text-greenLight w-3 h-4'>
                                    <TiTick/>
                                </div>
                                <div className='font-mullish text-white '>
                                    {element}
                                    
                                </div>
                            </div>
                        )
                    })
                }
                </ul>

                <div className='flex flex-col-reverse md:flex-row w-full items-center space-x-4'>
                    <button className='relative bg-lightBlue flex items-center place-content-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 md:w-fit self-stretch'>
                        Sign Up
                        <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center ">
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                class="w-[20px] h-[20px] -skew-x-[20deg] "
                            >
                                <path
                                fill="currentColor"
                                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                                ></path>
                            </svg>
                        </div>
                    </button>

                    <div className='flex md:items-center cursor-pointer group gap-1'>
                    <a href='/' className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                    <LiaGreaterThanSolid className="text-lightBlue500 max-w-[10px] font-extrabold group-hover:text-grayBlue transition-all duration-200"/>
                    </div>
                </div>
            </div>
          </div>

          <img src={image} alt=""
            className='max-w-[600px] lg:max-w-[600px] md:block lg:block md:max-w-[400px] absolute z-50 right-0 bottom-0'
           />
    </div>
  )
}
