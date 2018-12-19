import MovieEntity from './MovieEntity'

class MovieEntitiesFactory {
  static movieEntity = properties => new MovieEntity(properties)
}

export default MovieEntitiesFactory
