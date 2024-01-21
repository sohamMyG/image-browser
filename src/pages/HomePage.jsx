import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'
import { useNavigate } from "react-router-dom";

function HomePage() {
    
    const [search,setSearch] = useState("");
    const navigate = useNavigate();
    const fetchedImgSrc = "https://s3-alpha-sig.figma.com/img/4612/66c8/4c5ae5807660eb18152caeff2019dde6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvX6cB-JOKiICE8vcy73FJVcapTGqunvcuXCt-Jfnxmrpdcc2ZM6k~kGi~eFmTLe69Tch0Fa-MjplyevZqCy9e0d7~vcbMtnvXITFP7VZ1IqGqHFV09wyviG8h06uxVMOxHmWOrEonpGD3gR~DKIAIfji7L36s54tVNfwrFOsM1Wa4f1OG3LHPxt1WeG7DRJqiXrKpIFdD~ypdjFk85WMaVFYGtiDsgNhY~G5EpCzKL3ogJqPEkWbbUjaGVOO5BuLPBepsxhDs30qvEJNVcO-B8kpTyisJtz5wwMbiDsK5Tjr9SmbZagKtJyPIMy96nOOdNHpF8pl-uzLQJIhsnPZg__"
    
    const handleButtonClick = () => {
        console.log(search)
        navigate(`/searchResults/${search}`);
    }

    return (
        <div style={{backgroundImage: `url(${fetchedImgSrc})`}} className='h-screen bg-cover sm:p-7 '>
            <Navbar/>
            <div className='flex justify-center mt-14 flex-col items-center'>
                <h2 className='font-euclid text-white text-2xl md:text-[71.25px] sm:leading-[87.638px] font-bold text-center lg:w-3/4'>
                    Discover over 2,000,000<br/> free Stock Images
                </h2>
                <div className='mt-20'><SearchBar search={search} setSearch={setSearch} handleButtonClick={handleButtonClick}></SearchBar></div>
                <Trending></Trending>
            </div>
        </div>
    )
}

export default HomePage

