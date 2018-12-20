import {UseCase} from '@s-ui/domain'

class ListMoviesByNameUseCase extends UseCase {
  constructor({config, repository, query}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute({query}) {
    const movies = await this._repository.listMoviesByName({query})

    return movies.map(movie => movie.toJSON())
  }
}

export default ListMoviesByNameUseCase
