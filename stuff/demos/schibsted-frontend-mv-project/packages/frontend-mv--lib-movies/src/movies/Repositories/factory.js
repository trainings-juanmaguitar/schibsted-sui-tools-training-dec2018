import {FetcherFactory} from '@s-ui/domain'
import HTTPMoviesRepository from './HTTPMoviesRepository'
import MovieMapperFactory from '../Mappers/factory'
import MoviesValueObjectsFactory from '../ValueObjects/factory'
import factoryLogger from '../../logger/factory'

class MoviesRepositoriesFactory {
  static httpMoviesRepository = ({config}) =>
    new HTTPMoviesRepository({
      config,
      mapper: MovieMapperFactory.movieMapper({config}),
      log: factoryLogger({prefix: 'HTTPMoviesRepository'}),
      fetcher: FetcherFactory.httpFetcher({config}),
      moviesListValueObject: MoviesValueObjectsFactory.moviesListValueObject
    })
}

export default MoviesRepositoriesFactory
