import React from 'react'
import Translucent from './Translucent'
import ButtonOutline from './ButtonOutline'
import { Link } from "react-router-dom";

function Navbar() {
  
  
    return (
    <Translucent>
        <div className='flex justify-between items-center h-full sm:px-10 text-[17px] font-semibold leading-5 font-euclid text-white px-2'>
        <Link to="/"> <div>Homepage</div> </Link>
            <div className='flex justify-center gap-4'>
                    <button>Login</button>
                    <ButtonOutline>Create Account</ButtonOutline>
            </div>
        </div>
        
    </Translucent>
  )
}

export default Navbar