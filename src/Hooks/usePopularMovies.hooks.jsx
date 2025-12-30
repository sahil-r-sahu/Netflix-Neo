import { API_OPTIONS } from "../utils/constant.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice.utils";

//Since the browse component was getting messy, we created a own costum hook for it
//So this hook is just fething data and updating the store bas  !

const usePopularMovies = () => {
  const dispatch = useDispatch();

  //doing Memoisation >>> on every re-render the API call is done again & again so doing it by subscribing to the store & checking if data is alrady present or not .... if not then only we should call
  const popularMovies = useSelector((store) => store.movie.popularMovies);

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
    if (!popularMovies || popularMovies.length === 0) {
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;
