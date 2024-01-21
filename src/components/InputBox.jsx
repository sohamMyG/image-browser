import React from 'react'

function InputBox({text,search,setSearch}) {
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
  };

  return (
        <input type="text" placeholder={text} value={search} onChange={handleChange}
         className="w-11/12 text-[17.8px] placeholder:text-white flex-grow focus:outline-none text-white bg-transparent flex items-center" />
   
  )
}

export default InputBox