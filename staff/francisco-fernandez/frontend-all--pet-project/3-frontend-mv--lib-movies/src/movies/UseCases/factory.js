import MoviesRepositoriesFactory from '../Repositories/factory'

import ListMoviesUseCase from './ListMoviesUseCase'
import SearchByNameMoviesUseCase from './SearchByNameMoviesUseCase'

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
}

export default MoviesUseCasesFactory
