import {useState,useEffect} from 'react'
import axios from 'axios';
import SwiperCore, {Navigation,Scrollbar,Pagination,A11y,Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Spinner from '../components/Spinner';

const api = {
  base: import.meta.env.VITE_BASE_URL,
  host: import.meta.env.VITE_HOST,
  key: import.meta.env.VITE_KEY
};

function Upcoming() {
  
    const [list,setList]=useState([])
    const [loading,setLoading]=useState(false)
   
  useEffect(()=>{
    console.log(api);
    fetchAnimeDetails()
},[])
  const fetchAnimeDetails=async()=>{
    setLoading(true)
    const options = {
    method: 'GET',
    url: `${api.base}/top/anime/1/upcoming`,
    headers: {
        'x-rapidapi-host': `${api.host}`,
        'x-rapidapi-key': `${api.key}`
    }
    };

    axios.request(options).then(function (response) {
        setList(response.data.top);
        setLoading(false)
        
    }).catch(function (error) {
        console.error(error);
    });
}
    
  return (
    <div className='container space-y-8 mt-4'> 
    <h1 className='text-center text-2xl  font-robert text-t-dark  tracking-widest'><span className='text-teal-300 font-bold'> Upcoming</span> Animes</h1>
    
    {loading && <Spinner/>}
    <Swiper className=''
  modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                  spaceBetween={50}
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
                      delay: 3000,
                      disableOnInteraction: false
                  }}
                  scrollbar={{ draggable: true, dragSize: 24 }}
                  >
    
   
      
                  {list.map((ep)=>(
                  <SwiperSlide key={ep.mal_id} className="">
                  <div className=' '>
                          <p className='absolute bottom-0 bg-bg-dark/80  p-4 w-full font-semibold '> {ep.title}</p>
                          <img style={{ width: '100%' }} className='bg-center bg-cover  h-80' src={ep.image_url} alt="" />
                  </div>
                  </SwiperSlide>
                  ))}

                  
                  
                
      </Swiper>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    
      {list.map((ep)=>(
      
        <div key={ep.mal_id} className=' relative rounded-md shadow-md shadow-gray-50'>
        <p className={`absolute top-0 rounded-md bg-bg-dark right-0 px-4 py-1 text-lg font-semibold tracking-wider ${ep.type==="TV"?"text-rose-500":"text-green-500"}`}> {ep.type==="TV"?"Serie":"Movie"}</p>

        <div className='absolute bg-bg-dark/90  h-36 w-full px-4 text-lg py-4  flex space-x-4 justify-between bottom-0'>
        
        <p className='   '> {ep.title}</p>
        <p className='  '> {ep.start_date}</p>
        </div>
                <img style={{ width: '100%' }} className='bg-center rounded-md bg-cover  h-full' src={ep.image_url} alt="" />
        </div>
        ))}
        </div>

    </div>
  )
}

export default Upcoming