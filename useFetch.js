// import axios from "axios";

// const url=import.meta.env.VITE_HOST


// export const testFetch=async(endPoint)=>{
//     console.log(endPoint);
//     const api = {
//         base: import.meta.env.VITE_BASE_URL,
//         host: import.meta.env.VITE_HOST,
//         key: import.meta.env.VITE_KEY
//     };

//     const options = {
//     method: 'GET',
//     url: `${api.base}/${endPoint}`,
//     headers: {
//         'x-rapidapi-host': `${api.host}`,
//         'x-rapidapi-key': `${api.key}`
//     }
//     };

//     axios.request(options).then(function (response) {
//         return(response.data.top);
//         setLoading(false)
        
//     }).catch(function (error) {
//         console.error(error);
//     });
// } 
import {useState,useEffect} from 'react'



function useFetch(url,options) {
  const [loading,setLoading]=useState(true)
  const [data,setData]=useState(null)
  const [error,setError]=useState(null)

  useEffect(()=>{
    const fetchData=async()=>{
    try{
      const response=await fetch(url,options)
      const data=await response.json()
      console.log(data);
      setData(data)
      setLoading(false)
    }
    catch(error){
      setError(error)
      setLoading(false)
    }
    }

    fetchData()
    //eslint-disable-next-line react-hoooks/exhaustive-deps
  },[])

  return {data,loading,error}
}

export default useFetch