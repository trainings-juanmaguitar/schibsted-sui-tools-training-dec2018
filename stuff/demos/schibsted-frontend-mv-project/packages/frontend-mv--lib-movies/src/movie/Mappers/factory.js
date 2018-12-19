import MovieMapper from './MovieMapper'
import MovieEntitiesFactory from '../Entities/factory'

class MoviesMapperFactory {
  static movieMapper = ({config}) =>
    new MovieMapper({
      config,
      movieEntity: MovieEntitiesFactory.movieEntity
    })
}

export default MoviesMapperFactory
