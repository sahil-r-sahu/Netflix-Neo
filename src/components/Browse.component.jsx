import Header from "./Header.component";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.hooks";
import MainContainer from "./MainContainer.component";
import SecondaryContainer from "./SecondaryContainer.component";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div>Browse.............</div>
    </div>
  );
};

export default Browse;
