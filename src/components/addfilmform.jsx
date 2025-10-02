import React, { useState } from 'react';
import { Plus, RotateCcw, CircleAlert as AlertCircle, Film, Sparkles } from 'lucide-react';

const AddFilmForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !director || !releaseYear || !genre || !rating) {
      setError('Tous les champs sont obligatoires');
      return;
    }
    if (rating < 0 || rating > 10) {
      setError('La note doit être entre 0 et 10');
      return;
    }
    const newMovie = {
      title,
      director,
      releaseYear: parseInt(releaseYear),
      genre,
      rating: parseFloat(rating),
    };
    onAddMovie(newMovie);
    // Message de succès (vous pouvez ajouter une notification toast ici)
    alert('Film ajouté avec succès !');
    setTitle('');
    setDirector('');
    setReleaseYear('');
    setGenre('');
    setRating('');
    setError('');
  };

  return (
    <div className="add-film-form">
      <h2>🎬 Nouveau Chef-d'œuvre 🎭</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>🎭 Titre du film</label>
          <input
            type="text"
            placeholder="Le titre de votre prochain coup de cœur..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>🎬 Réalisateur</label>
          <input
            type="text"
            placeholder="Le maître derrière la caméra..."
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>📅 Année de sortie</label>
          <input
            type="number"
            placeholder="L'année de ce chef-d'œuvre..."
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        <div className="form-group">
          <label>🎪 Genre</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} >
            <option value="">🎭 Choisissez votre univers...</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Action">Action</option>
            <option value="Historical Drama">Historical Drama</option>
            <option value="Comedy-Drama">Comedy-Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Animation">Animation</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
        <div className="form-group">
          <label>⭐ Note (0-10)</label>
          <input
            type="number"
            placeholder="Votre verdict sur 10..."
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="10"
            step="0.1"
          />
        </div>
        {error && (
          <div className="error-message">
            <AlertCircle size={16} />
            {error}
          </div>
        )}
        <div className="form-actions">
          <button type="submit">
            {/* <Sparkles size={16} /> */}
            🎬 Ajouter à ma collection
          </button>
          <button
            type="button"
            onClick={() => {
              setTitle('');
              setDirector('');
              setReleaseYear('');
              setGenre('');
              setRating('');
              setError('');
            }}
          >
            <RotateCcw size={16} />
             Recommencer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFilmForm;