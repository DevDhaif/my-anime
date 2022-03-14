import {useState,useEffect} from 'react'
import {useNavigate,useParams,Link, useLocation} from 'react-router-dom'
import axios from 'axios'
import 'swiper/css';
import {GoEye} from 'react-icons/go'
import SwiperCore, {Navigation,Scrollbar,Pagination,A11y,Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';


SwiperCore.use([Navigation,Pagination,Scrollbar,A11y,Autoplay])
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
       
            <main className='min-h-screen   py-4 bg-center bg-no-repeat bg-cover bg-opacity-10 ' style={{ 
                    backgroundImage: `url(${animeDetails.image_url})`}}>
                
                
                    <div class="p-4 space-y-8   bg-bg-dark/70  md:h-full text-white   justify-around    rounded-md shadow-md shadow-white ">
                    <section class="w-full md:flex md:flex-row   justify-start space-x-4">
                    <img class="w-full  object-cover max-h-96  " src={animeDetails.image_url} alt=""/>
                    <div class="space-y-3 px-2 py-8   h-full  w-full">
                        <p>{animeDetails.title}</p>
                        <p>{animeDetails.airing}   </p>
                        <p class="max-w-sm">{animeDetails.synopsis}</p>
                        <p>{animeDetails.type}</p>
                        <p>{animeDetails.episodes}</p>
                        <p>{animeDetails.score}</p>
                        <p>{animeDetails.rated}</p>
                        <p>{animeDetails.members}</p>
                        
                    </div>



                    </section>
                    <section className='bg-bg-dark/50 w-full text-white px-4 py-8 space-y-4'>
                    
                    <h1>Episodes</h1>
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                    spaceBetween={50}
                                    slidesPerView={2}
                                    loop={true}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false
                                    }}
                                    scrollbar={{ draggable: true, dragSize: 24 }}
                                    >
                                    {anime.map((ep)=>(
                                    <SwiperSlide key={ep.episode_id} className="bg-bg-prime ">
                                    <div className='inline-flex items-center h-24 space-x-2 p-6 justify-center'>
                                            <p className=''>{ep.episode_id} {ep.title}</p>
                                            <a className=' text-lg' href={ep.video_url} target="_blank" rel="noopener noreferrer">
                                            <GoEye className='fill-blue-200 hover:fill-blue-700'/>
                                            </a>
                                    </div>
                                    </SwiperSlide>
                                    ))}
                                    
                                    </Swiper>
    
                    </section>
                
                
                </div>
                
            </main>
            
                    
                        
            
  )
}

export default Item