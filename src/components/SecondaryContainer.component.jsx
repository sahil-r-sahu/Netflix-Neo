import MovieList from "./MovieList.component";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies && (
      <div className="bg-black  ">
        <div className="px-2 -mt-52 z-20 relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Web Series"} movies={movies.popularWebSeries} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          {/*  <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
