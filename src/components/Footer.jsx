import React from 'react'
import img1 from "../images/logo-dark.svg"
import img2 from "../images/footer-certificate-1.png"
import img3 from "../images/footer-certificate-2.jpg"
import i1 from "../images/facebook-icon.svg"
import i2 from "../images/twitter-icon.svg"
import i3 from "../images/instagram-icon.svg"
import i4 from "../images/github-icon.svg"
import { FaLinkedin } from "react-icons/fa";

const data1 = ["Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.","RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.","Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.","Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI & RBL bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license."]

const data2 = [["BANKING PLUS","RazorpayX","Current Accounts","Payouts","Payout Links","Corporate Credit Card","View Live Demo"],["LENDING","Razorpay Capital","Instant Settlements","Line of Credit","Working Capital Loans","Marketplace Instant Settlements"],["BECOME A PARTNER","Refer and Earn","Onboarding APIs"],["MORE","Route","Invoices","Freelancer Payments","International","Flash Checkout","UPI","ePOS","Checkout Demo","RazorpayX Payroll"]];

const data3 = [["ACCEPT PAYMENTS","Payment Gateway","Payment Pages","Payment Links","Razorpay POS","QR Codes","Subscriptions","Smart Collect","Optimizer"],["DEVELOPERS","Docs","Integrations","API Reference"],["RESOURCES","Blog","Customer Stories","Events","ChargeBack Guide","Settlement Guide"],["SOLUTIONS","Education","E-commerce","SaaS","BFSI"],["FREE TOOLS","GST Calculator","Online TDS Payment","GST Number Search","GST Search by PAN","ROI Calculator","CAGR Calculator","EBITDA Calculator"]];

const data4 = [["COMPANY","About Us","Careers","Terms of Use","Privacy Policy","Grievance Redressal","Responsible Disclosure","Partners","White papers","Corporate Information"],["HELP & SUPPORT","Support","Knowledge base"]]

const imgData = [i1,i2,i3,i4]

export const Footer = () => {
  return (
    <div className="-mt-[400px] md:-mt-[300px]" style={{ background: 'linear-gradient(to right, #eef9fe, #edf7ff)' }
    }>
        <div className='w-10/12 md:w-11/12 max-w-[1080px] flex flex-col lg:flex-row justify-between mx-auto pt-[400px] md:pt-[350px] md:py-0'>

            {/* column 1 */}
            <div className='flex flex-col md:max-w-[340px] lg:max-w-[260px]'>
                <img src={img1} alt=""
                    loading='lazy'
                    width="120px"
                    height="24px"
                 />

                 {
                    data1.map((element,index) => {
                        return(
                            <div className={` text-grayText font-mullish my-3 ${index === 3 ? 'text-[0.615rem]' : 'text-sm'}`}>
                                
                                {element}
                            </div>
                        )
                    })
                 }

                 <div className='flex items-start space-x-4'>
                    <img src={img2} alt="" 
                        loading='lazy'
                        width="92"
                        height="40"
                        className='cursor-pointer'
                    />
                    <img src={img3} alt=""
                        loading='lazy'
                        width="122"
                        height="80"
                        className="cursor-pointer"
                     />
                 </div>
            </div>

            {/* column2 */}
            <div className='flex flex-col space-y-4 '>
                 {
                    data2.map((element,i) => {
                        return(
                            <div className='flex flex-col space-y-2'>
                                {
                                    element.map((e,index) => {
                                        return (
                                            <div className={`font-mullish ${index === 0 ? "text-gray2 font-bold" : "font-medium hover:text-grayBlue transition-all duration-200 text-lightBlue500"}`}>
                                                {e} {i===0 && index === 6 && <span className="text-white font-mullish bg-green-500 rounded-sm text-xs font-bold p-1 ">NEW</span>}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                 }
            </div>

            {/* column 3 */}
            <div className='flex flex-col space-y-4'>
                {
                    data3.map((element,i) => {
                        return(
                            <div className='flex flex-col space-y-2'>
                                {
                                    element.map((e,index) => {
                                        return(
                                            <div  className={`font-mullish ${index === 0 ? "text-gray2 font-bold" : "font-medium hover:text-grayBlue transition-all duration-200 text-lightBlue500"}`}>
                                                {e} {
  ( (i === 0 && index === 6) || (i === 4 && (index === 5 || index === 6 || index === 7)) ) && 
  <span className="text-white font-mullish bg-green-500 rounded-sm text-xs font-bold p-1">NEW</span>
}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

            {/* column 4 */}
            <div>
                <div  className='flex flex-col space-y-4'>
                {
                    data4.map((element,i) => {
                        return(
                            <div className='flex flex-col space-y-2'>
                                {
                                    element.map((e,index) => {
                                        return(
                                            <div  className={`font-mullish ${index === 0 ? "text-gray2 font-bold" : "font-medium hover:text-grayBlue transition-all duration-200 text-lightBlue500"}`}>
                                                {e}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                </div>

                <div className='flex flex-col space-y-4'>
                    <p className='text-gray2 font-bold font-mullish'>FIND US ONLINE</p>

                    <div className='flex flex-row space-x-4 items-center mt-4'>
                    {
                        imgData.map((e,i) => {
                            return(
                                <div>
                                    <img src={e} alt="" />
                                </div>
                            )
                        })
                    }
                    <FaLinkedin className='text-3xl'/>
                    </div>
                </div>

                <div className='flex flex-col text-gray2 font-mullish'>
                    <p className='text-gray2 font-bold font-mullish mt-4 mb-1'>REGD. OFFICE ADDRESS</p>

                    <div>
                        <p>Razorpay Software Private Limited,<br/>1st Floor,SJR Cyber,<br/>22 Laskar Hosur Road,Adugodi,<br/>Bengaluru,560030,<br/>Karnataka,India<br/>CIN:U72200KA2013PTC097389</p>
                        <br/>
                    
                        <p>© Razorpay 2023</p>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
