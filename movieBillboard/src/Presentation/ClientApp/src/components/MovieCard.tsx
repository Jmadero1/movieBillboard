// components/MovieCard.tsx
import React from 'react';
import { MovieDto } from '../types';

interface MovieCardProps {
  movie: MovieDto;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterUrl} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
  </div>
);

export default MovieCard;
