import { API_OPTIONS } from "../utils/constant.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice.utils";

//Since the browse component was getting messy, we created a own costum hook for it
//So this hook is just fething data and updating the store bas  !

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  //Fething the data of upcomingMovies from tmdb and updating the store
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
