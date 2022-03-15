import {useState,useEffect} from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import SimpleCard from '../components/SimpleCard';
const { Option } = Select;

function Home() {
  const [list,setList]=useState([])
  const [genre,setGenre]=useState(0)

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
  fetchAnimeDetails();
}, [genre]) 
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
          <h1>Choose a Genre</h1>
          <select name="genre" className='p-2 bg-bg-prime' value={genre} id="genre"  onChange={handleChange}>
            <option value="1" className='font-bold'>Action</option>
            <option value="2" className='font-bold'>Adventure</option>
            <option value="4" className='font-bold'>Comedy</option>
            <option value="6" className='font-bold'>Demons</option>
            <option value="30" className='font-bold'>Sports</option>
            <option value="31" className='font-bold'>Super Power</option>
            <option value="7" className='font-bold'>Mystery</option>
            <option value="8" className='font-bold'>Drama</option>
            <option value="32" className='font-bold'>Vampire</option>
            <option value="10" className='font-bold'>Fantasy</option>
            <option value="11" className='font-bold'>Game</option>
            <option value="37" className='font-bold'>Supernatural</option>
            <option value="13" className='font-bold'>Historical</option>
            <option value="14" className='font-bold'>Horror</option>
            <option value="17" className='font-bold'>Martial Arts</option>
            <option value="21" className='font-bold'>Samurai</option>
            <option value="40" className='font-bold'>Psychological</option>
          </select>
          
        </div>

        <section className='grid grid-cols-1 gap-4'>
          {list.map((an)=>(
            <SimpleCard key={an.mal_id} an={an}/>
          ))}
        </section>
    </div>
  )
}

export default Home