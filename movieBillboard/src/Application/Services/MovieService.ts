
import { IMovieService } from '../Interfaces/IMovieService';
import { Movie } from '../../Domain/Entities/Movie';
import { IMovieRepository } from '../../Domain/Interfaces/IMovieRepository';
import { IOmdbApiService } from '../../Domain/Interfaces/IOmdbApiService';
import { MovieDto } from '../Dtos/MovieDto';
import { MovieCreateDto } from '../Dtos/MovieCreateDto';

export class MovieService implements IMovieService {
  constructor(
    private readonly movieRepository: IMovieRepository,
    private readonly omdbApiService: IOmdbApiService
  ) {}

  async getAllMovies(): Promise<MovieDto[]> {
    const movies = await this.movieRepository.getAllMovies();
    return movies.map(movie => new MovieDto(movie));
  }

  async getMovieById(id: string): Promise<MovieDto | null> {
    const movie = await this.movieRepository.getMovieById(id);
    return movie ? new MovieDto(movie) : null;
  }

  async createMovie(movieCreateDto: MovieCreateDto): Promise<void> {
    const movie = new Movie(
      movieCreateDto.id,
      movieCreateDto.title,
      movieCreateDto.description,
      movieCreateDto.posterUrl,
      movieCreateDto.releaseYear,
      movieCreateDto.genre,
      movieCreateDto.director,
      movieCreateDto.actors,
      movieCreateDto.imdbRating
    );
    await this.movieRepository.addMovie(movie);
  }

  async updateMovie(id: string, movieCreateDto: MovieCreateDto): Promise<void> {
    const movie = new Movie(
      id,
      movieCreateDto.title,
      movieCreateDto.description,
      movieCreateDto.posterUrl,
      movieCreateDto.releaseYear,
      movieCreateDto.genre,
      movieCreateDto.director,
      movieCreateDto.actors,
      movieCreateDto.imdbRating
    );
    await this.movieRepository.updateMovie(movie);
  }

  async deleteMovie(id: string): Promise<void> {
    await this.movieRepository.deleteMovie(id);
  }

  async getRandomMovie(): Promise<MovieDto | null> {
    const movie = await this.movieRepository.getRandomMovie();
    return movie ? new MovieDto(movie) : null;
  }

  async searchMovies(title: string): Promise<MovieDto[]> {
    const movies = await this.movieRepository.searchMovies(title);
    return movies.map(movie => new MovieDto(movie));
  }
}
