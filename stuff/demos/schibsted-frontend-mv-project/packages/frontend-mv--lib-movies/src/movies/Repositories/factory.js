import {FetcherFactory} from '@s-ui/domain'
import HTTPMoviesRepository from './HTTPMoviesRepository'
import MoviesEntityFactory from '../Entities/factory'
import MoviesMapperFactory from '../Mappers/factory'
import factoryLogger from '../../logger/factory'

export default class MoviesRepositoryFactory {
  static httpMoviesRepository = ({config}) =>
    new HTTPMoviesRepository({
      config,
      mapper: MoviesMapperFactory.moviesMapper({config}),
      log: factoryLogger({prefix: 'HTTPMoviesRepository'}),
      fetcher: FetcherFactory.httpFetcher({config}),
      movieEntityFactory: MoviesEntityFactory.movieEntity
    })
}
