
import React, { useEffect, useState } from 'react';
import { MovieDto } from '../types';
import { fetchRandomMovie } from '../services/movieApi';

const RandomMovie: React.FC = () => {
  const [randomMovie, setRandomMovie] = useState<MovieDto | null>(null);

  useEffect(() => {
    const loadRandomMovie = async () => {
      const movie = await fetchRandomMovie();
      setRandomMovie(movie);
    };
    loadRandomMovie();
  }, []);

  if (!randomMovie) {
    return <p>Loading random movie...</p>;
  }

  return (
    <div className="random-movie">
      <h2>Featured Movie</h2>
      <img src={randomMovie.posterUrl} alt={randomMovie.title} />
      <h3>{randomMovie.title}</h3>
      <p>{randomMovie.description}</p>
      <p>Release Year: {randomMovie.releaseYear}</p>
      <p>IMDb Rating: {randomMovie.imdbRating}</p>
    </div>
  );
};

export default RandomMovie;
