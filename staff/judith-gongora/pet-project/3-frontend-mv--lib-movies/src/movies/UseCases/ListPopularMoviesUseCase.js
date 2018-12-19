import {UseCase} from '@s-ui/domain'

class ListPopularMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute() {
    const movies = await this._repository.listPopularMovies()
    return movies.map(movie => movie.toJSON())
  }
}

export default ListPopularMoviesUseCase
