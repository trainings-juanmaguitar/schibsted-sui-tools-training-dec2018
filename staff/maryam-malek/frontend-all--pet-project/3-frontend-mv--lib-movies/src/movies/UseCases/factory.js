import MoviesRepositoriesFactory from '../Repositories/factory'

import ListPopularMoviesUseCase from './ListPopularMoviesUseCase'

class MoviesUseCasesFactory {
  static listPopularMoviesUseCase = ({config}) =>
    new ListPopularMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}

export default MoviesUseCasesFactory
