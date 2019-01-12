import CustomFetcherFactory from '../../fetcher/factory'
import HTTPFavoriteMoviesRepository from './HTTPFavoriteMoviesRepository'
import FavoriteMoviesValueObjectFactory from '../ValueObjects/factory'
import factoryLogger from '../../logger/factory'

class FavoriteMoviesRepositoriesFactory {
  static httpFavoriteMoviesRepository = ({config}) =>
    new HTTPFavoriteMoviesRepository({
      config,
      log: factoryLogger({prefix: 'HTTPFavoriteMoviesRepository'}),
      fetcher: CustomFetcherFactory.customHttpFetcher({config}),
      favoriteMoviesValueObject:
        FavoriteMoviesValueObjectFactory.moviesIdsValueObject
    })
}

export default FavoriteMoviesRepositoriesFactory
