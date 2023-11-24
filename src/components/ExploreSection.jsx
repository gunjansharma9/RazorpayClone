import React from 'react'
import img from "../images/feature-section-2BG.svg"
import { Greenline } from './Greenline'
import { ContentBox2 } from './ContentBox2'
import Image from "../images/buisness-banking.png"
import headImg from "../images/razorpayX.svg"
import Img1 from "../images/current-icon.svg"
import Img2 from "../images/payouts-icon.svg"
import Img3 from "../images/subscriptions-icon.svg"
import { Card } from './Card'
import {BsArrowRight} from "react-icons/bs"


const points = ["Open a fully digital current account","Automate payables & compliment payments","Simplify and track spends with Corporate cards","View financial insights at a glance"]

const heading = "Manage your company’s finances and supercharge your business banking with"

const data = [
  ["Current Account",
"Current Accounts for fast-growing businesses,supported by the best-in-class technology",Img1],
["Payouts",
"Make reliable & secure payouts to bank accounts ,UPI IDs or wallets",Img2],[
"Payroll","Set your payroll and compliances like TDS,ESIC,PT & PF on autopilot.",Img3
],
]
;


export const ExploreSection = () => {
  return (
   
    <div style={{ backgroundImage: `url(${img})` }} className='bg-cover pb-[500px] mt-14 pt-[20rem]'>
        <div className='w-10/12 max-w-[1080px] mx-auto relative pt-4'>

            <h2 className='font-mullish text-center text-2xl leading-[1.2] text-white font-bold '>Explore Razorpay Bussiness Banking</h2>
            
            <div className="mx-auto mt-4 mb-6 flex justify-center">
                <Greenline/>
            </div>

            <ContentBox2 image={Image} points = {points} heading={heading} headImg = {headImg} />

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1080px] mx-auto mt-20 '>

              {
                  data.map((element,index) => {
                      return <Card element={element} key={index} size={1}/>
                  })
              }
            </div>

            <div className='text-white w-full items-center text-xl flex lg:flex-row justify-evenly border-slate-700 mt-16 font-mullish  border py-6 rounded-md'>
                <div>Check out the live demo to learn how RazorpayX works. <span className='font-extrabold'>No sign-up required!</span></div>

                <button className='relative bg-lightBlue flex items-center justify-start rounded-md hover:bg-lightBlue500 transition-all duration-200 px-[18px] py-[14px] md:pr-[80px] font-mullish font-bold'>Check out the demo
                  <div className='w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center '>
                  <BsArrowRight className='font-extrabold '/>
                  </div>
                </button>
            </div>
        </div>
    </div>
  )
}

