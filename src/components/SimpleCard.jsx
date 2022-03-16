import React,{ useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'

function SimpleCard({an}) {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/search/${an.mal_id}`,{state:an})
}
  
  return (
    <div  className='bg-gray-800 rounded-lg p-4 flex flex-col justify-between'>
    <img src={an.image_url} className="block max-h-72  w-full sm:max-w-xs mr-4 object-cover  mb-4 sm:mb-0" alt={`${an.title} image`} />
              <div className='flex flex-1 flex-col space-y-4 justify-around'>
                  <h3 className='text-lg md:text-2xl font-semibold tracking-wide text-t-dark  font-robert ' >{an.title}</h3>
                  <p className='truncate'>{an.synopsis}</p>
                  <div className='grid grid-cols-2 gap-2 w-full p-2'>
                        <p className='py-1   rounded-md bg-rose-500 px-2 text-lg '>{an.producers[0].name}</p>
                        {an.demographics[0] && (

                            <p className='py-1   rounded-md bg-purple-500 px-2 text-lg'>{an.demographics[0] && `${an.demographics[0].name}`}</p>
                        )}
                        <p className='py-1  rounded-md bg-teal-500 max-h-8  px-2 text-lg'>{an.episodes}</p>
                        <p className='py-1  rounded-md bg-cyan-500 max-h-8  px-2 text-lg'>{an.score}</p>
                        
                  </div>
                  <button className='px-4 py-1 bg-bg-prime w-24 text-white' onClick={handleClick}>
                  View
                  </button>
                  
                  
                  </div>
                  </div>
  )
}

export default SimpleCard

{/**
      
        */}