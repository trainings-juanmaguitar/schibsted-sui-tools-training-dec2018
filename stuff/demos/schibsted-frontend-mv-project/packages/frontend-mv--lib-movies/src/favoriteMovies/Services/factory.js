import FavoriteMoviesRepositoriesFactory from '../Repositories/factory'

import MoviesRepositoriesFactory from '../../movies/Repositories/factory'
import MoviesValueObjectsFactory from '../../movies/ValueObjects/factory'
import MovieMapperFactory from '../../movies/Mappers/factory'

import GetFavoritesMoviesService from './GetFavoritesMoviesService'

class FavoriteMoviesServicesFactory {
  static getFavoritesMoviesService = ({config}) =>
    new GetFavoritesMoviesService({
      config,
      favoriteMoviesRepository: FavoriteMoviesRepositoriesFactory.httpFavoriteMoviesRepository(
        {config}
      ),
      moviesRepository: MoviesRepositoriesFactory.httpMoviesRepository({
        config
      }),
      mapper: MovieMapperFactory.movieMapper({config}),
      moviesListValueObject: MoviesValueObjectsFactory.moviesListValueObject
    })
}

export default FavoriteMoviesServicesFactory
