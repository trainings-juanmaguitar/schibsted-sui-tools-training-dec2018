import MoviesRepositoriesFactory from '../Repositories/factory'

import ListPopularMoviesUseCase from './ListPopularMoviesUseCase'
import ListLatestMoviesUseCase from './ListLatestMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'
import GetMovieDetailsUseCase from './GetMovieDetailsUseCase'

class MoviesUseCasesFactory {
  static listPopularMoviesUseCase = ({config}) =>
    new ListPopularMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
  static listLatestMoviesUseCase = ({config}) =>
    new ListLatestMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
  static getMovieDetailsUseCase = ({config}) =>
    new GetMovieDetailsUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}

export default MoviesUseCasesFactory
