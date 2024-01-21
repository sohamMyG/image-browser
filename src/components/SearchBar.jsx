import React from 'react'
import searchnormal from "../assets/searchnormal.svg"
import Translucent from './Translucent'
import ButtonOutline from './ButtonOutline'
import InputBox from './InputBox'

function SearchBar({search,setSearch,handleButtonClick,text="Search"}) {
  return (
    <Translucent>
        <div className='flex justify-between items-center h-full md:w-[750px] px-10 text-[17.8px] font-semibold leading-5 font-euclid text-white'>
            <div className='flex justify-center gap-4'>
                    <img src={searchnormal} alt="searchicon" />
                    <div className='border-r-2 py-4'></div>
                    <InputBox search={search} setSearch={setSearch} text={text}></InputBox>
            </div>
            <ButtonOutline handleButtonClick={handleButtonClick}> GO!</ButtonOutline>
        </div>
        
    </Translucent>
  )
}

export default SearchBar