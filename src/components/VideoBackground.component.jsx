import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer.hooks";

const VideoBackground = ({ movie_Id }) => {
  //After filtering the trailer video, to render it, we need the key associated with that trailer video, which has come with the json data of trailer(filter)
  //Instead of directly using key with useState we added it to store and fetching key via subscribing it
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useMovieTrailer(movie_Id);

  return (
    <div className="pt-8 md:p-0 bg-black">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
