import MoviesRepositoriesFactory from '../Repositories/factory'

import ListMoviesUseCase from './ListMoviesUseCase'
import SearchByNameMoviesUseCase from './SearchByNameMoviesUseCase'
import SearchMovieDetailsUseCase from './SearchMovieDetailsUseCase'

class MoviesUseCasesFactory {
  static listMoviesUseCase = ({config}) =>
    new ListMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })

  static searchByNameMoviesUseCase = ({config}) =>
    new SearchByNameMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })

  static searchMovieDetailsUseCase = ({config}) =>
    new SearchMovieDetailsUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}

export default MoviesUseCasesFactory
