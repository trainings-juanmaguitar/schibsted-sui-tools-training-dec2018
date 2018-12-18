import MovieEntity from './MovieEntity'

class MoviesEntitiesFactory {
  static moviesEntity = movie => new MovieEntity(movie)
}

export default MoviesEntitiesFactory
