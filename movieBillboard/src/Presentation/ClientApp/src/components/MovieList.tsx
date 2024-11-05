// components/MovieList.tsx
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { MovieDto } from '../types';
import { fetchMovies } from '../services/movieApi';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MovieDto[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    loadMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
