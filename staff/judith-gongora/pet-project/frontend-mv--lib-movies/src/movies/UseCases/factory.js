import MoviesRepositoriesFactory from '../Repositories/factory'

import ListMoviesUseCase from './ListMoviesUseCase'

class MoviesUseCasesFactory {
  static listMoviesUseCase = ({config}) =>
    new ListMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}

export default MoviesUseCasesFactory
