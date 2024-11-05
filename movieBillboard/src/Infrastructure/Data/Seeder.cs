
import { IOmdbApiService } from '../../Domain/Interfaces/IOmdbApiService';
import { IMovieRepository } from '../../Domain/Interfaces/IMovieRepository';

export class Seeder
{
    constructor(
    private readonly movieRepository: IMovieRepository,
    private readonly omdbApiService: IOmdbApiService
  ) {}

  async seedMovies(sagaTitle: string): Promise<void> {
    const movies = await this.omdbApiService.fetchMoviesBySaga(sagaTitle);
    for (const movie of movies) {
      await this.movieRepository.addMovie(movie);
    }
}
}
