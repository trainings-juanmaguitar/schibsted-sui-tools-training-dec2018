import {FetcherFactory} from '@s-ui/domain'
import MoviesEntitiesFactory from '../Entities/factory'

import HTTPMoviesRepository from './HTTPMoviesRepository'

class MoviesRepositoriesFactory {

  static httpMoviesRepository = ({config}) =>
    new HTTPMoviesRepository({
      config,
      moviesEntityFactory: MoviesEntitiesFactory.movieEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })
}

export default MoviesRepositoriesFactory
