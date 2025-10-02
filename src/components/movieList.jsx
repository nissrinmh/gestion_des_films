import React from 'react';
import { Star, Heart, Award, Calendar, User } from 'lucide-react';

const MovieList = ({ movies, onSelectMovie, onFavorite, favorites = [] }) => {
  const isFavorite = (movie) => {
    return favorites.some(fav => fav.title === movie.title);
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.title} className="movie-card fade-in" onClick={() => onSelectMovie(movie)}>
          <button 
            className={`favorite-btn ${isFavorite(movie) ? 'active' : ''}`}
            onClick={(e) => { 
              e.stopPropagation(); 
              onFavorite(movie); 
            }}
          >
            <Heart 
              size={25} 
              fill={isFavorite(movie) ? 'red' : 'none'}
              color={isFavorite(movie) ? 'black' : 'black'}
              className={isFavorite(movie) ? 'filled' : ''}
            />
          </button>
          <h2>{movie.title}</h2>
          <p><User size={16} /> <strong>Réalisateur:</strong> {movie.director}</p>
          <p><Award size={16} /> <strong>Genre:</strong> {movie.genre}</p>
          <p><Calendar size={16} /> <strong>Année:</strong> {movie.releaseYear}</p>
          <div className="rating">
            <Star size={16} fill="gold" />
             {movie.rating}/10
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;