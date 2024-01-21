import React from 'react'

function RadioSelector() {
  return (
    <>
    <ul class="w-72 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
    <li class="w-full border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center ps-3">
            <label for="list-radio-small" class="flex justify-between w-60 py-3 ms-2 text-sm font-medium text-gray-900 "><div className='font-normal'>Small</div> <div className='font-bold'>640x960</div> </label>
            <input id="list-radio-small" type="radio" value="" name="list-radio" class="w-4 h-4 mx-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"></input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center ps-3">
            <label for="list-radio-small" class="flex justify-between w-60 py-3 ms-2 text-sm font-medium text-gray-900 "><div className='font-normal'>Medium</div> <div className='font-bold'>1920x2660</div> </label>
            <input id="list-radio-small" type="radio" value="" name="list-radio" class="w-4 h-4 mx-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"></input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center ps-3">
            <label for="list-radio-small" class="flex justify-between w-60 py-3 ms-2 text-sm font-medium text-gray-900 "><div className='font-normal'>Big</div> <div className='font-bold'>2400x3600</div> </label>
            <input id="list-radio-small" type="radio" value="" name="list-radio" class="w-4 h-4 mx-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"></input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center ps-3">
            <label for="list-radio-small" class="flex justify-between w-60 py-3 ms-2 text-sm font-medium text-gray-900 "><div className='font-normal'>Original</div> <div className='font-bold'>2400x3600</div> </label>
            <input id="list-radio-small" type="radio" value="" name="list-radio" class="w-4 h-4 mx-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"></input>
        </div>
    </li>
    </ul>
    <button className='text-white bg-[#4BC34B] w-72 py-[9.78px] rounded-sm font-semibold text-[11.551px] leading-[17.771px] my-6'>
        Download for free!
    </button>
    </>
  )
}

export default RadioSelector