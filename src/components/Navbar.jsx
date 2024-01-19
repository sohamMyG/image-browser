import React from 'react'
import Translucent from './Translucent'
import ButtonOutline from './ButtonOutline'

function Navbar() {
  
  
    return (
    <Translucent>
        <div className='flex justify-between items-center h-full px-10 text-[17px] font-semibold leading-5 font-euclid text-white'>
            <div>Homepage</div>
            <div>
                    <button>Login</button>
                    <ButtonOutline>Create Account</ButtonOutline>
            </div>
        </div>
        
    </Translucent>
  )
}

export default Navbar