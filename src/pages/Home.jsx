import {useState,useEffect} from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import SimpleCard from '../components/SimpleCard';
const { Option } = Select;

function Home() {
  const [list,setList]=useState([])
  const [genre,setGenre]=useState(1)

  const navigate=useNavigate()

 const fetchAnimeDetails=(  )=>{
  const options = {
    method: 'GET',
    url: `https://jikan1.p.rapidapi.com/genre/anime/${genre}/1`,
    headers: {
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
        'x-rapidapi-key': 'a5990e9e61mshcc17f1aac7fdd5ap12a58ajsn263efd24ef47'
    }
    };

    axios.request(options).then(function (response) {
      
        setList(response.data.anime);
        
        
    }).catch(function (error) {
        console.error(error);
    });
}

useEffect(() => {
    if(genre>0){
    fetchAnimeDetails();
}}, [genre]) 
const handleChange=(e)=>{
  setGenre(e.target.value)
  
}
const handleClick=(an)=>{
  console.log(an);
  // navigate(`${an.mal_id}`,{state:an})
}
    
  return (
    <div className='container mx-auto space-y-8 mt-4'> 
        <div className='flex flex-col justify-center space-y-4'>
          <h1 className='text-lg md:text-xl text-t-dark'>Choose a Genre</h1>
          <select name="genre" className='p-2 bg-bg-prime' value={genre} id="genre"  onChange={handleChange}>
            <option value="1">Action</option>
            <option value="2">Adventure</option>
            <option value="4">Comedy</option>
            <option value="6">Demons</option>
            <option value="37">Supernatural</option>
            <option value="13">Historical</option>
            <option value="17">Martial Arts</option>
            <option value="21">Samurai</option>
            <option value="40">Psychological</option>
          </select>
          
        </div>

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {list.map((an)=>(
            <SimpleCard key={an.mal_id} an={an}/>
          ))}
        </section>
    </div>
  )
}

export default Home