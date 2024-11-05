
import axios from 'axios';
import { IOmdbApiService } from '../../Domain/Interfaces/IOmdbApiService';
import { Movie } from '../../Domain/Entities/Movie';

export class OmdbApiService implements IOmdbApiService
{
  private readonly apiUrl = 'https://www.deployvision.com/api/omdb';

async fetchMovieByTitle(title: string): Promise < Movie | null > {
    const response = await axios.get(`${ this.apiUrl}/ search ? title =${ encodeURIComponent(title)}`);
    const movieData = response.data;
    if (!movieData) return null;

    return new Movie(
      movieData.id,
      movieData.title,
      movieData.description,
      movieData.posterUrl,
      movieData.releaseYear,
      movieData.genre,
      movieData.director,
      movieData.actors,
      movieData.imdbRating
    );
}

async fetchMoviesBySaga(saga: string): Promise<Movie[]> {
    const response = await axios.get(`${ this.apiUrl}/ search ? title =${ encodeURIComponent(saga)}`);
    const moviesData = response.data;
    return moviesData.map((movieData: any) => new Movie(
      movieData.id,
      movieData.title,
      movieData.description,
      movieData.posterUrl,
      movieData.releaseYear,
      movieData.genre,
      movieData.director,
      movieData.actors,
      movieData.imdbRating
    ));
}
}
