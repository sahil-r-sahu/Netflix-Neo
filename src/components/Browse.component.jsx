import Header from "./Header.component";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.hooks";
import MainContainer from "./MainContainer.component";
import SecondaryContainer from "./SecondaryContainer.component";
import usePopularMovies from "../Hooks/usePopularMovies.hooks";
import useUpcomingMovies from "../Hooks/useUpcomingMovies.hooks";
import useTopRatedMovies from "../Hooks/useTopRatedMovies.hooks";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div></div>
    </div>
  );
};

export default Browse;
