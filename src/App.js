import React, { useState } from 'react';
import SearchMovies from './SearchMovies';
import Movie from './Movie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app-container">
      <div className="search-column">
        <h1>Search for movies</h1>
        <SearchMovies onSearch={setMovies} />
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="results-column">
        {selectedMovie && (
          <Movie
            title={selectedMovie.title}
            overview={selectedMovie.overview}
            posterPath={selectedMovie.poster_path}
          />
        )}
      </div>
    </div>
  );
}

export default App;
