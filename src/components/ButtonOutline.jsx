import React from 'react'

function ButtonOutline({children,handleButtonClick}) {
  return (
    <button onClick={handleButtonClick} className='text-[17px] font-semibold leading-5 font-euclid text-white rounded-[8.9px] border-2 border-white px-3 py-1'>
        {children}
    </button>
  )
}

export default ButtonOutline