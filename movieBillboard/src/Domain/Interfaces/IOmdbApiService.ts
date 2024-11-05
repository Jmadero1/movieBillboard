
import { Movie } from '../Entities/Movie';

export interface IOmdbApiService {
  fetchMovieByTitle(title: string): Promise<Movie | null>;  
  fetchMoviesBySaga(saga: string): Promise<Movie[]>;        
}
