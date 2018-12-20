import {UseCase} from '@s-ui/domain'

class ListMoviesByIdUseCase extends UseCase {
  constructor({config, repository, query}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute({id}) {
    const movie = await this._repository.listMoviesById({id})

    return movie.toJSON()
  }
}

export default ListMoviesByIdUseCase
