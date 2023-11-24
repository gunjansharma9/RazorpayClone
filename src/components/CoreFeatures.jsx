import React from 'react'
import bgImg from "../images/core-features-sectionBg.svg"
import { Greenline } from './Greenline'
import icon1 from "../images/instant-activation-icon.svg"
import icon2 from "../images/easy-integration.svg"
import icon3 from "../images/api-driven-icon.svg"
import icon4 from "../images/payment-modes.svg"
import icon5 from "../images/simple-pricing.svg"
import icon6 from "../images/industry-support-icon.svg"
import icon7 from "../images/dashboard-reporting-icon.svg"
import icon8 from "../images/secure-icon.svg"
import { CoreCard } from './CoreCard'

const data = [[icon1,"Instant Activation","Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation."],[icon2,"Easy Integration","With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour."],[icon3,"API Driven","Build your business for scale with our complete API-driven automation that requires zero manual intervention."],[icon4,"100+ payment modes","Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc."],[icon5,"Simple Pricing","Our innovative payment solutions with competitive pricing make payments simpler."],[icon6,"Best in Industry Support","Always available email, phone and chat based support to help you in your every step."],[icon7,"Dashboard Reporting","Real-time data and insights on your Razorpay Dashboard to make informed business decisions."],[icon8,"Secure","PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance."]];

export const CoreFeatures = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className='w-full relative mt-14 pt-[12rem] pb-[12rem] bg-no-repeat bg-cover bg-center'>
        <div className='relative w-11/12 max-w-[1080px] mx-auto'>
            <h2 className='font-mullish font-bold text-2xl text-center text-white'>Features</h2>

            <div className="mx-auto mt-3 mb-3 flex justify-center">
                <Greenline/>
            </div>

            <p className='font-mullish text-center max-w-[450px] text-white mx-auto'>Empower your business with all the right tools to accept online payments and provide the best customer experience</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-8'>
                {
                    data.map((element,index) => {
                        return <CoreCard element={element} key={index}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}
