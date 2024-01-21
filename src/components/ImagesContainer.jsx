import React from 'react'

function ImagesContainer({images,handleImageClick}) {
    return (
        <div className="container mx-auto">

          <div className="flex flex-wrap gap-x-14 justify-center mt-12">
            {images.map((image) => (
              <div key={image.id} className="w-[364px] mb-8">
                <img
                  src={image.webformatURL}
                  alt={image.tags}
                  className="h-[242px]  mb-4 rounded hover:cursor-pointer"
                  onClick={()=>handleImageClick(image.id)}
                />
                <div className="flex flex-wrap">
                  {image.tags.split(',').map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center bg-gray-100 rounded px-3 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      );
      
}

export default ImagesContainer