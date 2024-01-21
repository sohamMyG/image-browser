import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ImagesContainer from '../components/ImagesContainer'
import SearchKeywordsBar from '../components/SearchKeywordsBar'
import ImageDetails from '../components/ImageDetails'
import { useNavigate } from "react-router-dom";


function SearchResults() {
    const fetchedImgSrc = "https://s3-alpha-sig.figma.com/img/4612/66c8/4c5ae5807660eb18152caeff2019dde6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvX6cB-JOKiICE8vcy73FJVcapTGqunvcuXCt-Jfnxmrpdcc2ZM6k~kGi~eFmTLe69Tch0Fa-MjplyevZqCy9e0d7~vcbMtnvXITFP7VZ1IqGqHFV09wyviG8h06uxVMOxHmWOrEonpGD3gR~DKIAIfji7L36s54tVNfwrFOsM1Wa4f1OG3LHPxt1WeG7DRJqiXrKpIFdD~ypdjFk85WMaVFYGtiDsgNhY~G5EpCzKL3ogJqPEkWbbUjaGVOO5BuLPBepsxhDs30qvEJNVcO-B8kpTyisJtz5wwMbiDsK5Tjr9SmbZagKtJyPIMy96nOOdNHpF8pl-uzLQJIhsnPZg__"
    const [search , setSearch] = useState("");
    const [images, setImages] = useState([]);
    const [viewImageDetails, setviewImageDetails] = useState(null)
    const [searchBar, setSearchBar] = useState("")
    let {query} = useParams();
    const navigate = useNavigate();
    
    // const apiKey = process.env.API_key
    const apiKey = "41910449-82f7bcd5cf264fb5f61f6af4e"

    useEffect(() => {
        
        const fetchData = async () => {
            setSearch(query)
            await getImages(search)
        };
          
        fetchData();
    }, [search,query]);

    const handleImageClick = (id)=>{
        const image = images.filter(image=>image.id === id)
        setviewImageDetails(image[0])
    }

    const handleCloseClick = () =>{
        setviewImageDetails(null)
    }

    const getImages = async (query) => {
        if(query==""){
            return
        }
        try {
            const response = await axios.get(
              `https://pixabay.com/api/?key=${apiKey}&q=${query}`
            );
    
            setImages(response.data.hits);
          
            console.log(response.data.hits)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    const handleSearchClick = () => {
        navigate(`/searchResults/${searchBar}`);
    }

    return (
        <>
            <div style={{backgroundImage: `url(${fetchedImgSrc})`}} className=' bg-cover pt-10 px-8'>
                <Navbar/>
                <div className='flex justify-center flex-col items-center'>
                    <div className='mt-[71px]'>
                        <SearchBar text="Start new Search" search={searchBar} setSearch={setSearchBar} handleButtonClick={handleSearchClick}></SearchBar>
                    </div>
                    <h2 className='my-6 font-euclid text-white text-[42.614px] leading-[87.638px] font-bold text-center drop-shadow-[0_3.5px_3.5px_rgba(0,0,0,0.25)]'>
                        Results: {search}
                    </h2>
                </div>
            
            </div>
            <SearchKeywordsBar />
       
            <ImagesContainer images={images} handleImageClick={handleImageClick}/>

            <div className={`fixed z-10 pt-24 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] ${viewImageDetails === null ? 'hidden' : 'block'}`}>
                <ImageDetails image={viewImageDetails} handleCloseClick={handleCloseClick}/>
            </div>
        
        </>

    )
}

export default SearchResults