// App.tsx
import React from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import SearchBar from './components/SearchBar';
import RandomMovie from './components/RandomMovie';

const App: React.FC = () => (
  <div className="app">
    <RandomMovie />
    <SearchBar />
    <MovieForm />
    <MovieList />
  </div>
);

export default App;
