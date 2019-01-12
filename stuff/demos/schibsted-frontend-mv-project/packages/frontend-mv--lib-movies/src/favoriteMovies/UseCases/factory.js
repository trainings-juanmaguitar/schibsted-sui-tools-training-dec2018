import FavoriteMoviesRepositoriesFactory from '../Repositories/factory'
import FavoriteMoviesServicesFactory from '../Services/factory'

import GetFavoritesMoviesIdsUseCase from './GetFavoritesMoviesIdsUseCase'
import GetFavoritesMoviesUseCase from './GetFavoritesMoviesUseCase'

export default class FavoriteMoviesUseCasesFactory {
  static getFavoritesMoviesIdsUseCase = ({config}) =>
    new GetFavoritesMoviesIdsUseCase({
      repository: FavoriteMoviesRepositoriesFactory.httpFavoriteMoviesRepository(
        {config}
      )
    })

  static getFavoritesMoviesUseCase = ({config}) =>
    new GetFavoritesMoviesUseCase({
      service: FavoriteMoviesServicesFactory.getFavoritesMoviesService({config})
    })
}
