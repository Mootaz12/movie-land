/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <span>{movie.Title}</span>
      </div>
    </div>
  );
}
