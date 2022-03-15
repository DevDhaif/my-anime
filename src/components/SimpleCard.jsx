import React,{ useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'

function SimpleCard({an}) {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/search/${an.mal_id}`,{state:an})
}
  
  return (
    <div key={an.title} className='bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row'>
    <img src={an.image_url} className="block w-full sm:max-w-xs mr-4 object-cover  mb-4 sm:mb-0" alt={`${an.title} image`} />
              <div className='flex flex-1 flex-col space-y-4 '>
                  <h3 className='text-lg md:text-2xl font-semibold tracking-wide text-t-dark  font-robert ' >{an.title}</h3>
                  <p className='truncate'>{an.synopsis}</p>
                  <button className='px-4 py-1 bg-bg-prime text-white' onClick={handleClick}>
                  View
                  </button>
                  
                  
                  </div>
                  </div>
  )
}

export default SimpleCard

{/**
      
        */}