
export class Movie {
    id: string;                   
    title: string;                
    description?: string;         
    posterUrl?: string;           
    releaseYear?: number;         
    genre?: string;               
    director?: string;            
    actors?: string;              
    imdbRating?: number;          
    
    constructor(
      id: string,
      title: string,
      description?: string,
      posterUrl?: string,
      releaseYear?: number,
      genre?: string,
      director?: string,
      actors?: string,
      imdbRating?: number
    ) {
      this.id = id;
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
  