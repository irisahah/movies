import SearchMovies from './SearchMovies';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="search">
        <h1>Search for movies</h1>
        <SearchMovies />
      </div>
      <div className="results">
        <h1>Search results...</h1>
      </div>
    </div>
  );
}

export default App;
