import MovieItem from "./MovieItem";

function MovieLists({ movies, onSelect }) {
  return (
    <ul className='list list-movies'>
      {movies?.map((movie) => (
        <MovieItem movie={movie} onSelect={onSelect} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieLists;
