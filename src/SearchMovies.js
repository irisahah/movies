import { useState } from 'react';
import { searchMovies } from './utils';

function SearchMovies() {
  const [query, setQuery] = useState('');

  const performSearch = async () => {
    await searchMovies(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="button" onClick={performSearch}>Search</button>
    </div>
  );
}

export default SearchMovies;
