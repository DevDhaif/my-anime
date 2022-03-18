import {useState,useEffect} from 'react'
import {useNavigate,useParams, useLocation} from 'react-router-dom'
import axios from 'axios'
import {GoEye} from 'react-icons/go'
import SwiperCore, {Navigation,Scrollbar,Pagination,A11y,Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Spinner from '../components/Spinner'

SwiperCore.use([Navigation,Pagination,Scrollbar,A11y,Autoplay])
const colr="red-500"
function Item() {
    const [anime,setAnime]=useState([])
    const [animeDetails,setAnimeDetails]=useState({})
    const [loading,setLoading]=useState(false)


    const location = useLocation();
    const navigate=useNavigate()

    const params=useParams()

    useEffect(()=>{
      if(location?.state !== null)
      {
      setLoading(true)
        setAnimeDetails(location?.state)
        
        fetchAnimeDetails()
      setLoading(false)
    }
    else{
      
      navigate('/notfound')
    }

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
            
                <h1 className={`text-7xl text-${colr}`}>hello</h1>
                <div className="p-4 space-y-8   bg-bg-dark/70  md:h-full text-white   justify-around    rounded-md shadow-md shadow-white ">
                <section className="w-full md:flex md:flex-row   justify-start space-x-4">
                  <img className="w-full block object-cover  sm:max-w-xs " src={animeDetails.image_url} alt=""/>
                  <div className="space-y-3 px-2 py-8  w-full">
                      <p className='text-lg text-center font-robert font-bold tracking-wider'>{animeDetails.title}</p>
                      <p>{animeDetails.airing}   </p>
                      <p className="leading-8 text-left font-medium text-base">{animeDetails.synopsis}</p>
                      <p className='text-red-500'> {animeDetails.type}</p>
                      <p className='text-lg'>Episodes : {animeDetails.episodes}</p>
                      <p className=' text-lg'>{animeDetails.score && `Score ${animeDetails.score }`}</p>
                      <p>{animeDetails.rated && `Rated ${animeDetails.rated }`}</p>
                      <p className='text-lg'>{animeDetails.members && "Rates : "}{animeDetails.members}</p>
                      
                  </div>

                  {loading && (
                    <Spinner/>
                )}

                </section>
                <section className='bg-bg-dark/50 w-full text-white px-4 py-8 space-y-4'>
                
                  <h1 className='text-lg font-semibold text-t-dark'>Episodes</h1>
                  <Swiper className='py-4'
                                            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                            pagination={{clickable:true}}
                                            spaceBetween={50}
                                            navigation={{
                                              nextEl: '.swiper-button-next',
                                              prevEl: '.swiper-button-prev',
                                            }}
                                            breakpoints={{
                                              // when window width is >= 640px
                                              640: {
                                                width: 640,
                                                slidesPerView: 1,
                                              },
                                              // when window width is >= 768px
                                              768: {
                                                width: 768,
                                                slidesPerView: 2,
                                              },
                                            }}
                                            loop={true}
                                            autoplay={{
                                                delay: 1000,
                                                disableOnInteraction: false
                                            }}
                                            scrollbar={{ draggable: true, dragSize: 24,el: '.swiper-scrollbar' }}
                                            >
                                {anime.map((ep)=>(
                                <SwiperSlide key={ep.episode_id} className="shadow  shadow-slate-100/50  my-8  py-1 bg-bg-dark-nav ">
                                <div className='px-4 '>
                                <a className='text-white  w-full  text-lg' href={ep.forum_url} target="_blank" rel="noopener noreferrer">
                                        <p className=''>{ep.episode_id} {ep.title}</p>
                                        
                                        <div className='inline-flex    space-x-4'>
                                        <GoEye className='fill-blue-200 mt-2  hover:fill-blue-500 '/>
                                        <p >Watch</p>
                                        </div>
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