import { createContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import animeReducer from "./AnimeReducer";

const AnimeContext = createContext();


export const AnimeProvider = ({ children }) => {
  const intialState = {
    animeList:[],
    anime:[],
    episodes:[],
    loading:false
  };
  const [state, dispatch] = useReducer(animeReducer, intialState);
  const params=useParams()
  useEffect(async() => {
    dispatch({type:'SET_LOADING'})
    const searchAnimes=async ()=>{
      console.log(params);
        const animeData=await searchAnimes(params)
        dispatch({type:'GET_ANIMES_BY_SEARCH',payload:animeList})
    }
    getUserData()
}, [dispatch,params.login]);

  return (
    <AnimeContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContext;