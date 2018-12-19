import MoviesMapper from './MoviesMapper'

import MovieEntitiesFactory from '../Entities/factory'

class MoviesMapperFactory {
  static moviesMapper = ({config}) =>
    new MoviesMapper({
      config,
      movieEntity: MovieEntitiesFactory.movieEntity
    })
}

export default MoviesMapperFactory
