import React from 'react';
import { ChartBar as BarChart3, Film, Star, Calendar, Heart, TrendingUp, Award, Sparkles, Trophy } from 'lucide-react';

const Statistics = ({ movies, favorites }) => {
  const totalMovies = movies.length;
  const totalFavorites = favorites.length;
  const averageRating = movies.length > 0 
    ? (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(1)
    : 0;

  const genreStats = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  const topGenre = Object.keys(genreStats).reduce((a, b) => 
    genreStats[a] > genreStats[b] ? a : b, Object.keys(genreStats)[0] || 'Aucun'
  );

  const yearStats = movies.reduce((acc, movie) => {
    const decade = Math.floor(movie.releaseYear / 10) * 10;
    acc[decade] = (acc[decade] || 0) + 1;
    return acc;
  }, {});

  const topDecade = Object.keys(yearStats).reduce((a, b) => 
    yearStats[a] > yearStats[b] ? a : b, Object.keys(yearStats)[0] || '0'
  );

  const highestRatedMovie = movies.reduce((prev, current) => 
    (prev.rating > current.rating) ? prev : current, movies[0] || { title: 'Aucun', rating: 0 }
  );

  return (
    <div className="statistics-page">
      <div className="stats">
        <div className="stat-card">
          <Film size={36} color="#ff6b35" />
          <p> Films dans votre cinéma</p>
          <h2>{totalMovies}</h2>
        </div>
        
        <div className="stat-card">
          <Heart size={36} color="#dc143c" />
          
          <p>Coups de cœur</p>
          <h2>{totalFavorites}</h2>
        </div>
        
        <div className="stat-card">
          <Star size={36} color="#ffd23f" />
          <h2>{averageRating}</h2>
          <p>⭐ Note moyenne</p>
        </div>
        
        <div className="stat-card">
          <Award size={36} color="#06ffa5" />
          <h3>{topGenre}</h3>
          <p>🏆 Genre champion</p>
        </div>
        
        <div className="stat-card">
          <Calendar size={36} color="#00d9ff" />
          <h3>{topDecade}s</h3>
          <p>📅 Époque dorée</p>
        </div>
        
        <div className="stat-card">
          <Trophy size={36} color="#d4af37" />
          <h3>{highestRatedMovie.rating}</h3>
          <p>🏆 Score parfait</p>
        </div>
      </div>

      <div className="detailed-stats">
        <div className="stat-section">
          <h3>🎭 Univers Cinématographiques</h3>
          <div className="genre-chart">
            {Object.entries(genreStats).map(([genre, count]) => (
              <div key={genre} className="genre-bar">
                <span className="genre-name">{genre}</span>
                <div className="bar-container">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${(count / totalMovies) * 100}%` }}
                  ></div>
                  <span className="count">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stat-section">
          <h3>🏆 Chef-d'œuvre Absolu</h3>
          <div className="top-movie">
            <h4>{highestRatedMovie.title}</h4>
            <p>🎬 Réalisateur: {highestRatedMovie.director}</p>
            <p>⭐ Note: {highestRatedMovie.rating}/10</p>
            <p>📅 Année: {highestRatedMovie.releaseYear}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;