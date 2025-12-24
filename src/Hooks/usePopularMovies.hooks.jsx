import { API_OPTIONS } from "../utils/constant.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice.utils";

//Since the browse component was getting messy, we created a own costum hook for it
//So this hook is just fething data and updating the store bas  !

const usePopularMovies = () => {
  const dispatch = useDispatch();

  //Fething the data of popularMovies from tmdb and updating the store
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
