import React from 'react'
import close from "../assets/closesquare.svg"
import RadioSelector from './RadioSelector'

function ImageDetails({image,handleCloseClick}) {

    console.log(image)
    if(!image){
        return
    }
    return (
    <div className='bg-white xl:w-9/12 mx-auto rounded-md'>
        <div className='bg-neutral-100 flex justify-between items-center p-3 text-midnightBlue font-medium rounded-md'>
            <div>Preview ID: {image.id}</div>
            <button onClick={handleCloseClick}><img src={close} alt="close button" /></button>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center p-8 gap-10'>
            <img src={image.webformatURL} alt={image.tags} className='h-1/4'/>
            <div>
                <section>
                    <h4 className='text-midnightBlue text-[1.33rem] font-medium leading-[3.21rem]'>Download</h4>
                    <RadioSelector/>

                    <div>
                        <h4 className='text-midnightBlue text-[1.33rem] font-medium leading-[3.21rem]'>Information</h4>
                        <div className='flex justify-between gap-10'>
                            <div className='flex flex-col justify-between gap-4'>
                                
                                <div>
                                    <div>User</div>
                                    <div className='font-semibold'>{image.user}</div>
                                </div>    
                                <div>
                                    <div className=''>Views</div>
                                    <div className='font-semibold'>{image.views}</div> 
                                </div> 
                                 
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <div>User ID</div>
                                    <div className='font-semibold'>{image.user_id}</div></div>
                                <div>
                                    <div>Downloads</div>
                                    <div className='font-semibold'>{image.downloads}</div> 
                                </div>   
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div> <div>Type</div>
                                <div className='font-semibold'>{image.type}</div></div>
                                <div><div>Likes</div>
                                <div className='font-semibold'>{image.likes}</div> </div>
                               
                                 
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
                
            </div>
        </div>
        <div className='flex items-center justify-start pl-8 flex-wrap pb-3 mb-3'>
            <div className='text-midnightBlue text-[1.33rem] font-bold leading-[3.21rem]'>Tags:</div> {image.tags.split(',').map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center bg-gray-100 rounded px-3 py-1 mx-2"
                    >
                      {tag}
                    </div>
                  ))}
        </div>
    </div>
  )
}

export default ImageDetails

// "id": 6701504,
//             "pageURL": "https://pixabay.com/illustrations/technology-city-glowing-business-6701504/",
//             "type": "illustration",
//             "tags": "technology, city, glowing",
//             "previewURL": "https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_150.jpg",
//             "previewWidth": 150,
//             "previewHeight": 100,
//             "webformatURL": "https://pixabay.com/get/g6bcae793d71e7f32c4772124583d73da47a80babfcaa878ccce45e69459356f1c018515e01e0e326ea7d538d4c877dd59f6a1b62ebea2dc615e32b01a6d42a42_640.jpg",
//             "webformatWidth": 640,
//             "webformatHeight": 427,
//             "largeImageURL": "https://pixabay.com/get/g3dd02bb425f3708ed0ddaaa156979f5f2dc72be900540bfd247ac82a57f9871722755d34ecf11da34c1e6309257bb2b2d52ea471d722a19dc0c63d15a9181c7a_1280.jpg",
//             "imageWidth": 6000,
//             "imageHeight": 4000,
//             "imageSize": 2496503,
//             "views": 71879,
//             "downloads": 40289,
//             "collections": 208,
//             "likes": 194,
//             "comments": 30,
//             "user_id": 17946924,
//             "user": "tungnguyen0905",
//             "userImageURL": "https://cdn.pixabay.com/user/2020/09/01/13-04-45-350_250x250.jpg"