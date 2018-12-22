import MovieEntity from './MovieEntity'

class MoviesEntitiesFactory {
  static movieEntity = properties => new MovieEntity(properties)
}

export default MoviesEntitiesFactory
