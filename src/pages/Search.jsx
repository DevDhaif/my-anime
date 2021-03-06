import {useState} from 'react'
import Card from '../components/Card'
import axios from "axios";
import Spinner from '../components/Spinner';


function Search() {

    const [query,setQuery]=useState('attack')
    const [list,setList]=useState([])
    const [loading,setLoading]=useState(false)
    const api = {
        base: import.meta.env.VITE_BASE_URL,
        host: import.meta.env.VITE_HOST,
        key: import.meta.env.VITE_KEY
    };

    
    
    const handleSearch= async(e)=>{
        e.preventDefault();
        
       
        setLoading(true)
        
        const options = {
        method: 'GET',
        url: `${api.base}/search/anime`,
        params: {q: query},
        headers: {
            'x-rapidapi-host': 'jikan1.p.rapidapi.com',
            'x-rapidapi-key': api.key
        }
        };

        axios.request(options).then(function (response) {
            
            setList(response.data.results)
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    
  return (
    <div className='space-y-4  flex flex-col items-center'>
        <header>
            <p className='text-lg md:text-3xl '>Search for Your favorite anime</p>
            
        </header>
        <main className='space-y-4 w-full '>
            <form 
            className='text-bg-dark  mx-auto w-full flex justify-center'
            onSubmit={handleSearch}
            >
                <input 
                className='px-4 py-2 w-full md:w-1/2  rounded-l-md  outline-none ' 
                type="text"
                placeholder='Search for anime ...'
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}    />
                <button 
                className='bg-bg-prime text-t-dark px-4 py-2 rounded-r-md ' 
                type="submit"
                >Search</button>
            </form>
            {loading && (
                <Spinner/>
            )}
            {list &&(

            
            <div className=' grid grid-cols-1 gap-8  sm:grid-cols-2'>
            {list.map((anime)=>(
                
                <Card key={anime.mal_id} anime={anime}/>
                
            ))}
                
            </div>
            )}

        </main>
    </div>
  )
}

export default Search