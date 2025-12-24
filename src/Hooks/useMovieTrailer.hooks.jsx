import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant.utils";
import { addTrailerVideo } from "../utils/movieSlice.utils";
import { useEffect } from "react";

const useMovieTrailer = (movie_Id) => {
  const dispatch = useDispatch();

  const getBackgroundVideo = async () => {
    //fetching bg video for given ID
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_Id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    //but this will return an array of all the videos associated with it so we need to filter out the trailer from it
    console.log(json);

    //Filtering trailer from the databased on type. Also, as all id has more than one trailer filtering more with name as official trailer
    //since we only want 1 video we should use find() instead of filter()... as filter() returns array of object and find() returns a object only

    const trailer =
      json.results.find(
        (video) => video.type === "Trailer" && video.name === "Official Trailer"
      ) || json.results.find((video) => video.type === "Trailer");

    console.log(trailer);
    dispatch(addTrailerVideo(trailer)); // Adding trailer to store to get key
  };

  // since data fetching is a side effect in react using it inside a useEffect
  useEffect(() => {
    if (!movie_Id) return;
    getBackgroundVideo();
  }, []);
};

export default useMovieTrailer;
