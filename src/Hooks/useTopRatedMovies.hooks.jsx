import { API_OPTIONS } from "../utils/constant.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice.utils";

//Since the browse component was getting messy, we created a own costum hook for it
//So this hook is just fething data and updating the store bas  !

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  //doing Memoisation >>> on every re-render the API call is done again & again so doing it by subscribing to the store & checking if data is alrady present or not .... if not then only we should call
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

  //Fething the data of topRatedMovies from tmdb and updating the store
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (!topRatedMovies || topRatedMovies.length === 0) {
      getTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;
