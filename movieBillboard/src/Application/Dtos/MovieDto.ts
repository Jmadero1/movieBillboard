
import { Movie } from '../../Domain/Entities/Movie';

export class MovieDto {
  id: string;
  title: string;
  description?: string;
  posterUrl?: string;
  releaseYear?: number;
  genre?: string;
  director?: string;
  actors?: string;
  imdbRating?: number;

  constructor(movie: Movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.description = movie.description;
    this.posterUrl = movie.posterUrl;
    this.releaseYear = movie.releaseYear;
    this.genre = movie.genre;
    this.director = movie.director;
    this.actors = movie.actors;
    this.imdbRating = movie.imdbRating;
  }
}
