import {useState,useEffect} from 'react'
import {useNavigate,useParams,Link, useLocation} from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {GoEye} from 'react-icons/go'


function Item() {
    const [anime,setAnime]=useState([])
    const [animeDetails,setAnimeDetails]=useState({})


    const location = useLocation();

    const params=useParams()

    useEffect(()=>{
        setAnimeDetails(location.state)
        fetchAnimeDetails()
    },[])

    const fetchAnimeDetails=async()=>{

            const options = {
            method: 'GET',
            url: `https://jikan1.p.rapidapi.com/anime/${params.animeId}/episodes`,
            headers: {
                'x-rapidapi-host': 'jikan1.p.rapidapi.com',
                'x-rapidapi-key': 'a5990e9e61mshcc17f1aac7fdd5ap12a58ajsn263efd24ef47'
            }
            };

            axios.request(options).then(function (response) {
                console.log(response.data.episodes);
                setAnime(response.data.episodes);
                console.log(anime);
                
            }).catch(function (error) {
                console.error(error);
            });
    }

  return (
      <div className='flex flex-col'>
      {anime &&(
    <div className=''>
        <main className='h-screen  py-4 bg-center bg-no-repeat bg-cover bg-opacity-10 ' style={{ 
                backgroundImage: `url(${animeDetails.image_url})`}}>
            
            
            <section  className='h-full w-full  bg-bg-dark/70 rounded-md  text-white  flex flex-col md:flex-row space-y-4  shadow-xl shadow-gray-100  '>

                    <div className='w-full'>
                        <img className='w-screen ' src={`${animeDetails.image_url}`} alt="" />
                    </div>
                    
                    <div className='px-4 space-y-4 py-7 max-w-sm bg-inherit w-full'>
                        <p className='text-center text-2xl font-robert font-semibold tracking-wider'>{animeDetails.title} </p>
                        <p className='text-xl '>Episodes {animeDetails.episodes}</p>
                        <p className='max-w-xs'>{animeDetails.synopsis}</p>
                        <p>{animeDetails.score}</p>
                        <p>{animeDetails.members}</p>
                        <p>{animeDetails.rated}</p>
                    </div>
                    
            </section>
            
        </main>
        
        <div className='bg-inherit space-y-12 py-8'>
                    <h1 className='text-center text-3xl'>Episodes</h1>
                    
                        
                        <div className='flex mb-4 h-full space-x-3 items-center'>
                        <Swiper
                                spaceBetween={50}
                                slidesPerView={2}
                                >
                                {anime.map((ep)=>(
                                <SwiperSlide key={ep.episode_id}>
                                <p className=''>{ep.episode_id} {ep.title}</p>
                                <a className='text-blue-500 text-lg' href={ep.video_url} target="_blank" rel="noopener noreferrer">
                                <GoEye className='fill-blue-500 hover:fill-blue-700'/>
                                </a>
                                </SwiperSlide>
                                ))}
                                
                                </Swiper>
                        
                                 
                        
                        </div>
                    
                    </div>
        </div>
      )}
     </div>
  )
}

export default Item