import axios from "axios";
const api = {
  base: import.meta.env.VITE_BASE_URL,
  host: import.meta.env.VITE_HOST,
  key: import.meta.env.VITE_KEY
};
const anime=axios.create({
  baseURL:api.base,
  headers:{'x-rapidapi-key':`${api.key}`}
})

//search animes
export const searchAnimes = async (text) => {
    var options = {
  method: 'GET',
  url: `${api.base}/search/anime`,
  params: {q: text},
  headers: {
    'x-rapidapi-host':`${api.host}`,
    'x-rapidapi-key': `${api.key}`
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  return response.data.items;
}).catch(function (error) {
	console.error(error);
});

};



export const getUserAndRepos = async (animeId) => {
  const [user, episodes] = await Promise.all([
    anime.get(`/anime/${animeId}`),
    anime.get(`/anime/${animeId}/episodes`),
  ]);
  return { anime: anime.data, episodes: episodes.data };
}


export const test=()=>{
    console.log('test method');
}