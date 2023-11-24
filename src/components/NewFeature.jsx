import React from 'react'
import dot from "../images/feature-section1-dottedrows.png"
import { FCard } from './FCard';
import Bg1 from "../images/upi-autopay-bg.svg"
import Bg2 from "../images/upi-autopay-bg.svg"
import Bg3 from "../images/payment-button-bg.svg"
import Bg4 from "../images/upi-autopay-bg.svg"
import Bg5 from "../images/magic-checkout-bg.svg"

import Icon from "../images/payment-link-icon.svg";

let Icon1, Icon2, Icon3, Icon4, Icon5;
Icon1 = Icon2 = Icon3 = Icon4 = Icon5 = Icon;


const cardData = [["Instant Settlements","Settle your customer payments within 10 seconds as soon your account is activated,even during holidays.",Bg1,Icon1],["UPI AutoPay","Allow customers to set up recurring payments using UPI Apps.",Bg2,Icon2],["Payment Button","Accept payments on your website,in less than 5 minutes.No developer needed.",Bg3,Icon3],["QR Codes","Create unlimited QR codes with business branding and start accepting payments for free.",Bg4,Icon4],["Magic Checkout","Improve your order conversion rated & reduce return-to-origins.Boost your business by 20%!",Bg5,Icon5]];



export const NewFeature = () => {
  return (
    <div className='bg-white relative overflow-hidden'>
        <div className='w-11/12 max-w-[1080px] relative mx-auto'>
            <img src={dot} alt="" 
                className='absolute left-[300px] -top-[6rem] w-[233px] z-10'
            />
            <img src={dot} alt=""
                className='absolute w-[233px] -right-[3.5rem] -top-[6rem]'
             />

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 mt-24'>
                <div className='relative'>
                    <h2 className='text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]'>New in the <span className='text-lightBlue500'>Razorpay </span>
                    Product Suite
                    </h2>
                </div>

                {
                    cardData.map((element,index) => {
                        return <FCard element={element} key={index}
                        className=" [z-100]"
                        />
                    })
                }
            </div>
        </div>
    </div>
  )
}



