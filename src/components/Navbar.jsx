import React from 'react'
import logo1 from "../images/logo.svg"
import ListItem from './ListItem'
import IndiaFlag from "../images/india-flag.svg"
import {AiOutlineArrowRight} from "react-icons/ai"

const Navbar = () => {
    const NavLists = ["Payments","Banking","Corporate Card","Payroll","Resources","Support","Pricing"]
  return (
    <div className='bg-deepBlue'>
      <div className='relative w-[1080px] mx-auto flex items-center justify-between'>
        <a href='/' className='cursor-pointer py-7 pr-7'>
            <img src={logo1} alt='' width={"125px"} height={"30px"}/>
        </a>

        <ul className='flex space-x-6'>
            {
                NavLists.map((element,index) => {
                    return <ListItem element={element} key={index}/>
                })
            }
        </ul>

        <div className='flex space-x-6'>
            <img src={IndiaFlag}
              width={"28px"}
              height={"20px"}
              className='hidden lg:block'
              alt=''
            />

            <button className='font-mullish text-white text-sm font-bold px-3 py-3 border-lightBlue border rounded-sm'>
              Log in
            </button>

            <button className='py-3 px-4 font-mullish rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500 hidden lg:flex  items-center gap-1'>
              Sign Up
              <AiOutlineArrowRight/>
            </button>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
