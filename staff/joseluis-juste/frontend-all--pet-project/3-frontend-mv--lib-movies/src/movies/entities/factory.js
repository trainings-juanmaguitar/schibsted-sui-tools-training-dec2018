import MovieEntity from "./movieentity";

class MoviesEntitiesFactory {
  static movieEntity = movie => new MovieEntity(movie);
}

export default MoviesEntitiesFactory;
