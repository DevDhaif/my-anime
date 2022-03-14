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
    

    
    
    <div className='bg-bg-third text-bg-dark flex flex-col md:flex-row justify-between  relative rounded-md shadow-xl shadow-t-prime  ' >
        <div className='md:w-96'>
            <img className='w-96 object-cover h-full' src={anime.image_url} alt="" />
        </div>
        <section className='space-y-4 py-7 px-8 max-w-sm'>
            <p className="font-poppins tracking-[0.7rem] text-2xl">MAPPA</p>
            
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

        <p className='absolute inset-x-0 ml-12  inset-y-1/4 md:w-2/5 mx-auto  w-full md:rotate-90 text-red-500 font-semibold text-3xl tracking-[.85em]'>進撃の巨人</p>

        
    </div>
  )
}

export default Card