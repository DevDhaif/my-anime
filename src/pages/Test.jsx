import { useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import AnimeContext from '../context/AnimeContext';
import { test,searchAnimes } from '../context/AnimeAction';
import { Link } from 'react-router-dom'; 
import Spinner from '../components/Spinner';


function Test() {
    useEffect(()=>{
        test()
        searchAnimes('attack')
    },[])
  return (
    <div>Test</div>
  )
}

export default Test