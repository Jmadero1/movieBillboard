
import { IMovieRepository } from '../../Domain/Interfaces/IMovieRepository';
import { Movie } from '../../Domain/Entities/Movie';
import { MovieDbContext } from './MovieDbContext';

export class MovieRepository implements IMovieRepository
{
    constructor(private readonly dbContext: MovieDbContext) {}

  async getAllMovies(): Promise<Movie[]> {
    return await this.dbContext.Movies.findAll();
}

async getMovieById(id: string): Promise < Movie | null > {
    return await this.dbContext.Movies.findByPk(id);
}

async addMovie(movie: Movie): Promise<void> {
    await this.dbContext.Movies.create(movie);
}

async updateMovie(movie: Movie): Promise<void> {
    await this.dbContext.Movies.update(movie, { where: { id: movie.id } });
}

async deleteMovie(id: string): Promise<void> {
    await this.dbContext.Movies.destroy({ where: { id } });
}

async getRandomMovie(): Promise < Movie | null > {
    const movies = await this.dbContext.Movies.findAll();
    if (movies.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
}

async searchMovies(title: string): Promise<Movie[]> {
    return await this.dbContext.Movies.findAll({
    where:
        {
        title: { $like: `%${ title}%` }
        }
    });
}
}
