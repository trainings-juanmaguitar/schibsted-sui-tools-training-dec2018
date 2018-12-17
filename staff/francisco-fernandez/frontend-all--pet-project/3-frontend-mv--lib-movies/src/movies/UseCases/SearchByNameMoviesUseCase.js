import {UseCase} from '@s-ui/domain'

class SearchByNameMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }

  async execute({query}) {
    const movies = await this._repository.searchByName({query})
    return movies.map(student => student.toJSON())
  }
}

export default SearchByNameMoviesUseCase
