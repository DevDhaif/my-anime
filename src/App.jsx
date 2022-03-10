
import { useEffect, useState } from 'react' 
import './index.css'
import axios from 'axios'

function App() {
  const [r,setR]=useState([])
  const [query,setQuery]=useState('')
  
  useEffect(()=>{
    const fetchUserListings=async()=>{

     

const options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/search/anime',
  params: {q: query},
  headers: {
    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
    'x-rapidapi-key': 'a5990e9e61mshcc17f1aac7fdd5ap12a58ajsn263efd24ef47'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.results);
  setR(response.data.results)
}).catch(function (error) {
	console.error(error);
});
     
    }
    fetchUserListings()
  },[query])
  
  return (
    <div>
      <div className='w-full mx-auto px-4 py-2 flex justify-center'>
        <input className='px-4 py-1 outline-none bg-gray-200 rounded-sm' type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
      </div>
      <div className='grid grid-cols-3 gap-6 p-8'>
        {r.map((anime)=>(

          <img src={anime.image_url} alt="" />
        ))}
      </div>
    </div>
    )
}

export default App
