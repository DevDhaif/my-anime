import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
 
const aotImg=
`https://i0.wp.com/www.animegeek.com/wp-content/uploads/2020/05/Attack-On-Titan-Season-4-release-date-delayed-MAPPA-Shingeki-no-Kyojin-Season-4.jpg?resize=1024%2C576&ssl=1`

function Card({anime}) {
    const [query,setQuery]=useState('')
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate(`${anime.mal_id}`,{state:anime})
    }
  return (
    

    
    
    <div className='bg-bg-third text-bg-dark flex flex-col md:flex-row     rounded-md shadow-xl shadow-t-prime  ' >
        
            <img className='block object-fit w-full  sm:max-w-max  object-center    mb-4 sm:mb-0 ' src={anime.image_url} alt="" />
        
        <section className='space-y-4   p-4 max-w-xs  flex  flex-col  justify-between h-full'>
            
            <div className='flex flex-col space-y-4'>
                <p className='uppercase text-4xl max-w-sm'> <span className='text-red-500'> { anime.title.split(' ')[0]} </span>  <br />{anime.title.substr(anime.title.indexOf(" ") + 1)}</p>
                <div className='flex font-semibold uppercase justify-between  relative'>
                    <div className=''>
                    <p>{anime.score}</p>
                    <p>IMDB</p>
                    </div>
                        <hr className='bg-red-500 h-0.5 absolute  top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 border-r-2 w-12 rotate-90'/>
                    <div>
                    <p>96%</p>
                    <p> rotten tomatoes</p>
                    </div>
                </div>
                <p className='text-center truncate'>{anime.synopsis} as;lfjsd;lfkhs</p>
            </div>
            <div className='flex space-x-2 justify-between items-center  '>
                <div>
                    <p className='text-xs'>NUMBER OF SEASONS</p>
                    <p className='text-5xl'> 04 </p>
                </div>

                <div>
                    <p className='text-xs'>NUMBER OF EPISODES</p>
                    <p className='text-5xl'> {anime.episodes}</p>
                </div>
            </div>
            
            <button className='px-4 py-1 bg-bg-prime text-white' onClick={handleClick}>
              View
            </button>
        </section>

      
        
    </div>
  )
}

export default Card