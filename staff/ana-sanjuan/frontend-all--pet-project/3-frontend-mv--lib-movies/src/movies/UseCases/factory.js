import MoviesRepositoriesFactory from '../Repositories/factory'

import ListPopularMoviesUseCase from './ListPopularMoviesUseCase'
import ListRecentMoviesUseCase from './ListRecentMoviesUseCase'
import ListMoviesByNameUseCase from './ListMoviesByNameUseCase'
import ListMoviesByIdUseCase from './ListMoviesByIdUseCase'

class MoviesUseCasesFactory {
  static listPopularMoviesUseCase = ({config}) =>
    new ListPopularMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })

  static listRecentMoviesUseCase = ({config}) =>
    new ListRecentMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
  static listMoviesByNameUseCase = ({config}) =>
    new ListMoviesByNameUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
  static listMoviesByIdUseCase = ({config}) =>
    new ListMoviesByIdUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}

export default MoviesUseCasesFactory
