import MoviesRepositoriesFactory from '../Repositories/factory'

import ListMoviesUseCase from './ListMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'

class MoviesUseCasesFactory {
  static listMoviesUseCase = ({config}) =>
    new ListMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })

  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}

export default MoviesUseCasesFactory
