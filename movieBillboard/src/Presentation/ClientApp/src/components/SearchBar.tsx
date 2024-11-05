// components/SearchBar.tsx
import React, { useState } from 'react';
import { searchMovies } from '../services/movieApi';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = await searchMovies(query);
    console.log(results);
  };

  return (
    <div className="search-bar">
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search movies" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
