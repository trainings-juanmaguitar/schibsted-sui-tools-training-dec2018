import FavoriteMoviesRepositoriesFactory from '../Repositories/factory'

import GetFavoritesMoviesIdsUseCase from './GetFavoritesMoviesIdsUseCase'
// import GetFavoritesMoviesListUseCase from './GetFavoritesMoviesListUseCase'

export default class FavoriteMoviesUseCasesFactory {
  static getFavoritesMoviesIdsUseCase = ({config}) =>
    new GetFavoritesMoviesIdsUseCase({
      repository: FavoriteMoviesRepositoriesFactory.httpFavoriteMoviesRepository(
        {config}
      )
    })

  // static getFavoritesMoviesListUseCase = ({config}) =>
  //   new GetFavoritesMoviesListUseCase({
  //     repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
  //   })
}
