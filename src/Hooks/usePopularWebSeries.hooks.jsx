import { API_OPTIONS } from "../utils/constant.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularWebSeries } from "../utils/movieSlice.utils";

//Since the browse component was getting messy, we created a own costum hook for it
//So this hook is just fething data and updating the store bas  !

const usePopularWebSeries = () => {
  const dispatch = useDispatch();

  //doing Memoisation >>> on every re-render the API call is done again & again so doing it by subscribing to the store & checking if data is alrady present or not .... if not then only we should call
  const popularWebSeries = useSelector((store) => store.movie.popularWebSeries);

  //Fething the data of topRatedMovies from tmdb and updating the store
  const getPopularWebSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularWebSeries(json.results));
  };

  useEffect(() => {
    if (!popularWebSeries || popularWebSeries.length === 0) {
      getPopularWebSeries();
    }
  }, []);
};

export default usePopularWebSeries;
