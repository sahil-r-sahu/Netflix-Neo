import Header from "./Header.component";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.hooks";
import MainContainer from "./MainContainer.component";
import SecondaryContainer from "./SecondaryContainer.component";
import usePopularMovies from "../Hooks/usePopularMovies.hooks";
import useUpcomingMovies from "../Hooks/useUpcomingMovies.hooks";
import useTopRatedMovies from "../Hooks/useTopRatedMovies.hooks";
import usePopularWebSeries from "../Hooks/usePopularWebSeries.hooks";
import GptSearch from "./GptSearch.component";
import { useSelector } from "react-redux";
import Footer from "./Footer.component";

const Browse = () => {
  //Subscribing to store to get boolean value of gpt button
  const showGptSearchs = useSelector((store) => store.gptSearch.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularWebSeries();

  return (
    <div>
      <Header />
      {showGptSearchs ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Browse;
