import {useState,useEffect} from 'react'
import {useNavigate,useParams,Link, useLocation} from 'react-router-dom'
import axios from 'axios'


const aot='https://i0.wp.com/www.animegeek.com/wp-content/uploads/2020/05/Attack-On-Titan-Season-4-release-date-delayed-MAPPA-Shingeki-no-Kyojin-Season-4.jpg'
const aot1="https://cdn.myanimelist.net/images/anime/1173/92110.jpg?s=410d006fea0608544e9861a6f261c692"
function Item() {
    const [anime,setAnime]=useState({})
    const location = useLocation();

    useEffect(()=>{
        setAnime(location.state)
    },[])
    // const [anime,setAnime]=useState({})

    // const navigate=useNavigate()
    // const params=useParams()


    // useEffect(()=>{
//         const fetchAnime=()=>{

        
//         const options = {
//   method: 'GET',
//   url: 'https://jikan1.p.rapidapi.com/search/anime',
//   params: {q: params.animeTitle},
//   headers: {
//     'x-rapidapi-host': 'jikan1.p.rapidapi.com',
//     'x-rapidapi-key': 'a5990e9e61mshcc17f1aac7fdd5ap12a58ajsn263efd24ef47'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data.results[0]);
//     setAnime(response.data.results[0])
// }).catch(function (error) {
// 	console.error(error);
// });
// }
// fetchAnime()
    // },[navigate,params.animeId])
    
  return (
      <> 
      {true &&(

        <main className='h-screen bg-center bg-no-repeat bg-cover ' style={{ 
                backgroundImage: `url(${anime.image_url})`}}>
            
            
            <section className='h-full w-full bg-bg-third/70 rounded-md   text-bg-dark flex flex-col space-y-4  shadow-xl shadow-gray-100  '>
            
                    <div className='w-full'>
                        <img className='w-screen ' src={`${anime.image_url}`} alt="" />
                    </div>
                    <div className='px-4 space-y-4 py-7 max-w-sm'>
                        <p className='text-center text-2xl font-robert font-semibold tracking-wider'>{anime.title} </p>
                        <p className='text-xl '>Episodes {anime.episodes}</p>
                        <p className='max-w-xs'>{anime.synopsis}</p>
                        <p>{anime.score}</p>
                        <p>{anime.members}</p>
                        <p>{anime.rated}</p>
                    </div>
            </section>
           
        </main>
      )}
      </>
  )
}

export default Item