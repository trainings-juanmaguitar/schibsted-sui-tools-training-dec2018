import {FetcherFactory} from '@s-ui/domain'
import MoviesMapperFactory from '../Mapper/factory'
import HTTPMoviesRepository from './HTTPMoviesRepository'
import MoviesListValueObjectFactory from '../ValueObjects/factory'

class MoviesRepositoriesFactory {
  static httpMoviesRepository = ({config}) =>
    new HTTPMoviesRepository({
      config,
      mapper: MoviesMapperFactory.moviesMapper({config}),
      fetcher: FetcherFactory.httpFetcher({config}),
      moviesListValueObjectFactory:
        MoviesListValueObjectFactory.moviesListValueObject
    })
}

export default MoviesRepositoriesFactory
