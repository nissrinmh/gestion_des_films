import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Plus, Heart, ChartBar as BarChart3, Star, TrendingUp, Calendar, Sparkles, Award, Clock, LogOut } from 'lucide-react';

const Home = ({ movies, favorites }) => {
  const totalMovies = movies.length;
  const totalFavorites = favorites.length;
  const averageRating = movies.length > 0 
    ? (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(1)
    : 0;

  const recentMovies = movies
    .sort((a, b) => b.releaseYear - a.releaseYear)
    .slice(0, 3);

  const topRatedMovies = movies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1> 🎬 Votre Cinéma Personnel 🎭</h1>
            <p>
              Plongez dans l'univers magique du cinéma ! Découvrez, organisez et 
              gérez votre collection de films avec style. Une expérience 
              cinématographique unique vous attend dans cette interface moderne 
              et immersive.
            </p>
            <div className="hero-actions">
              <Link to="/movies" className="cta-button primary">
                <Sparkles size={20} />
                Explorer ma collection
              </Link>
              <Link to="/add-film" className="cta-button secondary">
                <Plus size={20} />
                Nouveau chef-d'œuvre
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <Award size={48} />
              <h3>🌟 Collection Premium 🌟</h3>
              <p>Votre cinéma privé vous attend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-overview">
        <div className="stats">
          <div className="stat-card">
            <div className="stat-icon">
              <Film size={28} />
            </div>
            <div className="stat-info">
              <h3>{totalMovies}</h3>
              <p>🎬 Films dans votre cinéma</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Heart size={28} />
            </div>
            <div className="stat-info">
              <h3>{totalFavorites}</h3>
              <p>❤️ Coups de cœur</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Star size={28} />
            </div>
            <div className="stat-info">
              <h3>{averageRating}</h3>
              <p>⭐ Note moyenne</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-sections">
        <div className="section-grid">
          <div className="featured-section">
            <div className="section-header">
              <Clock size={28}  color='gold'/>
              <h2> Dernières sorties</h2>
            </div>
            <div className="movies-preview">
              {recentMovies.length > 0 ? (
                recentMovies.map(movie => (
                  <div key={movie.title} className="movie-preview">
                    <h4>{movie.title}</h4>
                    <p>{movie.releaseYear}</p>
                    <div className="rating">
                      <Star size={14} />
                      {movie.rating}
                    </div>
                  </div>
                ))
              ) : (
                <p className="empty-message">🎬 Votre collection vous attend...</p>
              )}
            </div>
            <Link to="/movies" className="section-link">
              🎭 Découvrir tous les films →
            </Link>
          </div>

          <div className="featured-section">
            <div className="section-header">
              <Award size={39}  color='gold'/>
              <h2> Hall of Fame</h2>
            </div>
            <div className="movies-preview">
              {topRatedMovies.length > 0 ? (
                topRatedMovies.map(movie => (
                  <div key={movie.title} className="movie-preview">
                    <h4>{movie.title}</h4>
                    <p>{movie.director}</p>
                    <div className="rating">
                      <Star size={14} />
                      {movie.rating}
                    </div>
                  </div>
                ))
              ) : (
                <p className="empty-message">🌟 Vos futurs chefs-d'œuvre...</p>
              )}
            </div>
            <Link to="/statistics" className="section-link">
              📊 Analyser mes goûts →
            </Link>
          </div>
        </div>
      </section>

      <section className="quick-actions">
        <h2>🎪 Votre Studio Personnel</h2>
        <div className="actions-grid">
          <Link to="/add-film" className="action-card">
            <Plus size={40} />
            <h3>🎬 Nouveau Film</h3>
            <p>Ajoutez le prochain blockbuster à votre collection personnelle</p>
          </Link>
          
          <Link to="/favorites" className="action-card">
            <Heart size={40} />
            <h3>💖 Mes Favoris</h3>
            <p>Redécouvrez vos chefs-d'œuvre préférés dans votre collection VIP</p>
          </Link>
          
          <Link to="/statistics" className="action-card">
            <BarChart3 size={40}  />
            <h3>  <TrendingUp size={35}   color='orange'  /> Analytics</h3>
            <p>Découvrez vos tendances et explorez vos goûts cinématographiques</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;