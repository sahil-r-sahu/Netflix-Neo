import { API_OPTIONS } from "../utils/constant.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice.utils";

//Since the browse component was getting messy, we created a own costum hook for it
//So this hook is just fething data and updating the store bas  !

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  //Fething the data of nowPlayingMovies from tmdb and updating the store
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
