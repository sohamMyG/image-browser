import React from 'react'

function Translucent({children}) {
  
    
    return (
        
        <div className='rounded-[8.906px] bg-translucent h-[67px]  backdrop-blur-translucent custom-box-shadow'>
            {children}
        </div>
    
    // color: #FFF;
    // font-family: "Euclid Circular B";
    // font-size: 17.813px;
    // font-style: normal;
    // font-weight: 600;
    // line-height: 19.95px; /* 112% */
  )
}

export default Translucent