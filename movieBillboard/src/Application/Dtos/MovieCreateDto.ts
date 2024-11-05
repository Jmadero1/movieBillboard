// Dtos/MovieCreateDto.ts
export class MovieCreateDto {
    title: string;
    description?: string;
    posterUrl?: string;
    releaseYear?: number;
    genre?: string;
    director?: string;
    actors?: string;
    imdbRating?: number;
  
    constructor(
      title: string,
      description?: string,
      posterUrl?: string,
      releaseYear?: number,
      genre?: string,
      director?: string,
      actors?: string,
      imdbRating?: number
    ) {
      this.title = title;
      this.description = description;
      this.posterUrl = posterUrl;
      this.releaseYear = releaseYear;
      this.genre = genre;
      this.director = director;
      this.actors = actors;
      this.imdbRating = imdbRating;
    }
  }
  