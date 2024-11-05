
import { Movie } from '../Entities/Movie';

export interface IMovieRepository {
  getAllMovies(): Promise<Movie[]>;                    
  getMovieById(id: string): Promise<Movie | null>;     
  addMovie(movie: Movie): Promise<void>;               
  updateMovie(movie: Movie): Promise<void>;           
  deleteMovie(id: string): Promise<void>;              
  getRandomMovie(): Promise<Movie | null>;             
  searchMovies(title: string): Promise<Movie[]>;      
}
