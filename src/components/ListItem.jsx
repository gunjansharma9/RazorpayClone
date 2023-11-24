import React from 'react'

const ListItem = ({element}) => {
  return (
    <div className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative hidden lg:block group'>
      {element}

      <div className='absolute w-full bg-lightBlue hidden group-hover:block transition-all duration-200 bottom-0 h-1'></div>
    </div>
  )
}

export default ListItem
