import { API_OPTIONS } from "../utils/constant.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice.utils";

//Since the browse component was getting messy, we created a own costum hook for it
//So this hook is just fething data and updating the store bas  !

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  //doing Memoisation >>> on every re-render the API call is done again & again so doing it by subscribing to the store & checking if data is alrady present or not .... if not then only we should call
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  //Fething the data of nowPlayingMovies from tmdb and updating the store
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
