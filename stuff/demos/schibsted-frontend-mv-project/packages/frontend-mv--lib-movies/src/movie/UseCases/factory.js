import MoviesRepositoriesFactory from '../Repositories/factory'

import GetPopularMoviesUseCase from './GetPopularMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'
import GetMovieDetailsByIdUseCase from './GetMovieDetailsByIdUseCase'

export default class MoviesUseCasesFactory {
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })

  static getMovieDetailsByIdUseCase = ({config}) =>
    new GetMovieDetailsByIdUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })

  static getPopularMoviesUseCase = ({config}) =>
    new GetPopularMoviesUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}
