// OmdbApi/OmdbApiService.ts
import axios from 'axios';
import { IOmdbApiService } from '../../Domain/Interfaces/IOmdbApiService';
import { Movie } from '../../Domain/Entities/Movie';

export class OmdbApiService implements IOmdbApiService
{
  private readonly apiUrl: string;
private readonly apiKey: string;

constructor(apiUrl: string, apiKey: string) {
  this.apiUrl = apiUrl;
  this.apiKey = apiKey;
}

async fetchMovieByTitle(title: string): Promise < Movie | null > {
  try
  {
    const response = await axios.get(`${ this.apiUrl}?t =${ encodeURIComponent(title)}
    &apikey =${ this.apiKey}`);
    const movieData = response.data;

    // Verificar si la respuesta contiene un error
    if (movieData.Response === "False")
    {
      console.error(`OMDb API error: ${ movieData.Error}`);
      return null;
    }

    return new Movie(
      movieData.imdbID,
      movieData.Title,
      movieData.Plot,
      movieData.Poster,
      parseInt(movieData.Year),
      movieData.Genre,
      movieData.Director,
      movieData.Actors,
      parseFloat(movieData.imdbRating)
    );
  }
  catch (error)
  {
    console.error(`Error fetching movie by title: ${ error.message}`);
    return null;
  }
}

async fetchMoviesBySaga(saga: string): Promise<Movie[]> {
  try
  {
    const response = await axios.get(`${ this.apiUrl}?s =${ encodeURIComponent(saga)}
    &apikey =${ this.apiKey}`);
    const moviesData = response.data.Search;

    if (!moviesData || moviesData.length === 0)
    {
      console.error("No movies found in saga.");
      return [];
    }

    return moviesData.map((movieData: any) => new Movie(
      movieData.imdbID,
      movieData.Title,
      movieData.Plot,
      movieData.Poster,
      parseInt(movieData.Year),
      movieData.Genre,
      movieData.Director,
      movieData.Actors,
      parseFloat(movieData.imdbRating)
    ));
  }
  catch (error)
  {
    console.error(`Error fetching movies by saga: ${ error.message}`);
    return [];
  }
}
}
