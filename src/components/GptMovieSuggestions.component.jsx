import { useSelector } from "react-redux";
import MovieList from "./MovieList.component";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.movie);
  const { MovieResults, MovieNames } = useSelector((store) => store.gptSearch);

  return (
    <div className="p-2 sm:p-4 m-2 sm:m-4 bg-black/40 rounded-2xl text-white bg-opacity-90">
      {MovieNames && (
        <div>
          {MovieNames.map((MovieNames, index) => (
            <MovieList
              key={MovieNames}
              title={MovieNames}
              movies={MovieResults[index]}
            />
          ))}
        </div>
      )}
      <div>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Web Series"} movies={movies.popularWebSeries} />
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
