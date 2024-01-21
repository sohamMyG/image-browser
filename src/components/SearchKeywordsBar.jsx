import React from 'react'

function SearchKeywordsBar() {
    const buttonData = [
        'digital',
        'Computer',
        'Codierung',
        'Tech',
        'Netz',
        'Code',
        'finanzieren',
        'Marketing'
        // Add more buttons as needed
      ];
    
      return (
        <div className=" bg-[#f5f5f5] p-4">
          {buttonData.map((buttonText, index) => (
            
              <button
                key={index}
                className="inline-block text-[#767676] text-sm font-medium capitalize py-3.5 text-center w-[150px]
                border  border-[#d1d1d1] mx-6"
                style={{
                  fontFamily: 'Helvetica Neue',
                }}
              >
                {buttonText}
              </button>
            
          ))}
        </div>
      );
}

export default SearchKeywordsBar