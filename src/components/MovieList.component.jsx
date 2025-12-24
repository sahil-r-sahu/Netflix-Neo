import MovieCard from "./MovieCard.component";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="pl-3 pt-3 pb-5">
      <h1 className="text-2xl text-white px-3 pl-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
