import React from 'react'

function ButtonOutline({children}) {
  return (
    <div className='text-[17px] font-semibold leading-5 font-euclid text-white rounded-[8.9px] border-2 border-white px-4 py-2'>
        {children}
    </div>
  )
}

export default ButtonOutline