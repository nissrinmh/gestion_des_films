import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Plus, Heart, ChartBar as BarChart3, Sparkles, Award } from 'lucide-react';

const Header = ({ favoritesCount }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="modern-header">
      <div className="header-container">
        <div className="logo">
          <h1>🎬 CinéMagique 🎭</h1>
        </div>
        
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <Sparkles size={25} />
            <span> Accueil</span>
          </Link>
          
          <Link 
            to="/movies" 
            className={`nav-link ${isActive('/movies') ? 'active' : ''}`}
          >
            <Film size={25} />
            <span> Collection</span>
          </Link>
          
          <Link 
            to="/add-film" 
            className={`nav-link ${isActive('/add-film') ? 'active' : ''}`}
          >
            <Plus size={25} />
            <span> Nouveau</span>
          </Link>
          
          <Link 
            to="/favorites" 
            className={`nav-link ${isActive('/favorites') ? 'active' : ''}`}
          >
            <Heart size={25} />
            <span> Favoris</span>
            {favoritesCount > 0 && (
              <span className="badge">{favoritesCount}</span>
            )}
          </Link>
          
          <Link 
            to="/statistics" 
            className={`nav-link ${isActive('/statistics') ? 'active' : ''}`}
          >
            <BarChart3 size={25} />
            <span> Analytics</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;