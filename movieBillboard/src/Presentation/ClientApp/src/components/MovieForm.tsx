// components/MovieForm.tsx
import React, { useState } from 'react';
import { MovieCreateDto } from '../types';
import { createMovie } from '../services/movieApi';

const MovieForm: React.FC = () => {
  const [movie, setMovie] = useState<MovieCreateDto>({ title: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createMovie(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={movie.title} onChange={e => setMovie({ ...movie, title: e.target.value })} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
