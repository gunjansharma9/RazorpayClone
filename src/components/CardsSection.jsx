import React from 'react'
import { Card } from './Card'
import Img1 from "../images/payment-link-icon.svg"
import Img2 from "../images/payment-pages-icon.svg"
import Img3 from "../images/payment-buttons-icon.svg"
import Img4 from "../images/subscriptions-icon.svg"
import Img5 from "../images/route-icon.svg"
import Img6 from "../images/smart-collect-icon.svg"


const data = [
    ["Payment Links",
"Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately",Img1],
["Payment Pages",
"Accept international and domestic payments with automated payment receips",Img2],[
"Payment Buttons","Start accepting one time subscription payments on your website in less than 5 minutes.",Img3
],
["Subscriptions","Subscription plans with automated recurring transactions on various payment modes",Img4],
["Route","Easily split incoming payments to individual accounts,and manage marketplace money flow.",Img5],
["Smart Collect","Reconcile incoming NEFT,RTGS,IMPS & UPI payments using Customer Identifiers & UPI IDs",Img6]
]
;

export const CardsSection = () => {
  return (
    <>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1080px] mx-auto mt-20'>

            {
                data.map((element,index) => {
                    return <Card element={element} key={index}/>
                })
            }
        </div>
    </>
  );
}
