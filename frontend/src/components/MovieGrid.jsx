import React from "react";

const MovieGrid = ({ movies }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-6">
    {movies.map(movie => (
      <div key={movie.id} className="hover:scale-105 transition-transform">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded"
        />
      </div>
    ))}
  </div>
);

export default MovieGrid;
