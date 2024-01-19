import React from 'react'
import Navbar from '../components/Navbar'
function HomePage() {
    
    const fetchedImgSrc = "https://s3-alpha-sig.figma.com/img/4612/66c8/4c5ae5807660eb18152caeff2019dde6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvX6cB-JOKiICE8vcy73FJVcapTGqunvcuXCt-Jfnxmrpdcc2ZM6k~kGi~eFmTLe69Tch0Fa-MjplyevZqCy9e0d7~vcbMtnvXITFP7VZ1IqGqHFV09wyviG8h06uxVMOxHmWOrEonpGD3gR~DKIAIfji7L36s54tVNfwrFOsM1Wa4f1OG3LHPxt1WeG7DRJqiXrKpIFdD~ypdjFk85WMaVFYGtiDsgNhY~G5EpCzKL3ogJqPEkWbbUjaGVOO5BuLPBepsxhDs30qvEJNVcO-B8kpTyisJtz5wwMbiDsK5Tjr9SmbZagKtJyPIMy96nOOdNHpF8pl-uzLQJIhsnPZg__"

    return (
        <div style={{backgroundImage: `url(${fetchedImgSrc})`}} className='h-screen bg-cover p-7'>
            <Navbar/>
            <div className='flex justify-center mt-14'>
                <h2 className='font-euclid text-white text-[71.25px] leading-[87.638px] font-bold text-center w-2/4'>
                    Discover over 2,000,000 free Stock Images
                </h2>
            </div>
        </div>
    )
}

export default HomePage