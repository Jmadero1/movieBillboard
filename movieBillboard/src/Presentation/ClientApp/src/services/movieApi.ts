// services/movieApi.ts
import axios from 'axios';
import { MovieDto, MovieCreateDto } from '../types';

const apiUrl = '/api/movies';

export const fetchMovies = async (): Promise<MovieDto[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const createMovie = async (movie: MovieCreateDto): Promise<void> => {
  await axios.post(apiUrl, movie);
};

export const searchMovies = async (title: string): Promise<MovieDto[]> => {
  const response = await axios.get(`${apiUrl}/search`, { params: { title } });
  return response.data;
};

export const fetchRandomMovie = async (): Promise<MovieDto | null> => {
  const response = await axios.get(`${apiUrl}/random`);
  return response.data;
};
