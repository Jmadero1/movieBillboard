
import { Movie } from '../../Domain/Entities/Movie';
import { MovieDto } from '../Dtos/MovieDto';
import { MovieCreateDto } from '../Dtos/MovieCreateDto';

export interface IMovieService {
  getAllMovies(): Promise<MovieDto[]>;                   
  getMovieById(id: string): Promise<MovieDto | null>;    
  createMovie(movieCreateDto: MovieCreateDto): Promise<void>;  
  updateMovie(id: string, movieCreateDto: MovieCreateDto): Promise<void>;  
  deleteMovie(id: string): Promise<void>;                
  getRandomMovie(): Promise<MovieDto | null>;            
  searchMovies(title: string): Promise<MovieDto[]>;      
}
