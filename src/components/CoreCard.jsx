import React from 'react'

export const CoreCard = ({element}) => {
  return (
    <div>
        <img src={element[0]} alt="" />

        <h3 className='font-mullish text-white text-lg font-bold my-4'>{element[1]}</h3>

        <p className='font-mullish text-white opacity-80'>{element[2]}</p>
    </div>
  )
}
