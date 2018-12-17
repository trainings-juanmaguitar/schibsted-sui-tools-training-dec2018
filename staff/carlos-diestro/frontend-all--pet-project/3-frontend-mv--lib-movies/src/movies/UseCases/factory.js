import MoviesRepositoriesFactory from '../Repositories/factory'
import DiscoverMoviesUseCase from './DiscoverMoviesUseCase'

class MoviesUseCasesFactory {
  static discoverMoviesUseCase = ({config}) =>
    new DiscoverMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.httpMoviesRepository({config})
    })
}

export default MoviesUseCasesFactory
