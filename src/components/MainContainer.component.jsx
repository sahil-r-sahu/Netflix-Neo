import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground.component";
import VideoTitle from "./VideoTitle.component";

const MainContainer = () => {
  //Subscribing the store to get nowPlayingMovies data from the store to render it in mainComtainer's background
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (movies === null) return; //Early return => since it's posible the we are rendering this even before the store gets updated

  //nowPlayingMovies returns 20 movies out of which taking 1st as main
  const mainMovie = movies[0];

  //Extracting things from mainMovie to pass as props
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} discrption={overview} />
      <VideoBackground movie_Id={id} />
    </div>
  );
};

export default MainContainer;
