import MovieMapper from './MovieMapper'
import MoviesEntitiesFactory from '../Entities/factory'

class MoviesMapperFactory {
  static movieMapper = ({config}) =>
    new MovieMapper({
      config,
      movieEntity: MoviesEntitiesFactory.movieEntity
    })
}

export default MoviesMapperFactory
