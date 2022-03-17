const animeReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIME":
      return {
        ...state,
        anime: action.payload,
        loading: false,
      };
      case "GET_ANIMES_BY_SEARCH":
      return {
        ...state,
        animes: action.payload,
        loading: false,
      };
      case "GET_ANIMES_BY_TYPE":
      return {
        ...state,
        animes: action.payload,
        loading: false,
      };
      case "GET_UPCOMING_ANIMES":
      return {
        ...state,
        animes: action.payload,
        loading: false,
      };
      case "GET_EPISODES":
        return {
          ...state,
          anime: action.payload.anime,
          episodes: action.payload.episodes,
          loading: false,
        };
      
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    

    default:
      return state;
  }
};
export default animeReducer;