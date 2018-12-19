import {UseCase} from '@s-ui/domain'

class SearchMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({query}) {
    const movies = await this._repository.searchMovies({query})
    return movies.map(movie => movie.toJSON())
  }
}

export default SearchMoviesUseCase
