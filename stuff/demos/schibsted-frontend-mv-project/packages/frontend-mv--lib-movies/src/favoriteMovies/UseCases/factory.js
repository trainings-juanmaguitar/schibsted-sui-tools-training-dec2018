import FavoriteMoviesRepositoriesFactory from '../Repositories/factory'
import FavoriteMoviesServicesFactory from '../Services/factory'

import GetFavoritesMoviesIdsUseCase from './GetFavoritesMoviesIdsUseCase'
import GetFavoritesMoviesUseCase from './GetFavoritesMoviesUseCase'
import AddFavoriteMoviesUseCase from './AddFavoriteMoviesUseCase'
import RemoveFavoriteMoviesUseCase from './RemoveFavoriteMoviesUseCase'

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

  static addFavoriteMoviesUseCase = ({config}) =>
    new AddFavoriteMoviesUseCase({
      repository: FavoriteMoviesRepositoriesFactory.httpFavoriteMoviesRepository(
        {config}
      )
    })

  static removeFavoriteMoviesUseCase = ({config}) =>
    new RemoveFavoriteMoviesUseCase({
      repository: FavoriteMoviesRepositoriesFactory.httpFavoriteMoviesRepository(
        {config}
      )
    })
}
