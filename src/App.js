import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import MovieList from './components/movieList';
import SearchBar from './components/searchbar';
import SortButtons from './components/sortbuttons';
import AddFilmForm from './components/addfilmform';
import Pagination from './components/pagination';
import Favorites from './components/favorites';
import Statistics from './components/statistics';
import Filters from './components/filters';
import Footer from './components/footer';
import './App.css';

const initialMovies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "Science Fiction",
    rating: 8.8,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    genre: "Crime",
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    releaseYear: 2008,
    genre: "Action",
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    genre: "Crime",
    rating: 8.9,
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    releaseYear: 1993,
    genre: "Historical Drama",
    rating: 9.0,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    genre: "Drama",
    rating: 9.3,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    releaseYear: 1994,
    genre: "Comedy-Drama",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 1999,
    genre: "Science Fiction",
    rating: 8.7,
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    releaseYear: 1999,
    genre: "Drama",
    rating: 8.8,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    releaseYear: 2003,
    genre: "Fantasy",
    rating: 9.0,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // État pour contrôler la pop-up
  const [genreFilter, setGenreFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const moviesPerPage = 5;


  const openPopup = (movie) => {
    setSelectedMovie(movie);
    setShowPopup(true);
  };


  const closePopup = () => {
    setShowPopup(false);
  };


  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); 
  };


  const handleSort = (type) => {
    setSortBy(type);
  };


  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFavorite = (movie) => {
    if (favorites.includes(movie)) {
      setFavorites(favorites.filter((fav) => fav !== movie)); // Retirer des favoris
    } else {
      setFavorites([...favorites, movie]); // Ajouter aux favoris
    }
  };

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'genre') setGenreFilter(value);
    if (filterType === 'year') setYearFilter(value);
    if (filterType === 'rating') setRatingFilter(value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setGenreFilter('');
    setYearFilter('');
    setRatingFilter('');
    setCurrentPage(1);
  };

  const filteredMovies = movies.filter((movie) => {
    // ( const matchesSearch = 
    //   movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||        {un filtre par mot-clé dans le titre, le genre ou le réalisateur}
    //   movie.director.toLowerCase().includes(searchTerm.toLowerCase());)
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = !genreFilter || movie.genre === genreFilter;       
    const matchesYear = !yearFilter || movie.releaseYear.toString() === yearFilter;
    const matchesRating = !ratingFilter || movie.rating >= parseFloat(ratingFilter);
    
    return matchesSearch && matchesGenre && matchesYear && matchesRating;
  });


  const sortedMovies = sortBy
    ? [...filteredMovies].sort((a, b) => {
        if (sortBy === 'rating') {
          return b.rating - a.rating; // Trier par note (décroissant)
        } else if (sortBy === 'year') {
          return b.releaseYear - a.releaseYear; // Trier par année (décroissant)
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title); // Trier par titre (alphabétique)
        }
        return 0;
      })
    : filteredMovies;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="App">
        <Header favoritesCount={favorites.length} />

        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} favorites={favorites} />}
          />
          
          <Route
            path="/movies"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                <Filters
                  movies={movies}
                  genreFilter={genreFilter}
                  yearFilter={yearFilter}
                  ratingFilter={ratingFilter}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
                <SortButtons onSort={handleSort} />
                <MovieList
                  movies={currentMovies}
                  onSelectMovie={openPopup}
                  onFavorite={handleFavorite}
                  favorites={favorites}
                />
                <Pagination
                  moviesPerPage={moviesPerPage}
                  totalMovies={sortedMovies.length}
                  paginate={paginate}
                />
                {showPopup && (
                  <div className="popup-overlay">
                    <div className="popup-content">
                      <h2>{selectedMovie.title}</h2>
                      <p>
                        <strong>Réalisateur :</strong> {selectedMovie.director}
                      </p>
                      <p>
                        <strong>Année :</strong> {selectedMovie.releaseYear}
                      </p>
                      <p>
                        <strong>Genre :</strong> {selectedMovie.genre}
                      </p>
                      <p>
                        <strong>Note :</strong> {selectedMovie.rating}
                      </p>
                      <button onClick={closePopup} className='close-btn'>X</button>
                    </div>
                  </div>
                )}
              </>
            }
          />

         
          <Route
            path="/add-film"
            element={<AddFilmForm onAddMovie={handleAddMovie} />}
          />

         
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} onFavorite={handleFavorite} />}
          />
          
          <Route
            path="/statistics"
            element={<Statistics movies={movies} favorites={favorites} />}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        

        <Footer />
      </div>
    </Router>
  );
}

export default App;
