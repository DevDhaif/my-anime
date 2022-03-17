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