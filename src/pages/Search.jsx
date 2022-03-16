import {useState} from 'react'
import Card from '../components/Card'

import axios from "axios";
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

function Search() {
    const [query,setQuery]=useState('')
    const [list,setList]=useState([])
    const [loading,setLoading]=useState(false)



    const handleSearch=(e)=>{
        e.preventDefault();
        setLoading(true)
        

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