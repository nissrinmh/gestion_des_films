import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieDetails;