import React from 'react';
import { Heart, Star, Calendar, User, Award, Sparkles } from 'lucide-react';

const Favorites = ({ favorites }) => {
  if (favorites.length === 0) {
    return (
      <div className="empty-state">
        <Heart size={80} color="#dc143c" />
        <h3>💖 Votre collection VIP est vide</h3>
        <p>🎬 Découvrez vos futurs coups de cœur et ajoutez-les à votre sélection personnelle en cliquant sur le cœur !</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>💖 Ma Collection VIP 🌟</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        🎭 Vous avez {favorites.length} chef{favorites.length > 1 ? 's' : ''}-d'œuvre dans votre collection VIP ✨
      </p>
      <ul>
        {favorites.map(movie => (
          <li key={movie.title} className="favorite-movie">
            <h3>{movie.title}</h3>
            <div className="movie-info">
              <p><User size={26} color='crimson'/> <strong> Réalisateur :</strong> {movie.director}</p>
              <p><Calendar size={26} color='crimson' /> <strong> Année :</strong> {movie.releaseYear}</p>
              <p><Award size={26} color='crimson' /> <strong> Genre :</strong> {movie.genre}</p>
              <p><Star size={26} color='crimson' /> <strong> Note :</strong> {movie.rating}/10</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;